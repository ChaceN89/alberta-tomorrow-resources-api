

/**
 * Centralizes public asset URL construction for videos and lesson-plan PDFs.
 * Update the base URLs here when delivery moves from S3 to CloudFront.
 */
import { VideoCategory } from "../enums/videoCategoryIds.js";
import { LessonTheme } from "../enums/LessonThemeIds.js";
import { FileType } from "../enums/fileTypes.js";

const VIDEO_ASSETS_BASE_URL =
  "https://d2qcvmovr4fv.cloudfront.net/video-assets";

const LESSON_PLAN_ASSETS_BASE_URL =
  "https://d2qcvmovr4fv.cloudfront.net/lesson-plans";

export const GOOGLE_DOCS_BASE_URL = "https://docs.google.com";

/** Provider for videos published on Alberta Tomorrow's own YouTube channel. */
export const ALBERTA_TOMORROW_PROVIDER = "https://www.youtube.com/@albertatomorrow";


// These directory names match the existing S3 layout; preserve their spelling and case.
const VIDEO_CATEGORY_FOLDERS: Record<string, string> = {
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

const LESSON_THEME_FOLDERS: Record<string, string> = {
  [LessonTheme.CLIMATE_CHANGE.id]: "A_ClimateChangeLessons",
  [LessonTheme.GLACIERS_AND_WATERSHEDS.id]: "B_GlaciersAndWatershedsLessons",
  [LessonTheme.LAND_USE.id]: "C_LandUseLessons",
  [LessonTheme.ALBERTA_NATURAL_REGIONS.id]: "D_AlbertaNaturalRegionsAndEcosystemsLessons",
  [LessonTheme.INDIGENOUS_VOICES.id]: "E_IndigenousVoicesLessons",
  [LessonTheme.BOW_RIVER_WATERSHED.id]: "F_BowRiverWatershedLessons",
  [LessonTheme.ENERGY.id]: "G_EnergyLessons",
};

// Encode one URL path segment and reject values that could add or escape a directory.
function encodePathSegment(value: string, label: string): string {
  if (!value.trim() || value === "." || value === ".." || /[\\/]/.test(value)) {
    throw new Error(`Invalid ${label} path segment: "${value}".`);
  }
  return encodeURIComponent(value);
}

/** Returns the storage directory associated with a video category ID. */
export function getVideoCategoryFolder(categoryId: string): string {
  const folder = VIDEO_CATEGORY_FOLDERS[categoryId];
  if (!folder) {
    throw new Error(`No video asset folder is configured for category "${categoryId}".`);
  }
  return folder;
}

/**
 * Builds URLs for a video's asset directory and its individual files.
 * The directory is videos/<category-folder>/<video-id>; use file() for filenames.
 */
export function getVideoAssetPaths(categoryId: string, videoId: string) {
  const categoryFolder = getVideoCategoryFolder(categoryId);
  const baseUrl = [
    VIDEO_ASSETS_BASE_URL,
    encodePathSegment(categoryFolder, "video category"),
    encodePathSegment(videoId, "video ID"),
  ].join("/");

  return {
    baseUrl,
    file: (fileName: string) =>
      `${baseUrl}/${encodePathSegment(fileName, "video asset filename")}`,
  };
}

export function getLessonPlanPdfFileNames(
  language: "en" | "fr",
  files: ReadonlyArray<{ fileType: string }>,
): string[] {
  const allowedTypes = new Set<string>(Object.values(FileType));
  const counts = new Map<string, number>();
  return files.map(({ fileType }) => {
    if (!allowedTypes.has(fileType)) throw new Error(`Unsupported lesson file type: "${fileType}".`);
    const count = (counts.get(fileType) ?? 0) + 1;
    counts.set(fileType, count);
    return `${language}-${fileType}${count === 1 ? "" : `-${count}`}.pdf`;
  });
}

export function getLessonPlanThemeFolder(themeId: string): string {
  const folder = LESSON_THEME_FOLDERS[themeId];
  if (!folder) throw new Error(`No lesson asset folder is configured for theme "${themeId}".`);
  return folder;
}

/** Builds CloudFront URLs matching the lesson PDF extraction and S3 directory layout. */
export function getLessonPlanAssetPaths(themeId: string, lessonPlanId: string) {
  const folder = getLessonPlanThemeFolder(themeId);
  const baseUrl = [
    LESSON_PLAN_ASSETS_BASE_URL,
    encodePathSegment(folder, "lesson theme"),
    encodePathSegment(lessonPlanId, "lesson plan ID"),
  ].join("/");

  return {
    baseUrl,
    file: (fileName: string) =>
      `${baseUrl}/${encodePathSegment(fileName, "lesson asset filename")}`,
  };
}
