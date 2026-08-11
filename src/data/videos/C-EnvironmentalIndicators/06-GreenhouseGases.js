/**
 * @file 06-GreenhouseGases.js
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Greenhouse Gases video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const greenhouseGasesVideo = {
  id: "env-06c-greenhouse-gasses",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Greenhouse Gasses",
    fr: "Gaz à effet de serre"
  },

  description: {
    en: "Understand how greenhouse gas emissions are linked to population and resource production, and how best practices can cut emissions.",
    fr: "Comprenez comment les émissions de gaz à effet de serre sont liées à la population et à la production de ressources, et comment les bonnes pratiques peuvent réduire ces émissions."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=m7G3mSq2aD0",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/0ae65744bb3847bb9a6d8b8eb33c2ef0/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/be03a00b-b27d-4afe-be64-332ec61b92c5/thumbnails/Greenhouse Gases v2_H264_tumb.0000039.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "ab climate change",
      "climate change",
      "biotic carbon storage",
      "land use",
      "photosynthesis",
      "carbon sinks",
      "carbon sources",
      "greenhouse gases",
      "greenhouse effect"
    ],

    fr: [
      "changements climatiques alberta",
      "changements climatiques",
      "stockage du carbone biotique",
      "utilisation des terres",
      "photosynthese",
      "puits de carbone",
      "sources de carbone",
      "gaz a effet de serre",
      "effet de serre"
    ]
  },
};
