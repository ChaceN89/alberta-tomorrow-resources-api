/**
 * @file 04-WaterQuality.ts
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Water Quality video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "ind-04e-water-quality";
const videoAssets = getVideoAssetPaths(VideoCategory.INDIGENOUS_INDICATORS.id, videoId);

export const waterQualityVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Water Quality",
    fr: "Qualité de l’eau"
  },

  description: {
    en: "Phosphorus runoff and land conversion reduce water quality. Learn how Indigenous communities are impacted and how this indicator is measured.",
    fr: "L’écoulement de phosphore et la conversion des terres diminuent la qualité de l’eau. Apprenez quel est l’impact sur les communautés autochtones et comment se mesure cet indicateur."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=oG-PuCO-h7I",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "ab water",
      "water quality",
      "eutrophication",
      "land use"
    ],

    fr: [
      "eau alberta",
      "qualite de l'eau",
      "eutrophisation",
      "utilisation des terres"
    ]
  },
} satisfies VideoSource;
