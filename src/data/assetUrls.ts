

/**
 * Centralizes public asset URL construction for videos and lesson-plan PDFs.
 * Update the base URLs here when delivery moves from S3 to CloudFront.
 */
import { VideoCategory } from "./enums/videoCategoryIds.js";

const VIDEO_ASSETS_BASE_URL =
  "https://d2qcvmovr4fv.cloudfront.net/video-assets";
// "https://abt-video-assets-prod.s3.us-west-2.amazonaws.com/videos";

const LESSON_PLAN_ASSETS_BASE_URL =
  "https://d2qcvmovr4fv.cloudfront.net/lesson-plans";
// "https://abt-video-assets-prod.s3.us-west-2.amazonaws.com/lesson-plans";

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

/** Builds the S3 URL for an English or French lesson-plan PDF. */
export function getLessonPlanPdfUrl(
  lessonPlanId: string,
  language: "en" | "fr",
): string {
  return `${LESSON_PLAN_ASSETS_BASE_URL}/${encodePathSegment(lessonPlanId, "lesson plan ID")}/${language}.pdf`;
}
