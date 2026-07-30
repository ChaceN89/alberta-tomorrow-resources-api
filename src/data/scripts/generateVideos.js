/**
 * @file generateVideos.js
 * @module Scripts
 * @desc Loads all video source files, normalises them against the canonical
 *       schema (filling missing fields with "N/A" / []), builds reverse
 *       lesson-plan relationships, validates unique IDs, and writes videos.json.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @notes
 * - Files whose exported object has no `id` are skipped with a warning.
 * - Duplicate IDs cause generation to fail.
 * - Missing localised strings are filled with "N/A".
 * - Pass a lessonPlans array to addLessonPlanIds() to backfill lessonPlanIds.
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
  normalizeBoolean,
  logVerboseWarning,
  GenerationOptions,
  shortPath,
  C,
} from "./utils.js";

// ─── Schema ───────────────────────────────────────────────────────────────────

/**
 * Normalises a raw video object against the canonical schema.
 *
 * Expected source shape:
 * {
 *   id:          string
 *   categoryId:  string
 *   title:       { en, fr }
 *   description: { en, fr }
 *   media: {
 *     type:         string   ("youtube" | "cloudfront" | …)
 *     url:          string
 *     thumbnailUrl: string
 *     is360:        boolean
 *   }
 *   searchTerms: { en: string[], fr: string[] }
 *   lessonPlanIds: string[]   (populated by the generator — not needed in source)
 * }
 */
function normalizeVideo(raw) {
  return {
    id: raw.id,

    categoryId: normalizeString(raw.categoryId),

    title: normalizeLocalizedString(raw.title),

    description: normalizeLocalizedString(raw.description),

    media: {
      type: normalizeString(raw.media?.type),
      url: normalizeString(raw.media?.url),
      cloudFrontUrl: normalizeString(raw.media?.cloudFrontUrl),
      thumbnailUrl: normalizeString(raw.media?.thumbnailUrl),
      is360: normalizeBoolean(raw.media?.is360),
    },

    searchTerms: normalizeLocalizedArray(raw.searchTerms),

    // lessonPlanIds is injected later by addLessonPlanIds()
    lessonPlanIds: normalizeArray(raw.lessonPlanIds),
  };
}

// ─── Reverse-relationship builder ────────────────────────────────────────────

/**
 * Adds `lessonPlanIds` to each video based on which lesson plans reference it.
 * Also validates that every video ID referenced by a lesson plan actually exists.
 *
 * @param {object[]} lessonPlans
 * @param {object[]} videos
 * @returns {object[]} Videos with populated lessonPlanIds.
 */
export function addLessonPlanIds(lessonPlans, videos) {
  const videoIds = new Set(videos.map((v) => v.id));
  const lessonPlanIdsByVideoId = new Map();
  const missingByLessonPlan = new Map();

  for (const lessonPlan of lessonPlans) {
    for (const videoId of lessonPlan.videoIds ?? []) {
      if (!videoIds.has(videoId)) {
        const missing = missingByLessonPlan.get(lessonPlan.id) ?? [];
        missing.push(videoId);
        missingByLessonPlan.set(lessonPlan.id, missing);
        continue;
      }
      const ids = lessonPlanIdsByVideoId.get(videoId) ?? [];
      ids.push(lessonPlan.id);
      lessonPlanIdsByVideoId.set(videoId, ids);
    }
  }

  const result = videos.map((video) => ({
    ...video,
    lessonPlanIds: lessonPlanIdsByVideoId.get(video.id) ?? [],
  }));

  return { result, missingByLessonPlan };
}

// ─── Loader ───────────────────────────────────────────────────────────────────

export async function loadVideos(directory) {
  const filePaths = await findJavaScriptFiles(directory);
  const videos = [];
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
      throw new Error(`Duplicate video ID found: "${raw.id}" in ${filePath}`);
    }

    usedIds.add(raw.id);
    filePathMap.set(raw.id, shortPath(filePath));
    const normalized = normalizeVideo(raw);
    videos.push(normalized);

    if (GenerationOptions.verbose) {
      console.log(`  ${C.green}\u2713${C.reset} ${C.green}${C.bold}${raw.id}${C.reset} ${C.gray}\u2014 ${shortPath(filePath)}${C.reset}`);
      if (normalized.title.fr === "N/A") console.log(`    ${C.yellow}- missing French${C.reset}`);
    }
  }

  if (skipped > 0) {
    if (GenerationOptions.strict) {
      throw new Error(
        `${skipped} incomplete video file(s) found. Run without --strict to skip them.`
      );
    }
    const hint = !GenerationOptions.verbose ? ` Run with ${C.bold}--verbose${C.reset} for details.` : "";
    console.log(`  ${C.cyan}Loaded ${videos.length}, skipped ${skipped}.${C.reset}${hint}`);
  }

  return { videos, filePathMap };
}

// ─── Entry point ─────────────────────────────────────────────────────────────

const ROOT_DIRECTORY = process.cwd();

const VIDEO_DIRECTORY = path.join(ROOT_DIRECTORY, "src", "data", "videos");
const OUTPUT_PATH = path.join(ROOT_DIRECTORY, "src", "data", "generated", "videos.json");

export async function generateVideos(lessonPlans = [], lpFileMap = new Map()) {
  console.log("\nLoading videos...");
  const { videos, filePathMap } = await loadVideos(VIDEO_DIRECTORY);
  const { result: videosWithRelationships, missingByLessonPlan } = addLessonPlanIds(lessonPlans, videos);

  // Verbose: show lesson plans that have missing video references (cross-reference check)
  if (GenerationOptions.verbose && missingByLessonPlan.size > 0) {
    console.log(`\n  ${C.bold}${C.yellow}Lesson plan video cross-references:${C.reset}`);
    for (const [lpId, missingIds] of missingByLessonPlan) {
      const lp = lessonPlans.find((l) => l.id === lpId);
      const totalRefs = lp?.videoIds?.length ?? missingIds.length;
      const lpFile = lpFileMap.get(lpId);
      const pathStr = lpFile ? ` ${C.gray}\u2014 ${lpFile}${C.reset}` : "";
      const refsStr = `${C.cyan}${totalRefs} video ref(s)${C.reset}`;
      const fileCount = lp?.files?.en?.length ?? 0;
      const filesStr = `${C.green}${fileCount} file(s)${C.reset}`;
      const notFoundStr = `${C.red}${C.bold}(${missingIds.length} not found)${C.reset}`;
      console.log(`  ${C.green}\u2713${C.reset} ${C.green}${C.bold}${lpId}${C.reset}${pathStr} | ${refsStr} | ${filesStr} ${notFoundStr}`);
      for (const id of missingIds) {
        console.log(`      ${C.gray}- ${id}${C.reset}`);
      }
    }
  } else if (!GenerationOptions.verbose && missingByLessonPlan.size > 0) {
    console.log(
      `  ${C.yellow}${missingByLessonPlan.size} lesson plan(s) reference unloaded videos.${C.reset} Run with ${C.bold}--verbose${C.reset} to see details.`
    );
  }

  await writeJsonFile(OUTPUT_PATH, videosWithRelationships);
  console.log(`  ${videosWithRelationships.length} video(s) written.`);
  return videosWithRelationships;
}

// Allow running standalone: node src/data/scripts/generateVideos.js
if (process.argv[1] === new URL(import.meta.url).pathname) {
  generateVideos().catch((error) => {
    console.error("Video generation failed.");
    console.error(error);
    process.exitCode = 1;
  });
}
