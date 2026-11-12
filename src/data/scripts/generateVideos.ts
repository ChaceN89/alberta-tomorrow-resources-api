/**
 * @file generateVideos.ts
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
  findTypeScriptFiles,
  writeJsonFile,
  normalizeLocalizedString,
  normalizeLocalizedNullableString,
  normalizeLocalizedArray,
  normalizeString,
  normalizeArray,
  normalizeBoolean,
  logVerboseWarning,
  GenerationOptions,
  shortPath,
  C,
} from "./utils.js";
import type { GeneratedLessonPlan } from "../core/lessonPlanTypes.js";
import type { GeneratedVideo, VideoSource } from "../core/videoTypes.js";

// ─── Schema ───────────────────────────────────────────────────────────────────

/**
 * Normalises a raw video object against the canonical schema.
 *
 * Expected source shape:
 * {
 *   id:                  string
 *   supportedLanguages:  string[]
 *   categoryId:          string
 *   title:               { en, fr }
 *   description:         { en, fr }
 *   media: {
 *     primaryUrl:        string   (primary video stream)
 *     youtubeUrl:        string   (fallback)
 *     thumbnailUrl:      string
 *     is360:             boolean  (required)
 *     provider:          string   (required; ALBERTA_TOMORROW_PROVIDER for our own videos)
 *   }
 *   searchTerms:         { en: string[], fr: string[] }
 *   lessonPlanIds:       string[]   (populated by the generator — not needed in source)
 * }
 */
function normalizeVideo(raw: VideoSource): Omit<GeneratedVideo, "lessonPlanIds"> {
  return {
    id: raw.id,

    supportedLanguages: normalizeArray(raw.supportedLanguages),

    categoryId: normalizeString(raw.categoryId),

    title: normalizeLocalizedString(raw.title),

    description: normalizeLocalizedString(raw.description),

    media: {
      primaryUrl: normalizeString(raw.media?.primaryUrl),
      youtubeUrl: normalizeString(raw.media?.youtubeUrl),
      thumbnailUrl: normalizeString(raw.media?.thumbnailUrl),
      is360: normalizeBoolean(raw.media?.is360),
      provider: normalizeString(raw.media?.provider),
    },

    subtitles: normalizeLocalizedNullableString(raw.subtitles),

    searchTerms: normalizeLocalizedArray(raw.searchTerms),

    // lessonPlanIds is injected later by addLessonPlanIds()
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
export function addLessonPlanIds(
  lessonPlans: GeneratedLessonPlan[],
  videos: Omit<GeneratedVideo, "lessonPlanIds">[]
): {
  result: GeneratedVideo[];
  missingByLessonPlan: Map<string, string[]>;
} {
  const videoIds = new Set(videos.map((v) => v.id));
  const lessonPlanIdsByVideoId = new Map<string, string[]>();
  const missingByLessonPlan = new Map<string, string[]>();

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

export async function loadVideos(directory: string): Promise<{
  videos: Omit<GeneratedVideo, "lessonPlanIds">[];
  filePathMap: Map<string, string>;
}> {
  const filePaths = await findTypeScriptFiles(directory);
  const videos: Omit<GeneratedVideo, "lessonPlanIds">[] = [];
  const filePathMap = new Map<string, string>();
  const usedIds = new Set<string>();
  let skipped = 0;

  for (const filePath of filePaths) {
    const moduleUrl = pathToFileURL(filePath).href;
    const importedModule: Record<string, unknown> = await import(moduleUrl);
    const exportedValues = Object.values(importedModule);

    if (exportedValues.length !== 1) {
      logVerboseWarning(`${C.red}${C.bold}Skipping: must export exactly one object${C.reset} ${C.gray}\u2014 ${shortPath(filePath)}${C.reset}`);
      skipped++;
      continue;
    }

    const rawValue = exportedValues[0];

    if (!rawValue || typeof rawValue !== "object" || Array.isArray(rawValue)) {
      logVerboseWarning(`${C.red}${C.bold}Skipping: export is not an object${C.reset} ${C.gray}\u2014 ${shortPath(filePath)}${C.reset}`);
      skipped++;
      continue;
    }

    if (!("id" in rawValue) || typeof rawValue.id !== "string" || !rawValue.id) {
      logVerboseWarning(`${C.red}${C.bold}Skipping: missing id${C.reset} ${C.gray}\u2014 ${shortPath(filePath)}${C.reset}`);
      skipped++;
      continue;
    }

    const raw = rawValue as VideoSource;

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

const VIDEO_DIRECTORY = path.join(ROOT_DIRECTORY, "src", "data", "resource-metadata", "videos");
const OUTPUT_PATH = path.join(ROOT_DIRECTORY, "src", "data", "generated", "videos.json");

export async function generateVideos(
  lessonPlans: GeneratedLessonPlan[] = [],
  lpFileMap: Map<string, string> = new Map()
): Promise<GeneratedVideo[]> {
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

// Allow running standalone: npm run generate:videos
if (process.argv[1] === new URL(import.meta.url).pathname) {
  generateVideos().catch((error) => {
    console.error("Video generation failed.");
    console.error(error);
    process.exitCode = 1;
  });
}
