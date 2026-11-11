/**
 * @file 06-WaterConsumption.ts
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Water Consumption video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "soc-06d-water-consumption";
const videoAssets = getVideoAssetPaths(VideoCategory.SOCIO_ECONOMIC_INDICATORS.id, videoId);

export const waterConsumptionVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Water Consumption",
    fr: "Consommation d’eau"
  },

  description: {
    en: "Learn how agricultural, settlement, and industrial use affect water consumption and how best practices can reduce demand.",
    fr: "Apprenez l’effet sur la consommation d’eau de l’agriculture, du peuplement et de l’utilisation des terres pour l’industrie, et comment les bonnes pratiques peuvent réduire la demande en eau."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=WAIlkgtDTVk",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "ab water",
      "ab water use",
      "water use",
      "land use"
    ],

    fr: [
      "eau alberta",
      "utilisation de l'eau alberta",
      "utilisation de l'eau",
      "utilisation des terres"
    ]
  },
} satisfies VideoSource;
