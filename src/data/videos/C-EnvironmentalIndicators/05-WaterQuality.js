/**
 * @file 05-WaterQuality.js
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Water Quality video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const waterQualityVideo = {
  id: "env-05c-water-quality",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Water Quality",
    fr: "Qualite de l'eau"
  },

  description: {
    en: "Explore how phosphorus runoff from agriculture and settlement impacts aquatic ecosystems and how best practices can improve water quality.",
    fr: "Voyez comment l'ecoulement de phosphore cause par l'agriculture et le peuplement nuit aux ecosystemes aquatiques et comment les bonnes pratiques peuvent ameliorer la qualite de l'eau."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=qsaeCqrJ64o",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/5cde617d12f6457c8c1021b18aaa4796/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/71ac9e8a-e577-4765-9783-71eaee4c08dd/thumbnails/Water Quality v2_H264_tumb.0000063.jpg",
    is360: false
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
};
