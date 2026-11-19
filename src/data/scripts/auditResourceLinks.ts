import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { allLessons } from "../core/lessonData.js";
import { allVideos } from "../core/videoData.js";
import { getExportUrl } from "./pullLessonPlanPdfs.js";
import type { GeneratedLessonPlan, GeneratedLessonFile } from "../core/lessonPlanTypes.js";
import type { GeneratedVideo } from "../core/videoTypes.js";

const DEFAULT_CONCURRENCY = 4;
const DEFAULT_DURATION_TOLERANCE_SECONDS = 2;
const COMMAND_TIMEOUT_MS = 120_000;
const PDF_TIMEOUT_MS = 120_000;

interface CliOptions {
  videosOnly: boolean;
  lessonsOnly: boolean;
  videoId?: string;
  lessonId?: string;
  concurrency: number;
  durationToleranceSeconds: number;
  outputPath?: string;
}

interface AuditIssue {
  resourceType: "video" | "lesson-plan";
  resourceId: string;
  fileTitle?: string;
  language?: string;
  type: string;
  message: string;
  details?: Record<string, unknown>;
}

interface AuditReport {
  generatedAt: string;
  durationToleranceSeconds: number;
  videos: {
    checked: number;
    passed: number;
    issues: AuditIssue[];
  };
  lessonPlans: {
    checked: number;
    passed: number;
    issues: AuditIssue[];
  };
}

interface YouTubeMetadata {
  title: string;
  duration: number;
  availability?: string;
}

interface CommandResult {
  stdout: string;
  stderr: string;
}

export function normalizeVideoTitle(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^\p{Letter}\p{Number}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function videoTitlesMatch(expected: string, youtube: string): boolean {
  const expectedTitle = normalizeVideoTitle(expected);
  const youtubeTitle = normalizeVideoTitle(youtube);
  if (!expectedTitle || !youtubeTitle) return false;
  return youtubeTitle === expectedTitle ||
    youtubeTitle.includes(expectedTitle) ||
    expectedTitle.includes(youtubeTitle);
}

export function videoDurationsMatch(
  youtubeSeconds: number,
  cloudFrontSeconds: number,
  toleranceSeconds = DEFAULT_DURATION_TOLERANCE_SECONDS,
): boolean {
  return Number.isFinite(youtubeSeconds) &&
    Number.isFinite(cloudFrontSeconds) &&
    Math.abs(youtubeSeconds - cloudFrontSeconds) <= toleranceSeconds;
}

function usage(): string {
  return [
    "Usage:",
    "  npm run audit:resources",
    "  npm run audit:resources -- --videos-only [--video <id>]",
    "  npm run audit:resources -- --lessons-only [--lesson <id>]",
    "",
    "Options:",
    "  --videos-only              Audit only video links",
    "  --lessons-only             Audit only lesson-plan links",
    "  --video <id>               Audit one generated video ID",
    "  --lesson <id>              Audit one generated lesson-plan ID",
    "  --concurrency <count>      Maximum concurrent network checks (default: 4)",
    "  --duration-tolerance <s>   Allowed video duration difference (default: 2 seconds)",
    "  --output <path>            Write the full JSON report to a file",
    "  --help                     Show this help",
    "",
    "Videos are checked with yt-dlp metadata plus FFprobe duration. Lesson-plan PDFs",
    "are compared with a fresh Google Docs/Slides export, including rendered-page fallback.",
  ].join("\n");
}

function parsePositiveNumber(raw: string | undefined, option: string): number {
  if (raw === undefined || raw.startsWith("--")) throw new Error(`${option} requires a value.`);
  const value = Number(raw);
  if (!Number.isFinite(value) || value <= 0) throw new Error(`${option} must be a positive number.`);
  return value;
}

function parseArguments(args: string[]): CliOptions | undefined {
  const options: CliOptions = {
    videosOnly: false,
    lessonsOnly: false,
    concurrency: DEFAULT_CONCURRENCY,
    durationToleranceSeconds: DEFAULT_DURATION_TOLERANCE_SECONDS,
  };
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === "--help" || argument === "-h") {
      console.log(usage());
      return undefined;
    }
    if (argument === "--videos-only") {
      options.videosOnly = true;
      continue;
    }
    if (argument === "--lessons-only") {
      options.lessonsOnly = true;
      continue;
    }
    if (argument === "--video") {
      options.videoId = args[++index];
      if (!options.videoId || options.videoId.startsWith("--")) throw new Error("--video requires an ID.");
      continue;
    }
    if (argument === "--lesson") {
      options.lessonId = args[++index];
      if (!options.lessonId || options.lessonId.startsWith("--")) throw new Error("--lesson requires an ID.");
      continue;
    }
    if (argument === "--concurrency") {
      options.concurrency = parsePositiveNumber(args[++index], "--concurrency");
      if (!Number.isInteger(options.concurrency)) throw new Error("--concurrency must be an integer.");
      continue;
    }
    if (argument === "--duration-tolerance") {
      options.durationToleranceSeconds = parsePositiveNumber(
        args[++index],
        "--duration-tolerance",
      );
      continue;
    }
    if (argument === "--output") {
      const outputPath = args[++index];
      if (!outputPath || outputPath.startsWith("--")) throw new Error("--output requires a path.");
      options.outputPath = path.resolve(outputPath);
      continue;
    }
    throw new Error(`Unknown option: ${argument}\n\n${usage()}`);
  }
  if (options.videosOnly && options.lessonsOnly) {
    throw new Error("Choose either --videos-only or --lessons-only, not both.");
  }
  if (options.videoId && options.lessonsOnly) {
    throw new Error("--video cannot be combined with --lessons-only.");
  }
  if (options.lessonId && options.videosOnly) {
    throw new Error("--lesson cannot be combined with --videos-only.");
  }
  if (options.videoId && options.lessonId) {
    throw new Error("Choose either --video or --lesson, not both.");
  }
  return options;
}

function runCommand(
  command: string,
  args: string[],
  timeoutMs = COMMAND_TIMEOUT_MS,
): Promise<CommandResult> {
  return new Promise((resolve, reject) => {
    const child = execFile(
      command,
      args,
      { timeout: timeoutMs, maxBuffer: 32 * 1024 * 1024 },
      (error, stdout, stderr) => {
        if (error) {
          const details = stderr.trim() || error.message;
          reject(new Error(`${command} failed: ${details}`));
          return;
        }
        resolve({ stdout, stderr });
      },
    );
    child.once("error", (error: Error) => reject(new Error(`${command} failed: ${error.message}`)));
  });
}

async function withRetry<T>(
  operation: () => Promise<T>,
  attempts = 2,
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 750));
    }
  }
  throw lastError;
}

async function mapWithConcurrency<T, R>(
  values: T[],
  concurrency: number,
  mapper: (value: T) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(values.length);
  let nextIndex = 0;
  async function worker(): Promise<void> {
    while (nextIndex < values.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(values[index]);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, values.length) }, () => worker()),
  );
  return results;
}

async function getYouTubeMetadata(url: string): Promise<YouTubeMetadata> {
  const { stdout } = await withRetry(() => runCommand("yt-dlp", [
    "--skip-download",
    "--no-playlist",
    "--no-warnings",
    "--dump-single-json",
    url,
  ]));
  const parsed: unknown = JSON.parse(stdout);
  if (!parsed || typeof parsed !== "object") throw new Error("yt-dlp returned invalid metadata.");
  const metadata = parsed as Record<string, unknown>;
  if (typeof metadata.title !== "string" || typeof metadata.duration !== "number") {
    throw new Error("YouTube metadata did not include a title and duration.");
  }
  return {
    title: metadata.title,
    duration: metadata.duration,
    availability: typeof metadata.availability === "string" ? metadata.availability : undefined,
  };
}

async function getCloudFrontDuration(url: string): Promise<number> {
  const { stdout } = await withRetry(() => runCommand("ffprobe", [
    "-v", "error",
    "-show_entries", "format=duration",
    "-of", "json",
    url,
  ]));
  const parsed: unknown = JSON.parse(stdout);
  if (!parsed || typeof parsed !== "object") throw new Error("FFprobe returned invalid metadata.");
  const format = (parsed as Record<string, unknown>).format;
  const rawDuration = format && typeof format === "object"
    ? (format as Record<string, unknown>).duration
    : undefined;
  const duration = typeof rawDuration === "string" ? Number(rawDuration) : rawDuration;
  if (typeof duration !== "number" || !Number.isFinite(duration)) {
    throw new Error("CloudFront media did not expose a valid duration.");
  }
  return duration;
}

async function auditVideo(
  video: GeneratedVideo,
  durationToleranceSeconds: number,
): Promise<AuditIssue[]> {
  const issues: AuditIssue[] = [];
  const [youtube, cloudFrontDuration] = await Promise.all([
    getYouTubeMetadata(video.media.youtubeUrl).then(
      (value) => ({ value }),
      (error: unknown) => ({ error }),
    ),
    getCloudFrontDuration(video.media.primaryUrl).then(
      (value) => ({ value }),
      (error: unknown) => ({ error }),
    ),
  ]);
  if ("error" in youtube) {
    issues.push({
      resourceType: "video",
      resourceId: video.id,
      type: "youtube-metadata",
      message: youtube.error instanceof Error ? youtube.error.message : String(youtube.error),
      details: { url: video.media.youtubeUrl },
    });
  }
  if ("error" in cloudFrontDuration) {
    issues.push({
      resourceType: "video",
      resourceId: video.id,
      type: "cloudfront-media",
      message: cloudFrontDuration.error instanceof Error
        ? cloudFrontDuration.error.message
        : String(cloudFrontDuration.error),
      details: { url: video.media.primaryUrl },
    });
  }
  if ("value" in youtube && !videoTitlesMatch(video.title.en, youtube.value.title)) {
    issues.push({
      resourceType: "video",
      resourceId: video.id,
      type: "title-mismatch",
      message: "The expected English title does not match the YouTube title.",
      details: {
        expectedTitle: video.title.en,
        youtubeTitle: youtube.value.title,
        youtubeUrl: video.media.youtubeUrl,
      },
    });
  }
  if (
    "value" in youtube &&
    "value" in cloudFrontDuration &&
    !videoDurationsMatch(
      youtube.value.duration,
      cloudFrontDuration.value,
      durationToleranceSeconds,
    )
  ) {
    issues.push({
      resourceType: "video",
      resourceId: video.id,
      type: "duration-mismatch",
      message: "YouTube and CloudFront video durations do not match.",
      details: {
        youtubeSeconds: youtube.value.duration,
        cloudFrontSeconds: cloudFrontDuration.value,
        differenceSeconds: Math.abs(youtube.value.duration - cloudFrontDuration.value),
        toleranceSeconds: durationToleranceSeconds,
        youtubeUrl: video.media.youtubeUrl,
        cloudFrontUrl: video.media.primaryUrl,
      },
    });
  }
  return issues;
}

async function fetchPdf(url: string): Promise<Buffer> {
  return withRetry(async () => {
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(PDF_TIMEOUT_MS),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} while downloading ${url}`);
    const contents = Buffer.from(await response.arrayBuffer());
    if (contents.subarray(0, 5).toString("ascii") !== "%PDF-") {
      throw new Error(`Response is not a PDF: ${url}`);
    }
    return contents;
  });
}

function pdfFingerprint(contents: Buffer): string {
  return createHash("sha256").update(contents).digest("hex");
}

function ppmPixelsMatch(first: Buffer, second: Buffer): boolean {
  function parse(contents: Buffer): { width: number; height: number; pixels: Buffer } {
    const tokens: string[] = [];
    let offset = 0;
    while (tokens.length < 4) {
      while (offset < contents.length && contents[offset] <= 32) offset += 1;
      const start = offset;
      while (offset < contents.length && contents[offset] > 32) offset += 1;
      tokens.push(contents.subarray(start, offset).toString("ascii"));
    }
    while (offset < contents.length && contents[offset] <= 32) offset += 1;
    const width = Number(tokens[1]);
    const height = Number(tokens[2]);
    const maximumValue = Number(tokens[3]);
    if (
      tokens[0] !== "P6" ||
      !Number.isInteger(width) ||
      !Number.isInteger(height) ||
      maximumValue !== 255
    ) {
      throw new Error("pdftoppm produced an unsupported PPM image.");
    }
    return { width, height, pixels: contents.subarray(offset) };
  }

  const firstImage = parse(first);
  const secondImage = parse(second);
  if (
    firstImage.width !== secondImage.width ||
    firstImage.height !== secondImage.height ||
    firstImage.pixels.length !== secondImage.pixels.length
  ) {
    return false;
  }
  if (firstImage.pixels.equals(secondImage.pixels)) return true;

  let changed = 0;
  let largestDelta = 0;
  for (let index = 0; index < firstImage.pixels.length; index += 1) {
    const delta = Math.abs(firstImage.pixels[index] - secondImage.pixels[index]);
    if (delta === 0) continue;
    changed += 1;
    largestDelta = Math.max(largestDelta, delta);
  }
  const changedRatio = changed / firstImage.pixels.length;
  // Google exports can differ by a handful of low-contrast pixels when PDF
  // object streams are regenerated, despite rendering the same visual content.
  return changedRatio <= 0.001 && largestDelta <= 16;
}

async function pdfRendersMatch(googlePdf: Buffer, cloudFrontPdf: Buffer): Promise<boolean> {
  const directory = await mkdtemp(path.join(os.tmpdir(), "resource-pdf-compare-"));
  try {
    const googlePath = path.join(directory, "google.pdf");
    const cloudFrontPath = path.join(directory, "cloudfront.pdf");
    await Promise.all([
      writeFile(googlePath, googlePdf),
      writeFile(cloudFrontPath, cloudFrontPdf),
    ]);
    const googlePrefix = path.join(directory, "google-page");
    const cloudFrontPrefix = path.join(directory, "cloudfront-page");
    await Promise.all([
      runCommand("pdftoppm", ["-r", "72", googlePath, googlePrefix]),
      runCommand("pdftoppm", ["-r", "72", cloudFrontPath, cloudFrontPrefix]),
    ]);
    const entries = await readdir(directory);
    const googlePages = entries.filter((entry) => entry.startsWith("google-page-")).sort();
    const cloudFrontPages = entries
      .filter((entry) => entry.startsWith("cloudfront-page-"))
      .sort();
    if (googlePages.length !== cloudFrontPages.length) return false;
    const comparisons = await Promise.all(
      googlePages.map(async (googlePage, index) => {
        const [googlePageContents, cloudFrontPageContents] = await Promise.all([
          readFile(path.join(directory, googlePage)),
          readFile(path.join(directory, cloudFrontPages[index])),
        ]);
        return ppmPixelsMatch(googlePageContents, cloudFrontPageContents);
      }),
    );
    return comparisons.every(Boolean);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

interface LessonFileAuditTarget {
  lessonId: string;
  language: "en" | "fr";
  file: GeneratedLessonFile;
}

async function auditLessonFile(target: LessonFileAuditTarget): Promise<AuditIssue[]> {
  try {
    const [googlePdf, cloudFrontPdf] = await Promise.all([
      fetchPdf(getExportUrl(target.file.url)),
      fetchPdf(target.file.pdfUrl),
    ]);
    const googleHash = pdfFingerprint(googlePdf);
    const cloudFrontHash = pdfFingerprint(cloudFrontPdf);
    if (googleHash === cloudFrontHash) return [];
    if (await pdfRendersMatch(googlePdf, cloudFrontPdf)) return [];
    return [{
      resourceType: "lesson-plan",
      resourceId: target.lessonId,
      language: target.language,
      fileTitle: target.file.title,
      type: "pdf-mismatch",
      message: "CloudFront PDF does not visually match a fresh Google PDF export.",
      details: {
        googleUrl: target.file.url,
        cloudFrontUrl: target.file.pdfUrl,
        googleBytes: googlePdf.length,
        cloudFrontBytes: cloudFrontPdf.length,
        googleSha256: googleHash,
        cloudFrontSha256: cloudFrontHash,
        renderedContentMatches: false,
      },
    }];
  } catch (error) {
    return [{
      resourceType: "lesson-plan",
      resourceId: target.lessonId,
      language: target.language,
      fileTitle: target.file.title,
      type: "pdf-check-error",
      message: error instanceof Error ? error.message : String(error),
      details: {
        googleUrl: target.file.url,
        cloudFrontUrl: target.file.pdfUrl,
      },
    }];
  }
}

function lessonFiles(lessons: GeneratedLessonPlan[]): LessonFileAuditTarget[] {
  return lessons.flatMap((lesson) =>
    (["en", "fr"] as const).flatMap((language) =>
      lesson.files[language].map((file) => ({ lessonId: lesson.id, language, file })),
    ),
  );
}

async function assertTools(): Promise<void> {
  const checks = await Promise.all([
    runCommand("yt-dlp", ["--version"]).then(() => undefined, (error: unknown) => error),
    runCommand("ffprobe", ["-version"]).then(() => undefined, (error: unknown) => error),
  ]);
  const errors = checks.filter((result): result is unknown => result !== undefined);
  if (errors.length > 0) {
    throw new Error([
      "Resource auditing requires yt-dlp and FFprobe.",
      ...errors.map((error) => `- ${error instanceof Error ? error.message : String(error)}`),
      "On macOS, install the missing tools with: brew install yt-dlp ffmpeg",
    ].join("\n"));
  }
}

async function assertPdfTools(): Promise<void> {
  const result = await runCommand("pdftoppm", ["-v"]).then(
    () => undefined,
    (error: unknown) => error,
  );
  if (result !== undefined) {
    throw new Error([
      "Byte-different PDF checks require pdftoppm to compare rendered pages.",
      result instanceof Error ? result.message : String(result),
      "On macOS, install it with: brew install poppler",
    ].join("\n"));
  }
}

async function main(args: string[]): Promise<void> {
  const options = parseArguments(args);
  if (!options) return;

  const selectedVideos = options.lessonId
    ? []
    : options.videoId
      ? allVideos.filter((video) => video.id === options.videoId)
      : options.lessonsOnly ? [] : allVideos;
  const selectedLessons = options.videoId
    ? []
    : options.lessonId
      ? allLessons.filter((lesson) => lesson.id === options.lessonId)
      : options.videosOnly ? [] : allLessons;
  if (options.videoId && selectedVideos.length === 0) {
    throw new Error(`No video found with ID "${options.videoId}".`);
  }
  if (options.lessonId && selectedLessons.length === 0) {
    throw new Error(`No lesson plan found with ID "${options.lessonId}".`);
  }

  if (selectedVideos.length > 0) await assertTools();
  if (selectedLessons.length > 0) await assertPdfTools();
  const videoResults = await mapWithConcurrency(
    selectedVideos,
    options.concurrency,
    async (video) => ({
      id: video.id,
      issues: await auditVideo(video, options.durationToleranceSeconds),
    }),
  );
  const targets = lessonFiles(selectedLessons);
  const lessonResults = await mapWithConcurrency(
    targets,
    options.concurrency,
    async (target) => ({
      target,
      issues: await auditLessonFile(target),
    }),
  );
  const videoIssues = videoResults.flatMap((result) => result.issues);
  const lessonIssues = lessonResults.flatMap((result) => result.issues);
  const failedVideoIds = new Set(videoIssues.map((issue) => issue.resourceId));
  const failedLessonFiles = new Set(
    lessonIssues.map((issue) => `${issue.resourceId}:${issue.language}:${issue.fileTitle}`),
  );
  const report: AuditReport = {
    generatedAt: new Date().toISOString(),
    durationToleranceSeconds: options.durationToleranceSeconds,
    videos: {
      checked: selectedVideos.length,
      passed: selectedVideos.length - failedVideoIds.size,
      issues: videoIssues,
    },
    lessonPlans: {
      checked: targets.length,
      passed: targets.length - failedLessonFiles.size,
      issues: lessonIssues,
    },
  };

  if (options.outputPath) {
    await mkdir(path.dirname(options.outputPath), { recursive: true });
    await writeFile(options.outputPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  }
  console.log(`Videos: ${report.videos.passed}/${report.videos.checked} passed.`);
  console.log(`Lesson-plan PDFs: ${report.lessonPlans.passed}/${report.lessonPlans.checked} passed.`);
  if (options.outputPath) console.log(`Report: ${options.outputPath}`);
  for (const issue of [...videoIssues, ...lessonIssues]) {
    const location = [
      issue.resourceId,
      issue.language,
      issue.fileTitle,
    ].filter(Boolean).join(" / ");
    console.log(`- ${issue.resourceType}: ${location}: ${issue.type}: ${issue.message}`);
  }
  if (videoIssues.length > 0 || lessonIssues.length > 0) {
    throw new Error(`Audit found ${videoIssues.length + lessonIssues.length} issue(s).`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main(process.argv.slice(2)).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
