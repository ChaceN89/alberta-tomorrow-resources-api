/**
 * @file 06-WaterConsumption.js
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Water Consumption video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const waterConsumptionVideo = {
  id: "soc-06d-water-consumption",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Water Consumption",
    fr: "Consommation d'eau"
  },

  description: {
    en: "Learn how agricultural, settlement, and industrial use affect water consumption and how best practices can reduce demand.",
    fr: "Apprenez l'effet sur la consommation d'eau de l'agriculture, du peuplement et de l'utilisation des terres pour l'industrie, et comment les bonnes pratiques peuvent reduire la demande en eau."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=YcibG9eybbc",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/15cffe272bc44d51a21fda366d42a26d/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/a42e73bb-ede0-415a-b12b-a873782a69a1/thumbnails/Water Consumption v3_H264_tumb.0000039.jpg",
    is360: false
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
};
