/**
 * @file 07-GrasslandRestoration.ts
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Grassland Restoration video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "poi-07j-grassland-restoration";
const videoAssets = getVideoAssetPaths(VideoCategory.POINTS_OF_INTEREST.id, videoId);

export const grasslandRestorationVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Grassland Restoration",
    fr: "Restauration des prairies"
  },

  description: {
    en: "This ranch south of Manyberries is an Alberta Conservation Association site.",
    fr: "Ce ranch situé au sud de Manyberries est un site de l’Alberta Conservation Association."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=u1qMoL3V61g",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: "https://www.youtube.com/@LetsGoOutdoors"
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: null
  },

  searchTerms: {
    en: [
      "grassland",
      "restoration",
      "ranching",
      "conservation"
    ],
    fr: ["prairies", "restauration", "élevage", "conservation"]
  }
} satisfies VideoSource;
