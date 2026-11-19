/**
 * @file videoData.ts
 * @module Data
 * @desc Loads generated video JSON for use by the API.
 *
 * @author Chace Nielson
 * @created Nov 11, 2026
 * @updated Nov 11, 2026
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import type { GeneratedVideo } from "./videoTypes.js";

const generatedPath = path.join(
  process.cwd(),
  "src",
  "data",
  "generated",
  "videos.json"
);
const parsedVideos: unknown = JSON.parse(readFileSync(generatedPath, "utf8"));

if (!Array.isArray(parsedVideos)) {
  throw new TypeError(`Expected generated video data to be an array: ${generatedPath}`);
}

export const allVideos = parsedVideos as GeneratedVideo[];
