/**
 * @file 05-AgriculturalProduction.ts
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Agricultural Production video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "soc-05d-agriculture-production";
const videoAssets = getVideoAssetPaths(VideoCategory.SOCIO_ECONOMIC_INDICATORS.id, videoId);

export const agriculturalProductionVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Agricultural Production",
    fr: "Production agricole"
  },

  description: {
    en: "Learn how using the landscape for agriculture contributes to food production and economic development in Alberta.",
    fr: "Apprenez comment l’utilisation des terres pour l’agriculture contribue à la production d’aliments et au développement économique en Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=hh84gk46swY",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "ab ag",
      "agriculture",
      "land use",
      "ab economy"
    ],

    fr: [
      "agriculture alberta",
      "agriculture",
      "utilisation des terres",
      "economie alberta"
    ]
  },
} satisfies VideoSource;
