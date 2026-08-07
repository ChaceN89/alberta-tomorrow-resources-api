/**
 * @file 05-AgriculturalProduction.js
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Agricultural Production video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const agriculturalProductionVideo = {
  id: "soc-05d-agriculture-production",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Agricultural Production",
    fr: "Production agricole"
  },

  description: {
    en: "Learn how using the landscape for agriculture contributes to food production and economic development in Alberta.",
    fr: "Apprenez comment l'utilisation des terres pour l'agriculture contribue a la production d'aliments et au developpement economique en Alberta."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=hh84gk46swY",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/ae54d05645274ba78eb07c8c480d8455/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/760a93f5-2cff-49e0-843c-3dd759b7232d/thumbnails/Agriculture Production v2_H264_tumb.0000025.jpg",
    is360: false
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
};
