/**
 * @file 03-OilAndGasProduction.ts
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Oil and Gas Production video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Sep 10, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "soc-03d-oil-and-gas-production";
const videoAssets = getVideoAssetPaths(VideoCategory.SOCIO_ECONOMIC_INDICATORS.id, videoId);

export const oilAndGasProductionVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Oil and Gas Production",
    fr: "Production de pétrole et de gaz"
  },

  description: {
    en: "Learn how oil and natural gas are produced in Alberta, how they contribute to the economy through royalties, and how their extraction affects land, water, and ecosystems.",
    fr: "Découvrez comment le pétrole et le gaz naturel sont produits en Alberta, comment ils contribuent à l’économie par les redevances et comment leur extraction affecte les terres, l’eau et les écosystèmes."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Bfz4p6dQQcE",
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
      "alberta oil and gas",
      "natural gas",
      "oil sands",
      "hydrocarbons",
      "royalties",
      "land use",
      "alberta economy"
    ],

    fr: [
      "pétrole et gaz en alberta",
      "gaz naturel",
      "sables bitumineux",
      "hydrocarbures",
      "redevances",
      "utilisation des terres",
      "économie de l’alberta"
    ]
  },
} satisfies VideoSource;
