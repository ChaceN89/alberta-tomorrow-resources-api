import { VideoCategory } from "./enums/videoCategoryIds.js";

const VIDEO_ASSETS_BASE_URL =
  "https://abt-video-assets-prod.s3.us-west-2.amazonaws.com/videos";
const LESSON_PLAN_ASSETS_BASE_URL =
  "https://abt-video-assets-prod.s3.us-west-2.amazonaws.com/lesson-plans";
const YOUTUBE_THUMBNAILS_BASE_URL =
  "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails";

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

function encodePathSegment(value: string, label: string): string {
  if (!value.trim() || value === "." || value === ".." || /[\\/]/.test(value)) {
    throw new Error(`Invalid ${label} path segment: "${value}".`);
  }
  return encodeURIComponent(value);
}

export function getVideoCategoryFolder(categoryId: string): string {
  const folder = VIDEO_CATEGORY_FOLDERS[categoryId];
  if (!folder) {
    throw new Error(`No video asset folder is configured for category "${categoryId}".`);
  }
  return folder;
}

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

export function getYouTubeThumbnailUrl(fileName: string): string {
  return `${YOUTUBE_THUMBNAILS_BASE_URL}/${encodePathSegment(fileName, "thumbnail filename")}`;
}

export function getLessonPlanPdfUrl(
  lessonPlanId: string,
  language: "en" | "fr",
): string {
  return `${LESSON_PLAN_ASSETS_BASE_URL}/${encodePathSegment(lessonPlanId, "lesson plan ID")}/${language}.pdf`;
}
