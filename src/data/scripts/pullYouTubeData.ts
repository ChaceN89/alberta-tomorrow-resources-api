import { createServer } from "node:http";
import { constants as fsConstants } from "node:fs";
import {
  chmod,
  copyFile,
  open,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { randomBytes } from "node:crypto";
import dotenv from "dotenv";
import { VideoCategory } from "../enums/videoCategoryIds.js";
import { allVideos } from "../videoData.js";
import type { GeneratedVideo } from "../videoTypes.js";

dotenv.config();

const DEFAULT_OUTPUT_DIRECTORY = path.resolve("src/data/youtube-extracted-data");
const CAPTION_LANGUAGES = [
  { fileName: "en.vtt", language: "en", preferredTag: "en-CA" },
  { fileName: "fr.vtt", language: "fr", preferredTag: "fr-CA" },
] as const;
const OUTPUT_FILES = ["video.mp4", "thumbnail.jpg", "en.vtt", "fr.vtt"];

const CATEGORY_FOLDERS: Record<string, string> = {
  [VideoCategory.TUTORIALS.id]: "A-TutorialVideos",
  [VideoCategory.LANDSCAPE.id]: "B-UnderstandingTheLandscape",
  [VideoCategory.ENVIRONMENTAL_INDICATORS.id]: "C-EnvironmentalIndicators",
  [VideoCategory.SOCIO_ECONOMIC_INDICATORS.id]: "D-SocioeconomicIndicators",
  [VideoCategory.INDIGENOUS_INDICATORS.id]: "E-IndigenousIndicators",
  [VideoCategory.BOW_RIVER_360.id]: "F-BowRiverWatershed360",
  [VideoCategory.GLACIER_SERIES.id]: "G-GuardiansOfIce",
  [VideoCategory.STONEY_VOICES.id]: "H-StoneyVideos",
  [VideoCategory.BLACKFOOT_VOICES.id]: "I-BlackfootVideos",
  [VideoCategory.POINTS_OF_INTEREST.id]: "J-PointsOfInterest",
  [VideoCategory.OTHER.id]: "Z-OtherVideos",
};

interface CliOptions {
  videoId: string;
  mp4Path?: string;
  enVttPath?: string;
  frVttPath?: string;
  downloadFromYouTube: boolean;
  outputDirectory: string;
  overwrite: boolean;
}

interface YtDlpSubtitleInfo {
  subtitles?: Record<string, unknown>;
  automatic_captions?: Record<string, unknown>;
}

interface CaptionCandidate {
  languageCode: string;
  source: "manual" | "automatic";
}

interface VideoDetailsResponse {
  items?: Array<{
    snippet?: {
      thumbnails?: Record<string, { url?: string }>;
    };
  }>;
}

interface OAuthTokenResponse {
  access_token?: string;
  refresh_token?: string;
  error?: string;
  error_description?: string;
}

function usage(): string {
  return [
    "Usage:",
    "  npm run pullyoutube -- <video-id> --mp4 <original.mp4> [--en-vtt <en.vtt>] [--fr-vtt <fr.vtt>]",
    "  npm run pullyoutube -- <video-id> --video-source youtube",
    "",
    "Options:",
    "  --video-id <id>          Generated video ID (also accepted as the first argument)",
    "  --mp4 <path>             Copy an original MP4 exported from YouTube Studio",
    "  --en-vtt <path>          Use an English WebVTT exported from YouTube Studio",
    "  --fr-vtt <path>          Use a French WebVTT exported from YouTube Studio",
    "  --video-source youtube   Use yt-dlp when permitted for this video",
    "  --out-dir <path>         Output root (default: src/data/youtube-extracted-data)",
    "  --overwrite              Replace existing export files",
    "  --help                   Show this help",
    "",
    "Set YOUTUBE_OAUTH_CLIENT_ID and YOUTUBE_OAUTH_CLIENT_SECRET for YouTube caption access.",
  ].join("\n");
}

function parseArguments(args: string[]): CliOptions | undefined {
  let videoId: string | undefined;
  let mp4Path: string | undefined;
  let enVttPath: string | undefined;
  let frVttPath: string | undefined;
  let downloadFromYouTube = false;
  let outputDirectory = DEFAULT_OUTPUT_DIRECTORY;
  let overwrite = false;

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === "--help" || argument === "-h") {
      console.log(usage());
      return undefined;
    }

    if (argument === "--overwrite") {
      overwrite = true;
      continue;
    }

    if (argument === "--video-source") {
      const source = args[index + 1];
      if (source !== "youtube") {
        throw new Error('--video-source must be "youtube".');
      }
      downloadFromYouTube = true;
      index += 1;
      continue;
    }

    if (
      argument === "--video-id" ||
      argument === "--mp4" ||
      argument === "--en-vtt" ||
      argument === "--fr-vtt" ||
      argument === "--out-dir"
    ) {
      const value = args[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`${argument} requires a value.`);
      }
      if (argument === "--video-id") videoId = value;
      if (argument === "--mp4") mp4Path = value;
      if (argument === "--en-vtt") enVttPath = value;
      if (argument === "--fr-vtt") frVttPath = value;
      if (argument === "--out-dir") outputDirectory = path.resolve(value);
      index += 1;
      continue;
    }

    if (argument.startsWith("-")) {
      throw new Error(`Unknown option: ${argument}\n\n${usage()}`);
    }
    if (videoId) {
      throw new Error(`Unexpected extra argument: ${argument}`);
    }
    videoId = argument;
  }

  if (!videoId) {
    throw new Error(`A generated video ID is required.\n\n${usage()}`);
  }
  if (mp4Path && downloadFromYouTube) {
    throw new Error("Choose either --mp4 or --video-source youtube, not both.");
  }
  if (!mp4Path && !downloadFromYouTube) {
    throw new Error("Provide --mp4 or explicitly choose --video-source youtube.");
  }

  return {
    videoId,
    mp4Path: mp4Path ? path.resolve(mp4Path) : undefined,
    enVttPath: enVttPath ? path.resolve(enVttPath) : undefined,
    frVttPath: frVttPath ? path.resolve(frVttPath) : undefined,
    downloadFromYouTube,
    outputDirectory,
    overwrite,
  };
}

function getYouTubeVideoId(youtubeUrl: string): string {
  let url: URL;
  try {
    url = new URL(youtubeUrl);
  } catch {
    throw new Error(`The generated record contains an invalid YouTube URL: ${youtubeUrl}`);
  }

  const host = url.hostname.toLowerCase();
  if (!["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"].includes(host)) {
    throw new Error(`Unsupported YouTube URL host: ${url.hostname}`);
  }

  let videoId: string | undefined;
  if (host === "youtu.be") {
    videoId = url.pathname.split("/").filter(Boolean)[0];
  } else if (url.pathname === "/watch") {
    videoId = url.searchParams.get("v") ?? undefined;
  } else {
    const segments = url.pathname.split("/").filter(Boolean);
    if (["shorts", "embed", "live", "v"].includes(segments[0] ?? "")) {
      videoId = segments[1];
    }
  }

  if (!videoId || !/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
    throw new Error(`Could not find a valid YouTube video ID in ${youtubeUrl}`);
  }
  return videoId;
}

function getVideoRecord(videoId: string): GeneratedVideo {
  const video = allVideos.find((record) => record.id === videoId);
  if (!video) {
    throw new Error(
      `No generated video has ID "${videoId}". Run "npm run generate:videos" and check the ID in src/data/generated/videos.json.`,
    );
  }
  return video;
}

function getCategoryFolder(categoryId: string): string {
  const folder = CATEGORY_FOLDERS[categoryId];
  if (!folder) {
    throw new Error(`No YouTube export folder is configured for category "${categoryId}".`);
  }
  return folder;
}

function getOutputDirectory(options: CliOptions, video: GeneratedVideo): string {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(video.id)) {
    throw new Error(`Video ID is not a safe output folder name: "${video.id}".`);
  }
  return path.join(options.outputDirectory, getCategoryFolder(video.categoryId), video.id);
}

async function pathExists(filePath: string): Promise<boolean> {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function assertOutputIsAvailable(
  outputDirectory: string,
  overwrite: boolean,
): Promise<void> {
  if (overwrite) return;
  const existingFiles: string[] = [];
  for (const fileName of OUTPUT_FILES) {
    if (await pathExists(path.join(outputDirectory, fileName))) {
      existingFiles.push(fileName);
    }
  }
  if (existingFiles.length > 0) {
    throw new Error(
      `Export already contains ${existingFiles.join(", ")}. Use --overwrite to replace them.`,
    );
  }
}

function getOAuthConfig(): { clientId: string; clientSecret: string } {
  const clientId = process.env.YOUTUBE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.YOUTUBE_OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error(
      "Set YOUTUBE_OAUTH_CLIENT_ID and YOUTUBE_OAUTH_CLIENT_SECRET from a Google OAuth Desktop app before exporting captions.",
    );
  }
  return { clientId, clientSecret };
}

function getTokenFilePath(): string {
  const configRoot = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config");
  return path.join(configRoot, "alberta-tomorrow-resources-api", "youtube-oauth.json");
}

async function readCachedRefreshToken(): Promise<string | undefined> {
  const tokenPath = getTokenFilePath();
  try {
    const parsed: unknown = JSON.parse(await readFile(tokenPath, "utf8"));
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "refreshToken" in parsed &&
      typeof parsed.refreshToken === "string"
    ) {
      return parsed.refreshToken;
    }
    throw new Error(`Invalid YouTube OAuth token file: ${tokenPath}`);
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return undefined;
    }
    throw error;
  }
}

async function saveRefreshToken(refreshToken: string): Promise<void> {
  const tokenPath = getTokenFilePath();
  const tokenDirectory = path.dirname(tokenPath);
  await mkdir(tokenDirectory, { recursive: true, mode: 0o700 });
  await chmod(tokenDirectory, 0o700);
  await writeFile(tokenPath, JSON.stringify({ refreshToken }, null, 2), {
    mode: 0o600,
  });
  await chmod(tokenPath, 0o600);
}

function openBrowser(url: string): void {
  const command =
    process.platform === "darwin"
      ? "open"
      : process.platform === "win32"
        ? "rundll32.exe"
        : "xdg-open";
  const args =
    process.platform === "win32"
      ? ["url.dll,FileProtocolHandler", url]
      : [url];
  const child = spawn(command, args, { stdio: "ignore", detached: true });
  child.once("error", () => {
    console.warn("Could not open a browser automatically; open the authorization URL above.");
  });
  child.unref();
}

async function authorizeGoogleAccount(
  clientId: string,
  clientSecret: string,
): Promise<string> {
  const state = randomBytes(32).toString("hex");
  const server = createServer();
  let resolveCode: (code: string) => void = () => undefined;
  let rejectCode: (error: Error) => void = () => undefined;
  const authorizationCode = new Promise<string>((resolve, reject) => {
    resolveCode = resolve;
    rejectCode = reject;
  });

  server.on("request", (request, response) => {
    const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1");
    if (requestUrl.pathname !== "/oauth2callback") {
      response.writeHead(404).end("Not found");
      return;
    }
    if (requestUrl.searchParams.get("state") !== state) {
      response.writeHead(400).end("Invalid OAuth state.");
      return;
    }

    const authorizationError = requestUrl.searchParams.get("error");
    if (authorizationError) {
      response.writeHead(400).end("YouTube authorization was not completed. You can close this tab.");
      rejectCode(new Error(`Google authorization failed: ${authorizationError}`));
      return;
    }

    const code = requestUrl.searchParams.get("code");
    if (!code) {
      response.writeHead(400).end("Google did not return an authorization code.");
      rejectCode(new Error("Google did not return an OAuth authorization code."));
      return;
    }

    response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    response.end("YouTube access granted. You can close this tab and return to the terminal.");
    resolveCode(code);
  });

  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  if (!address || typeof address === "string") {
    server.close();
    throw new Error("Could not start the local OAuth callback server.");
  }

  const redirectUri = `http://127.0.0.1:${address.port}/oauth2callback`;
  const authorizationUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authorizationUrl.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "https://www.googleapis.com/auth/youtube.force-ssl",
    access_type: "offline",
    prompt: "consent",
    state,
  }).toString();

  console.log("Authorize the Google account that can edit this YouTube video.");
  console.log(authorizationUrl.toString());
  openBrowser(authorizationUrl.toString());

  const timeout = setTimeout(() => {
    rejectCode(new Error("Timed out waiting for YouTube authorization."));
  }, 5 * 60 * 1000);

  try {
    const code = await authorizationCode;
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });
    const tokens = (await tokenResponse.json()) as OAuthTokenResponse;
    if (!tokenResponse.ok || !tokens.access_token) {
      throw new Error(
        `Google OAuth token exchange failed (${tokenResponse.status}): ${tokens.error_description ?? tokens.error ?? "no access token returned"}`,
      );
    }
    if (!tokens.refresh_token) {
      throw new Error("Google did not return a refresh token; retry authorization and approve offline access.");
    }
    await saveRefreshToken(tokens.refresh_token);
    return tokens.access_token;
  } finally {
    clearTimeout(timeout);
    server.close();
  }
}

async function getAccessToken(): Promise<string> {
  const { clientId, clientSecret } = getOAuthConfig();
  const refreshToken = await readCachedRefreshToken();
  if (!refreshToken) {
    return authorizeGoogleAccount(clientId, clientSecret);
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });
  const tokens = (await response.json()) as OAuthTokenResponse;
  if (!response.ok || !tokens.access_token) {
    throw new Error(
      `Google OAuth token refresh failed (${response.status}): ${tokens.error_description ?? tokens.error ?? "no access token returned"}. Reauthorize by removing ${getTokenFilePath()} and running the command again.`,
    );
  }
  return tokens.access_token;
}

async function youtubeApiJson<T>(endpoint: string, token: string): Promise<T> {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/${endpoint}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  const responseText = await response.text();
  if (!response.ok) {
    throw new Error(`YouTube API request failed (${response.status}): ${responseText}`);
  }
  return JSON.parse(responseText) as T;
}

async function downloadYouTubeThumbnail(
  youtubeVideoId: string,
  token: string,
  destination: string,
): Promise<void> {
  const details = await youtubeApiJson<VideoDetailsResponse>(
    `videos?part=snippet&id=${encodeURIComponent(youtubeVideoId)}`,
    token,
  );
  const thumbnails = details.items?.[0]?.snippet?.thumbnails;
  if (!thumbnails) {
    throw new Error(`YouTube returned no thumbnail details for video ${youtubeVideoId}.`);
  }

  const candidates = ["maxres", "standard", "high", "medium", "default"]
    .map((name) => thumbnails[name]?.url)
    .filter((url): url is string => Boolean(url));
  if (candidates.length === 0) {
    throw new Error(`YouTube returned no thumbnail URL for video ${youtubeVideoId}.`);
  }

  const failures: string[] = [];
  for (const thumbnailUrl of candidates) {
    const url = new URL(thumbnailUrl);
    if (
      url.protocol !== "https:" ||
      (url.hostname !== "ytimg.com" && !url.hostname.endsWith(".ytimg.com"))
    ) {
      throw new Error(`YouTube returned an unexpected thumbnail URL: ${thumbnailUrl}`);
    }
    const response = await fetch(url);
    if (!response.ok) {
      failures.push(`${url.pathname} (${response.status})`);
      continue;
    }
    const image = Buffer.from(await response.arrayBuffer());
    if (image.length < 4 || image[0] !== 0xff || image[1] !== 0xd8) {
      failures.push(`${url.pathname} (not a JPEG image)`);
      continue;
    }
    await writeFile(destination, image);
    return;
  }

  throw new Error(`Could not download a JPEG thumbnail: ${failures.join(", ")}.`);
}

function isLanguageMatch(languageCode: string, language: string): boolean {
  const code = languageCode.toLowerCase();
  if (language === "en" && code === "en-orig") return true;
  return code === language || new RegExp(`^${language}-[a-z]{2}$`).test(code);
}

function getCaptionCandidates(
  subtitleInfo: YtDlpSubtitleInfo,
  caption: (typeof CAPTION_LANGUAGES)[number],
): CaptionCandidate[] {
  const candidates: CaptionCandidate[] = [];
  for (const [source, tracks] of [
    ["manual", subtitleInfo.subtitles ?? {}],
    ["automatic", subtitleInfo.automatic_captions ?? {}],
  ] as const) {
    for (const languageCode of Object.keys(tracks)) {
      if (isLanguageMatch(languageCode, caption.language)) {
        candidates.push({ languageCode, source });
      }
    }
  }

  const localeScore = (languageCode: string): number => {
    const code = languageCode.toLowerCase();
    const preferred = caption.preferredTag.toLowerCase();
    if (code === preferred) return 0;
    if (code === caption.language) return 1;
    if (code === "en-orig") return 2;
    return 3;
  };
  const score = (candidate: CaptionCandidate): number => {
    const locale = localeScore(candidate.languageCode);
    const source = candidate.source === "manual" ? 0 : 1;
    return caption.language === "en" ? source * 10 + locale : locale * 2 + source;
  };
  return candidates.sort((left, right) => score(left) - score(right));
}

function getYtDlpSubtitleInfo(youtubeUrl: string): YtDlpSubtitleInfo {
  const result = spawnSync(
    "yt-dlp",
    ["--dump-single-json", "--skip-download", "--no-warnings", youtubeUrl],
    { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
  );
  if (result.error) {
    throw new Error(`Could not inspect YouTube subtitles with yt-dlp: ${result.error.message}`);
  }
  if (result.status !== 0 || !result.stdout) {
    throw new Error(
      `Could not inspect YouTube subtitles with yt-dlp (exit code ${result.status ?? "unknown"}): ${result.stderr}`,
    );
  }

  const parsed: unknown = JSON.parse(result.stdout);
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new TypeError("yt-dlp returned invalid video metadata while inspecting subtitles.");
  }
  const metadata = parsed as Record<string, unknown>;
  const subtitles = metadata.subtitles;
  const automaticCaptions = metadata.automatic_captions;
  return {
    subtitles:
      typeof subtitles === "object" && subtitles !== null && !Array.isArray(subtitles)
        ? (subtitles as Record<string, unknown>)
        : {},
    automatic_captions:
      typeof automaticCaptions === "object" &&
      automaticCaptions !== null &&
      !Array.isArray(automaticCaptions)
        ? (automaticCaptions as Record<string, unknown>)
        : {},
  };
}

async function fetchYtDlpCaption(
  candidate: CaptionCandidate,
  videoId: string,
  youtubeUrl: string,
  stagingDirectory: string,
): Promise<string> {
  const outputTemplate = path.join(
    stagingDirectory,
    `${candidate.source}-${candidate.languageCode}-%(id)s.%(ext)s`,
  );
  const result = spawnSync(
    "yt-dlp",
    [
      "--no-playlist",
      "--skip-download",
      candidate.source === "manual" ? "--write-subs" : "--write-auto-subs",
      "--sub-langs",
      candidate.languageCode,
      "--sub-format",
      "vtt/best",
      "--output",
      outputTemplate,
      youtubeUrl,
    ],
    { stdio: "inherit" },
  );
  if (result.error) {
    throw new Error(`Could not run yt-dlp for ${candidate.languageCode}: ${result.error.message}`);
  }
  if (result.status !== 0) {
    throw new Error(
      `yt-dlp could not download ${candidate.languageCode} captions (exit code ${result.status ?? "unknown"}).`,
    );
  }

  const candidatePrefix = `${candidate.source}-${candidate.languageCode}-${videoId}.`;
  const fileName = (await readdir(stagingDirectory)).find(
    (name) => name.startsWith(candidatePrefix) && name.endsWith(".vtt"),
  );
  if (!fileName) {
    throw new Error(`yt-dlp did not produce a VTT file for ${candidate.languageCode}.`);
  }
  const contents = await readFile(path.join(stagingDirectory, fileName), "utf8");
  if (!contents.trim() || !contents.trimStart().startsWith("WEBVTT")) {
    throw new Error(`The downloaded ${candidate.languageCode} captions are not valid WebVTT.`);
  }
  return contents;
}

async function downloadYtDlpCaptionWithFallback(
  subtitleInfo: YtDlpSubtitleInfo,
  caption: (typeof CAPTION_LANGUAGES)[number],
  outputPath: string,
  videoId: string,
  youtubeUrl: string,
  stagingDirectory: string,
): Promise<void> {
  const candidates = getCaptionCandidates(subtitleInfo, caption);
  if (candidates.length === 0) {
    throw new Error(
      `No ${caption.language === "en" ? "English" : "French"} manual or automatic subtitle tracks were found for YouTube video ${videoId}.`,
    );
  }

  const failures: string[] = [];
  let selectedCandidate: CaptionCandidate | undefined;
  let selectedContents: string | undefined;
  for (const candidate of candidates) {
    try {
      selectedContents = await fetchYtDlpCaption(
        candidate,
        videoId,
        youtubeUrl,
        stagingDirectory,
      );
      selectedCandidate = candidate;
      break;
    } catch (error) {
      const description = `${candidate.languageCode} (${candidate.source})`;
      const reason = error instanceof Error ? error.message : String(error);
      failures.push(`${description}: ${reason}`);
      console.warn(`Could not download ${description}; trying the next matching subtitle track.`);
    }
  }

  if (!selectedCandidate || selectedContents === undefined) {
    throw new Error(
      `Could not download any ${caption.language === "en" ? "English" : "French"} subtitle track for ${videoId}:\n${failures.map((failure) => `- ${failure}`).join("\n")}`,
    );
  }

  await writeFile(outputPath, selectedContents, "utf8");
  console.log(
    `Using ${selectedCandidate.languageCode} ${selectedCandidate.source} subtitles.`,
  );
}

async function copyCaptionOverride(
  sourcePath: string,
  outputPath: string,
  language: string,
): Promise<void> {
  const caption = await readFile(sourcePath, "utf8");
  if (!caption.trim() || !caption.trimStart().startsWith("WEBVTT")) {
    throw new Error(`${language} subtitle file is not a valid, non-empty WebVTT file: ${sourcePath}`);
  }
  await writeFile(outputPath, caption, "utf8");
  console.log(`Using ${language} captions from ${sourcePath}.`);
}

async function downloadCaptions(
  youtubeUrl: string,
  stagingDirectory: string,
  options: CliOptions,
): Promise<void> {
  const captionOverrides = CAPTION_LANGUAGES.flatMap((caption) => {
    const sourcePath = caption.language === "en" ? options.enVttPath : options.frVttPath;
    return sourcePath ? [{ caption, sourcePath }] : [];
  });
  for (const { caption, sourcePath } of captionOverrides) {
    await copyCaptionOverride(
      sourcePath,
      path.join(stagingDirectory, caption.fileName),
      caption.preferredTag,
    );
  }
  const overrideLanguages = new Set(captionOverrides.map(({ caption }) => caption.language));
  const captionsToDownload = CAPTION_LANGUAGES.filter(
    (caption) => !overrideLanguages.has(caption.language),
  );
  if (captionsToDownload.length === 0) return;

  const subtitleInfo = getYtDlpSubtitleInfo(youtubeUrl);
  const youtubeVideoId = getYouTubeVideoId(youtubeUrl);

  const failures: string[] = [];
  for (const caption of captionsToDownload) {
    try {
      await downloadYtDlpCaptionWithFallback(
        subtitleInfo,
        caption,
        path.join(stagingDirectory, caption.fileName),
        youtubeVideoId,
        youtubeUrl,
        stagingDirectory,
      );
    } catch (error) {
      failures.push(error instanceof Error ? error.message : String(error));
    }
  }
  if (failures.length > 0) {
    throw new Error(
      `Caption export was incomplete:\n${failures.map((failure) => `- ${failure}`).join("\n")}`,
    );
  }
}

async function preservePartialAssets(
  stagingDirectory: string,
  outputDirectory: string,
  overwrite: boolean,
): Promise<string[]> {
  await mkdir(outputDirectory, { recursive: true });
  const savedFiles: string[] = [];
  const failures: string[] = [];
  for (const fileName of OUTPUT_FILES) {
    const stagedPath = path.join(stagingDirectory, fileName);
    if (!(await pathExists(stagedPath))) continue;
    try {
      await copyFile(
        stagedPath,
        path.join(outputDirectory, fileName),
        overwrite ? 0 : fsConstants.COPYFILE_EXCL,
      );
      savedFiles.push(path.join(outputDirectory, fileName));
    } catch (error) {
      failures.push(
        `${path.join(outputDirectory, fileName)}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
  if (failures.length > 0) {
    throw new Error(`Could not preserve all partial assets:\n${failures.join("\n")}`);
  }
  return savedFiles;
}

async function assertMp4(filePath: string): Promise<void> {
  if (path.extname(filePath).toLowerCase() !== ".mp4") {
    throw new Error(`MP4 source must be a non-empty .mp4 file: ${filePath}`);
  }
  const file = await open(filePath, "r");
  try {
    const header = Buffer.alloc(12);
    const { bytesRead } = await file.read(header, 0, header.length, 0);
    if (bytesRead < header.length || header.toString("ascii", 4, 8) !== "ftyp") {
      throw new Error(`File does not have a valid MP4 container signature: ${filePath}`);
    }
  } finally {
    await file.close();
  }
}

function assertYouTubeDownloadToolsAvailable(downloadMp4: boolean): void {
  const requiredTools = [
    { command: "yt-dlp", versionArgument: "--version" },
    ...(downloadMp4 ? [{ command: "ffmpeg", versionArgument: "-version" }] : []),
  ];
  const unavailable = requiredTools
    .filter(({ command, versionArgument }) => {
      const result = spawnSync(command, [versionArgument], { stdio: "ignore" });
      return result.error !== undefined || result.status !== 0;
    })
    .map(({ command }) => command);
  if (unavailable.length > 0) {
    throw new Error(
      `YouTube subtitle extraction requires yt-dlp${downloadMp4 ? " and MP4 downloads also require FFmpeg" : ""}. Missing or unavailable: ${unavailable.join(", ")}. On macOS, install them with: brew install yt-dlp ffmpeg`,
    );
  }
}

async function prepareMp4(
  options: CliOptions,
  youtubeUrl: string,
  stagingDirectory: string,
): Promise<void> {
  const destination = path.join(stagingDirectory, "video.mp4");
  if (options.mp4Path) {
    await assertMp4(options.mp4Path);
    await copyFile(options.mp4Path, destination);
    return;
  }

  const downloadDirectory = await mkdtemp(path.join(os.tmpdir(), "youtube-video-"));
  try {
    const outputTemplate = path.join(downloadDirectory, "video.%(ext)s");
    const result = spawnSync(
      "yt-dlp",
      [
        "--no-playlist",
        "--format",
        "bv[ext=mp4]+ba[ext=m4a]/b[ext=mp4]",
        "--merge-output-format",
        "mp4",
        "--output",
        outputTemplate,
        youtubeUrl,
      ],
      { stdio: "inherit" },
    );
    if (result.error) {
      throw new Error(`Could not run yt-dlp: ${result.error.message}`);
    }
    if (result.status !== 0) {
      throw new Error(`yt-dlp failed with exit code ${result.status ?? "unknown"}.`);
    }

    const downloadedFiles = await readdir(downloadDirectory);
    const mp4Name = downloadedFiles.find((fileName) => fileName.toLowerCase().endsWith(".mp4"));
    if (!mp4Name) {
      throw new Error("yt-dlp completed but did not produce an MP4 file.");
    }
    const sourcePath = path.join(downloadDirectory, mp4Name);
    await assertMp4(sourcePath);
    await copyFile(sourcePath, destination);
  } finally {
    await rm(downloadDirectory, { recursive: true, force: true });
  }
}

async function exportVideo(options: CliOptions): Promise<void> {
  const video = getVideoRecord(options.videoId);
  const youtubeVideoId = getYouTubeVideoId(video.media.youtubeUrl);
  const outputDirectory = getOutputDirectory(options, video);
  await assertOutputIsAvailable(outputDirectory, options.overwrite);
  if (options.downloadFromYouTube || !options.enVttPath || !options.frVttPath) {
    assertYouTubeDownloadToolsAvailable(options.downloadFromYouTube);
  }
  if (options.mp4Path) {
    await assertMp4(options.mp4Path);
  }

  const token = await getAccessToken();
  console.log("YouTube API access is ready; retrieving the thumbnail.");
  const stagingDirectory = await mkdtemp(path.join(os.tmpdir(), "youtube-data-pull-"));
  try {
    await prepareMp4(options, video.media.youtubeUrl, stagingDirectory);
    await downloadYouTubeThumbnail(youtubeVideoId, token, path.join(stagingDirectory, "thumbnail.jpg"));
    await downloadCaptions(video.media.youtubeUrl, stagingDirectory, options);

    await mkdir(outputDirectory, { recursive: true });
    for (const fileName of OUTPUT_FILES) {
      await copyFile(
        path.join(stagingDirectory, fileName),
        path.join(outputDirectory, fileName),
        options.overwrite ? 0 : fsConstants.COPYFILE_EXCL,
      );
    }

    console.log(`YouTube assets saved to ${outputDirectory}`);
    for (const fileName of OUTPUT_FILES) {
      console.log(`  ${path.join(outputDirectory, fileName)}`);
    }
  } catch (error) {
    const savedFiles = await preservePartialAssets(
      stagingDirectory,
      outputDirectory,
      options.overwrite,
    );
    if (savedFiles.length > 0) {
      console.error(`Partial assets were kept in ${outputDirectory}:`);
      for (const fileName of savedFiles) console.error(`  ${fileName}`);
    }
    throw error;
  } finally {
    await rm(stagingDirectory, { recursive: true, force: true });
  }
}

async function main(): Promise<void> {
  const options = parseArguments(process.argv.slice(2));
  if (!options) return;
  await exportVideo(options);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
