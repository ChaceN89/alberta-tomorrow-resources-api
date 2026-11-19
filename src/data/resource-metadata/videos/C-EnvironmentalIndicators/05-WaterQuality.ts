/**
 * @file 05-WaterQuality.ts
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Water Quality video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "env-05c-water-quality";
const videoAssets = getVideoAssetPaths(VideoCategory.ENVIRONMENTAL_INDICATORS.id, videoId);

export const waterQualityVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Water Quality",
    fr: "Qualité de l’eau"
  },

  description: {
    en: "Explore how phosphorus runoff from agriculture and settlement impacts aquatic ecosystems and how best practices can improve water quality.",
    fr: "Voyez comment l’écoulement de phosphore causé par l’agriculture et le peuplement nuit aux écosystèmes aquatiques et comment les bonnes pratiques peuvent améliorer la qualité de l’eau."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=qsaeCqrJ64o",
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
