import { constants as fsConstants } from "node:fs";
import { copyFile, mkdir, rename, stat, unlink, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { getLessonPlanPdfFileNames, GOOGLE_DOCS_BASE_URL } from "../core/assetUrls.js";
import { findTypeScriptFiles } from "./utils.js";
import type { LessonPlanSource } from "../core/lessonPlanTypes.js";

const DEFAULT_OUTPUT_DIRECTORY = path.resolve("src/data/extracted-data/lesson-plan-extracted-data");
const SECTION = "A_ClimateChangeLessons";
const SECTION_DIRECTORY = path.resolve("src/data/resource-metadata/lesson-plans", SECTION);
const LANGUAGES = ["en", "fr"] as const;

interface PdfFile {
  fileName: string;
  url: string;
}

export function getPdfFiles(lesson: LessonPlanSource): PdfFile[] {
  return LANGUAGES.flatMap((language) => {
    const names = getLessonPlanPdfFileNames(language, lesson.files[language]);
    return lesson.files[language].map((file, index) => ({ fileName: names[index], url: file.url }));
  });
}

export async function loadSectionLessons(directory = SECTION_DIRECTORY): Promise<LessonPlanSource[]> {
  const filePaths = await findTypeScriptFiles(directory);
  if (filePaths.length === 0) throw new Error(`No lesson source files found in ${directory}.`);
  const lessons: LessonPlanSource[] = [];
  const ids = new Set<string>();
  for (const filePath of filePaths) {
    const importedModule: Record<string, unknown> = await import(pathToFileURL(filePath).href);
    const values = Object.values(importedModule);
    const value = values[0];
    if (values.length !== 1 || !isLessonPlan(value)) {
      throw new Error(`Expected exactly one valid lesson plan export in ${filePath}.`);
    }
    if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(value.id)) {
      throw new Error(`Invalid lesson ID "${value.id}" in ${filePath}.`);
    }
    if (ids.has(value.id)) throw new Error(`Duplicate lesson ID "${value.id}" in ${filePath}.`);
    ids.add(value.id);
    lessons.push(value);
  }
  return lessons;
}

function isLessonPlan(value: unknown): value is LessonPlanSource {
  if (!value || typeof value !== "object" || !("id" in value) || typeof value.id !== "string" ||
      !("files" in value) || !value.files || typeof value.files !== "object") return false;
  const localizedFiles = value.files;
  for (const language of LANGUAGES) {
    if (!(language in localizedFiles)) return false;
    const files: unknown = Reflect.get(localizedFiles, language);
    if (!Array.isArray(files) || !files.every((file: unknown) =>
      file !== null && typeof file === "object" && "fileType" in file &&
      typeof file.fileType === "string" &&
      "url" in file && typeof file.url === "string"
    )) return false;
  }
  return true;
}

export function getExportUrl(source: string): string {
  let url: URL;
  try {
    url = new URL(source);
  } catch {
    throw new Error(`Invalid Google Docs or Slides URL: ${source}`);
  }
  const match = /^\/(document|presentation)\/d\/([A-Za-z0-9_-]+)(?:\/|$)/.exec(url.pathname);
  if (url.protocol !== "https:" || url.hostname !== "docs.google.com" || !match) {
    throw new Error(`Unsupported Google Docs or Slides URL: ${source}`);
  }
  return `${GOOGLE_DOCS_BASE_URL}/${match[1]}/d/${match[2]}/export?format=pdf`;
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return false;
    throw error;
  }
}

export async function downloadPdf(
  file: PdfFile,
  outputDirectory: string,
  override: boolean,
  fetchPdf: typeof fetch = fetch,
): Promise<"saved" | "skipped"> {
  const outputPath = path.join(outputDirectory, file.fileName);
  if (!override && await exists(outputPath)) return "skipped";

  const response = await fetchPdf(getExportUrl(file.url), {
    signal: AbortSignal.timeout(90_000),
  });
  if (!response.ok) throw new Error(`PDF export failed with HTTP ${response.status}.`);
  const contentType = response.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/pdf") {
    throw new Error(`Expected a PDF response, received ${contentType ?? "no content type"}; check the document's sharing settings.`);
  }
  const contents = Buffer.from(await response.arrayBuffer());
  if (contents.subarray(0, 5).toString("ascii") !== "%PDF-") {
    throw new Error("The export response is not a valid PDF.");
  }

  await mkdir(outputDirectory, { recursive: true });
  const temporaryPath = path.join(outputDirectory, `.${file.fileName}.${randomUUID()}.tmp`);
  await writeFile(temporaryPath, contents, { flag: "wx" });
  try {
    if (override) {
      await rename(temporaryPath, outputPath);
    } else {
      try {
        await copyFile(temporaryPath, outputPath, fsConstants.COPYFILE_EXCL);
      } catch (error) {
        if (error instanceof Error && "code" in error && error.code === "EEXIST") return "skipped";
        throw error;
      }
    }
    return "saved";
  } finally {
    if (await exists(temporaryPath)) await unlink(temporaryPath);
  }
}

function usage(): string {
  return [
    "Usage:",
    "  npm run pulllessonpdfs -- <lesson-id> [--out-dir <path>] [--override]",
    `  npm run pulllessonpdfs -- --section ${SECTION} [--out-dir <path>] [--override]`,
    `  npm run pulllessonpdfs -- --section ${SECTION} --list [--out-dir <path>]`,
    "",
    `Exports Google Docs/Slides PDFs from ${SECTION}.`,
    "Existing files are preserved unless --override (or --overwrite) is specified.",
    `Default output root: ${DEFAULT_OUTPUT_DIRECTORY}`,
  ].join("\n");
}

async function main(args: string[]): Promise<void> {
  if (args.length === 1 && args[0] === "--help") {
    console.log(usage());
    return;
  }
  let lessonId: string | undefined;
  let outputRoot = DEFAULT_OUTPUT_DIRECTORY;
  let override = false;
  let list = false;
  let section: string | undefined;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--out-dir" || arg === "--section") {
      const value = args[++i];
      if (!value || value.startsWith("--")) throw new Error(`${arg} requires a value.`);
      if (arg === "--out-dir") outputRoot = path.resolve(value);
      else section = value;
    } else if (arg === "--override" || arg === "--overwrite") {
      override = true;
    } else if (arg === "--list") {
      list = true;
    } else if (!arg.startsWith("-") && !lessonId) {
      lessonId = arg;
    } else {
      throw new Error(`Unknown or unexpected argument: ${arg}\n\n${usage()}`);
    }
  }
  if (list && override) throw new Error("--list cannot be combined with --override.");
  if (!!lessonId === !!section) throw new Error(`Choose a lesson ID or --section ${SECTION}.\n\n${usage()}`);
  if (section && section !== SECTION) throw new Error(`Unsupported section "${section}". Supported section: ${SECTION}.`);

  const allLessons = await loadSectionLessons();
  const lessons = section ? allLessons : allLessons.filter((lesson) => lesson.id === lessonId);
  if (lessons.length === 0) {
    throw new Error(`No lesson with ID "${lessonId}" found in ${SECTION}.`);
  }
  const failures: string[] = [];
  for (const lesson of lessons) {
    try {
      const outputDirectory = path.join(outputRoot, SECTION, lesson.id);
      const files = getPdfFiles(lesson);
      console.log(`\nLesson: ${lesson.id}\nOutput: ${outputDirectory}`);
      for (const file of files) {
        try {
          if (list) {
            console.log(`  ${file.fileName}: ${await exists(path.join(outputDirectory, file.fileName)) ? "present" : "missing"}`);
          } else {
            const result = await downloadPdf(file, outputDirectory, override);
            console.log(`  ${file.fileName}: ${result}`);
          }
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          console.error(`  ${file.fileName}: failed: ${message}`);
          failures.push(`${lesson.id}/${file.fileName}`);
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`${lesson.id}: failed: ${message}`);
      failures.push(lesson.id);
    }
  }
  if (failures.length) throw new Error(`${failures.length} lesson or PDF operation(s) failed: ${failures.join(", ")}.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main(process.argv.slice(2)).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
