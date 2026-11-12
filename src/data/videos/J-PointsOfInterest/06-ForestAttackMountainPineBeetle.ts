/**
 * @file 06-ForestAttackMountainPineBeetle.ts
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Forest Attack - Mountain Pine Beetle video.
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

const videoId = "poi-06j-forest-attack-mountain-pine-beetle";
const videoAssets = getVideoAssetPaths(VideoCategory.POINTS_OF_INTEREST.id, videoId);

export const forestAttackMountainPineBeetleVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Forest Attack - Mountain Pine Beetle",
    fr: "Attaque de la forêt : dendroctone du pin ponderosa"
  },

  description: {
    en: "Follow biologists as they look for trees attacked by Mountain Pine Beetles.",
    fr: "Suivez des biologistes à la recherche d’arbres attaqués par le dendroctone du pin ponderosa."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=3ojS4z9Z68c",
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
      "forests",
      "pine-beetle",
      "infestation",
      "biology"
    ],
    fr: ["forêts", "dendroctone du pin ponderosa", "infestation", "biologie"]
  }
} satisfies VideoSource;
