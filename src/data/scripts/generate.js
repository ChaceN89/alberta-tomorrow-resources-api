/**
 * @file generate.js
 * @module Scripts
 * @desc Orchestrates full data generation — runs lesson plans then videos
 *       so that reverse lesson-plan relationships can be injected into videos.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @usage
 *   node src/data/scripts/generate.js
 *   npm run generate
 */

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { generateLessonPlans } from "./generateLessonPlans.js";
import { generateVideos } from "./generateVideos.js";
import { C } from "./utils.js";

const GENERATED_DIRECTORY = path.join(
  process.cwd(),
  "src",
  "data",
  "generated"
);

async function generate() {
  console.log(`${C.bold}${C.cyan}=== Alberta Tomorrow \u2014 Data Generation ===${C.reset}`);

  await mkdir(GENERATED_DIRECTORY, { recursive: true });

  // Lesson plans must run first so their IDs can be injected into videos
  const { lessonPlans, filePathMap: lpFiles } = await generateLessonPlans();
  await generateVideos(lessonPlans, lpFiles);

  console.log(`\n${C.bold}${C.green}=== Done ===${C.reset}`);
}

generate().catch((error) => {
  console.error("\nData generation failed.");
  console.error(error);
  process.exitCode = 1;
});
