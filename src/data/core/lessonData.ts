/**
 * @file lessonData.ts
 * @module Data
 * @desc Loads generated lesson-plan JSON for use by the API.
 *
 * @author Chace Nielson
 * @created Nov 11, 2026
 * @updated Nov 11, 2026
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import type { GeneratedLessonPlan } from "./lessonPlanTypes.js";

const generatedPath = path.join(
  process.cwd(),
  "src",
  "data",
  "generated",
  "lessonPlans.json"
);
const parsedLessons: unknown = JSON.parse(readFileSync(generatedPath, "utf8"));

if (!Array.isArray(parsedLessons)) {
  throw new TypeError(`Expected generated lesson-plan data to be an array: ${generatedPath}`);
}

export const allLessons = parsedLessons as GeneratedLessonPlan[];
