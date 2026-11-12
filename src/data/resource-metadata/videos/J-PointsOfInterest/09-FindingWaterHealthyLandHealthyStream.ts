/**
 * @file 09-FindingWaterHealthyLandHealthyStream.ts
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Finding Water: Healthy Land, Healthy Stream video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "poi-09j-finding-water-healthy-land-stream";
const videoAssets = getVideoAssetPaths(VideoCategory.POINTS_OF_INTEREST.id, videoId);

export const findingWaterHealthyLandHealthyStreamVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Finding Water: Healthy Land, Healthy Stream",
    fr: "Trouver l’eau : terres saines, cours d’eau en santé"
  },

  description: {
    en: "A documentary video on the sources of Canada’s prairie rivers and their vulnerability to land use.",
    fr: "Un documentaire sur les sources des rivières des Prairies canadiennes et leur vulnérabilité aux changements d’utilisation des terres."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=E2wYNZJ-tC4",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: "https://www.youtube.com/@livingstonelandownersgroup2629"
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: null
  },

  searchTerms: {
    en: [
      "prairie-rivers",
      "stream-health",
      "land-use",
      "canadian-water"
    ],
    fr: ["rivières des Prairies", "santé des cours d’eau", "utilisation des terres", "eau au Canada"]
  }
} satisfies VideoSource;
