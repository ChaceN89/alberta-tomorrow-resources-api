/**
 * @file 04-WaterQuality.js
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Water Quality video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const waterQualityVideo = {
  id: "ind-04e-water-quality",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Water Quality",
    fr: "Qualite de l'eau"
  },

  description: {
    en: "Phosphorus runoff and land conversion reduce water quality. Learn how Indigenous communities are impacted and how this indicator is measured.",
    fr: "L'ecoulement de phosphore et la conversion des terres diminuent la qualite de l'eau. Apprenez quel est l'impact sur les communautes autochtones et comment se mesure cet indicateur."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=oG-PuCO-h7I",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/b0d49bc627c0484e91c44be95305d9b4/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/9a3e7d28-fbfe-465e-96c8-74f4ddf8e15e/thumbnails/Water_tumb.0000000.jpg",
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
