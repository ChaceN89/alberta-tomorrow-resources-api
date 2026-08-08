/**
 * @file generateLessonPlans.js
 * @module Scripts
 * @desc Loads all lesson-plan source files, normalises them against the
 *       canonical schema (filling missing fields with "N/A" / []), validates
 *       unique IDs, and writes lessonPlans.json.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @notes
 * - Files whose exported object has no `id` are skipped with a warning.
 * - Duplicate IDs cause generation to fail.
 * - Missing localised strings are filled with "N/A".
 */

import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  findJavaScriptFiles,
  writeJsonFile,
  normalizeLocalizedString,
  normalizeLocalizedArray,
  normalizeString,
  normalizeArray,
  logVerboseWarning,
  GenerationOptions,
  shortPath,
  C,
} from "./utils.js";

// ─── Schema ───────────────────────────────────────────────────────────────────

/**
 * Normalises a raw lesson-plan object against the canonical schema.
 *
 * Expected source shape:
 * {
 *   id:              string
 *   themeId:         string
 *   title:           { en, fr }
 *   description:     { en, fr }
 *   approximateTime: { en, fr }
 *   files:           { en: [{ id, title, description, url }], fr: [...] }
 *   gradeIds:        string[]
 *   subjectIds:      string[]
 *   searchTerms:     { en: string[], fr: string[] }
 *   learningOutcomes:{ en: string[], fr: string[] }
 *   videoIds:        string[]
 *   relatedResources:{ en: [{ id, title, url }], fr: [...] }
 * }
 */
function normalizeFiles(value) {
  if (!value || typeof value !== "object") return { en: [], fr: [] };
  const allowedFileTypes = new Set([
    "lesson-plan",
    "answer-key",
    "student-worksheet",
    "presentation-slides",
    "other-file-type",
  ]);
  const mapFile = (f) => {
    const rawFileType = normalizeString(f?.FileType ?? f?.fileType ?? f?.type ?? f?.id);
    const fileType = allowedFileTypes.has(rawFileType) ? rawFileType : "other-file-type";
    return {
      FileType: fileType,
      title: normalizeString(f?.title),
      url: normalizeString(f?.url),
    };
  };
  return {
    en: Array.isArray(value.en) ? value.en.map(mapFile) : [],
    fr: Array.isArray(value.fr) ? value.fr.map(mapFile) : [],
  };
}

function normalizeRelatedResources(value) {
  if (!value) return [];
  if (!Array.isArray(value)) {
    if (typeof value === "object") {
      const entries = Array.isArray(value.en) ? value.en : [];
      return entries.map((r) => ({
        id: normalizeString(r?.id),
        title: normalizeString(r?.title),
        url: normalizeString(r?.url),
      }));
    }
    return [];
  }

  return value.map((r) => ({
    title: normalizeString(r?.title),
    url: normalizeString(r?.url),
  }));
}

function normalizeLessonPlan(raw) {
  return {
    id: raw.id,

    themeId: normalizeString(raw.themeId),

    title: normalizeLocalizedString(raw.title),

    description: normalizeLocalizedString(raw.description),

    approximateTime: normalizeLocalizedString(raw.approximateTime),

    files: normalizeFiles(raw.files),

    gradeIds: normalizeArray(raw.gradeIds),

    subjectIds: normalizeArray(raw.subjectIds),

    searchTerms: normalizeLocalizedArray(raw.searchTerms),

    learningOutcomes: normalizeLocalizedArray(raw.learningOutcomes),

    videoIds: normalizeArray(raw.videoIds),

    relatedResources: normalizeRelatedResources(raw.relatedResources),
  };
}

// ─── Loader ───────────────────────────────────────────────────────────────────

async function loadLessonPlans(directory) {
  const filePaths = await findJavaScriptFiles(directory);
  const lessonPlans = [];
  const filePathMap = new Map(); // id → shortPath
  const usedIds = new Set();
  let skipped = 0;

  for (const filePath of filePaths) {
    const moduleUrl = pathToFileURL(filePath).href;
    const importedModule = await import(moduleUrl);
    const exportedValues = Object.values(importedModule);

    if (exportedValues.length !== 1) {
      logVerboseWarning(`${C.red}${C.bold}Skipping: must export exactly one object${C.reset} ${C.gray}\u2014 ${shortPath(filePath)}${C.reset}`);
      skipped++;
      continue;
    }

    const raw = exportedValues[0];

    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
      logVerboseWarning(`${C.red}${C.bold}Skipping: export is not an object${C.reset} ${C.gray}\u2014 ${shortPath(filePath)}${C.reset}`);
      skipped++;
      continue;
    }

    if (!raw.id || typeof raw.id !== "string") {
      logVerboseWarning(`${C.red}${C.bold}Skipping: missing id${C.reset} ${C.gray}\u2014 ${shortPath(filePath)}${C.reset}`);
      skipped++;
      continue;
    }

    if (usedIds.has(raw.id)) {
      throw new Error(`Duplicate lesson plan ID found: "${raw.id}" in ${filePath}`);
    }

    usedIds.add(raw.id);
    filePathMap.set(raw.id, shortPath(filePath));
    const normalized = normalizeLessonPlan(raw);
    lessonPlans.push(normalized);

    if (GenerationOptions.verbose) {
      const videoCount = normalized.videoIds.length;
      const fileCount = normalized.files.en.length;
      console.log(`  ${C.green}\u2713${C.reset} ${C.green}${C.bold}${raw.id}${C.reset} ${C.gray}\u2014 ${shortPath(filePath)}${C.reset} | ${C.cyan}${videoCount} video ref(s)${C.reset} | ${C.green}${fileCount} file(s)${C.reset}`);
      if (normalized.title.fr === "N/A") console.log(`    ${C.yellow}- missing French${C.reset}`);
    }
  }

  if (skipped > 0) {
    if (GenerationOptions.strict) {
      throw new Error(
        `${skipped} incomplete lesson plan file(s) found. Run without --strict to skip them.`
      );
    }
    const hint = !GenerationOptions.verbose ? ` Run with ${C.bold}--verbose${C.reset} for details.` : "";
    console.log(`  ${C.cyan}Loaded ${lessonPlans.length}, skipped ${skipped}.${C.reset}${hint}`);
  }

  return { lessonPlans, filePathMap };
}

// ─── Entry point ─────────────────────────────────────────────────────────────

const ROOT_DIRECTORY = process.cwd();

const LESSON_PLAN_DIRECTORY = path.join(ROOT_DIRECTORY, "src", "data", "lesson-plans");
const OUTPUT_PATH = path.join(ROOT_DIRECTORY, "src", "data", "generated", "lessonPlans.json");

export async function generateLessonPlans() {
  console.log("\nLoading lesson plans...");
  const { lessonPlans, filePathMap } = await loadLessonPlans(LESSON_PLAN_DIRECTORY);
  await writeJsonFile(OUTPUT_PATH, lessonPlans);
  console.log(`  ${lessonPlans.length} lesson plan(s) written.`);
  return { lessonPlans, filePathMap };
}

// Allow running standalone: node src/data/scripts/generateLessonPlans.js
if (process.argv[1] === new URL(import.meta.url).pathname) {
  generateLessonPlans().catch((error) => {
    console.error("Lesson plan generation failed.");
    console.error(error);
    process.exitCode = 1;
  });
}
