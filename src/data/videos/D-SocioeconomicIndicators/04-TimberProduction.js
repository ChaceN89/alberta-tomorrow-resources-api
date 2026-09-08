/**
 * @file 04-TimberProduction.js
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Timber Production video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const timberProductionVideo = {
  id: "soc-04d-timber-production",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Timber Production",
    fr: "Production de bois d’œuvre"
  },

  description: {
    en: "A value of 100% means all forested land is used for timber. Explore how forestry contributes to the economy and affects land use.",
    fr: "Une valeur de 100 % indique que toute la superficie qui est boisée sert à la production de bois d’œuvre. Apprenez comment la foresterie contribue à l’économie et son effet sur l’utilisation des terres."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=157uaHUOKJw",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/82edfc851a914347a416aafc0108d37b/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/741f8b05-8f79-4994-8234-01592f4688e2/thumbnails/Forestry v2_H264_tumb.0000025.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "ab forestry",
      "land use",
      "forestry",
      "ab economy"
    ],

    fr: [
      "foresterie alberta",
      "utilisation des terres",
      "foresterie",
      "economie alberta"
    ]
  },
};
