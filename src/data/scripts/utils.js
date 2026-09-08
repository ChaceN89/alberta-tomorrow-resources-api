/**
 * @file utils.js
 * @module Scripts/Utils
 * @desc Shared utilities for the data generation scripts.
 *       Handles file discovery, JSON output, and field normalization.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

// ─── Generation Options ───────────────────────────────────────────────────────

export const GenerationOptions = {
  verbose: process.argv.includes("--verbose"),
  strict: process.argv.includes("--strict")
};

// ─── ANSI Colours ─────────────────────────────────────────────────────────────

export const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  underline: "\x1b[4m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

/**
 * Returns the last two path segments (category/filename), truncating the
 * folder name to 24 characters if it is too long.
 * e.g. "D_AlbertaNaturalRegionsAndEcosystemsLessons/01-Virtual.js"
 *   → "D_AlbertaNaturalRegionsA.../01-Virtual.js"
 */
export function shortPath(filePath) {
  const parts = filePath.split(path.sep);
  const folder = parts[parts.length - 2];
  const file = parts[parts.length - 1];

  const MAX_FOLDER = 10;
  const shortFolder = folder.length > MAX_FOLDER
    ? `${folder.slice(0, MAX_FOLDER)}...`
    : folder;

  // Truncate long filenames: keep first 10 chars + "..." + last 11 chars
  const FILE_THRESHOLD = 30;
  const FILE_START = 10;
  const FILE_END = 11;
  const shortFile = file.length > FILE_THRESHOLD
    ? `${file.slice(0, FILE_START)}...${file.slice(-FILE_END)}`
    : file;

  return `${shortFolder}/${shortFile}`;
}

/**
 * Writes a warning only when verbose generation is enabled.
 *
 * @param {string} message
 */
export function logVerboseWarning(message) {
  if (GenerationOptions.verbose) {
    console.warn(`  ${C.yellow}\u26a0${C.reset} ${message}`);
  }
}

// ─── File Discovery ───────────────────────────────────────────────────────────

/**
 * Recursively finds all .js files under a directory, sorted numerically.
 * @param {string} directory
 * @returns {Promise<string[]>}
 */
export async function findJavaScriptFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findJavaScriptFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".js")) {
      files.push(fullPath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

// ─── JSON Output ──────────────────────────────────────────────────────────────

/**
 * Serialises data as formatted JSON and writes it to the generated directory.
 * @param {string} outputPath  Absolute path to the output file.
 * @param {unknown} data
 */
export async function writeJsonFile(outputPath, data) {
  const json = `${JSON.stringify(data, null, 2)}\n`;
  await writeFile(outputPath, json, "utf8");
  console.log(`  ${C.green}\u2713${C.reset} Generated ${C.underline}${outputPath}${C.reset}`);
}

// ─── Normalisation helpers ────────────────────────────────────────────────────

const NA = "N/A";

/**
 * Returns a localised string object with guaranteed `en` and `fr` keys.
 * If the value is already a plain string it is used as the English value.
 */
export function normalizeLocalizedString(value) {
  if (!value || typeof value !== "object") {
    const str = typeof value === "string" ? value : NA;
    return { en: str, fr: NA };
  }
  return {
    en: typeof value.en === "string" && value.en.trim() !== "" ? value.en : NA,
    fr: typeof value.fr === "string" && value.fr.trim() !== "" ? value.fr : NA,
  };
}

/**
 * Returns a localised array object with guaranteed `en` and `fr` keys.
 */
export function normalizeLocalizedArray(value) {
  if (!value || typeof value !== "object") {
    return { en: [], fr: [] };
  }
  return {
    en: Array.isArray(value.en) ? value.en : [],
    fr: Array.isArray(value.fr) ? value.fr : [],
  };
}

/**
 * Returns the value if it is a non-empty string, otherwise returns "N/A".
 */
export function normalizeString(value) {
  return typeof value === "string" && value.trim() !== "" ? value : NA;
}

/**
 * Returns the value if it is an array, otherwise returns [].
 */
export function normalizeArray(value) {
  return Array.isArray(value) ? value : [];
}

/**
 * Returns the value if it is a boolean, otherwise returns false.
 */
export function normalizeBoolean(value) {
  return typeof value === "boolean" ? value : false;
}
