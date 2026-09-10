/**
 * @file 03-OilAndGasProduction.js
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Oil and Gas Production video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Sep 10, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const oilAndGasProductionVideo = {
  id: "soc-03d-oil-and-gas-production",

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
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Bfz4p6dQQcE",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/d48b44f7b1294f1d811ac728af797c42/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/cd19ded8-4eea-4b3a-941b-a42e65800907/thumbnails/Oil Gas v2_tumb.0000033.jpg",
    is360: false
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
};