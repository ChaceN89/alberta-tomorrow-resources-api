/**
 * @file 03-HydrocarbonProduction.js
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Hydrocarbon Production video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const hydrocarbonProductionVideo = {
  id: "soc-03d-hydrocarbon-production",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Hydrocarbon Production",
    fr: "Production d’hydrocarbures"
  },

  description: {
    en: "Hydrocarbon production includes natural gas, oil, bitumen, and coal. Learn how energy production affects land use and the economy.",
    fr: "La production d’hydrocarbures comprend le gaz naturel, le pétrole, le bitume et le charbon. Apprenez l’effet de la production d’énergie sur l’utilisation des terres et l’économie."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Bfz4p6dQQcE",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/d48b44f7b1294f1d811ac728af797c42/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/cd19ded8-4eea-4b3a-941b-a42e65800907/thumbnails/Oil Gas v2_tumb.0000033.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "ab oil and gas",
      "hydrocarbons",
      "land use",
      "ab economy"
    ],

    fr: [
      "petrole et gaz alberta",
      "hydrocarbures",
      "utilisation des terres",
      "economie alberta"
    ]
  },
};
