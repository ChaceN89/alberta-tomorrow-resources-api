/**
 * @file 05-FishHabitat.js
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Fish Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const fishHabitatVideo = {
  id: "ind-05e-fish-habitat",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Fish Habitat",
    fr: "Habitat du poisson"
  },

  description: {
    en: "Healthy fish habitat means diverse native species and fewer disturbances. This video highlights habitat importance to Indigenous communities.",
    fr: "Un habitat du poisson en santé se définit par des espèces indigènes diversifiées et moins de perturbations. Cette vidéo souligne l’importance de l’habitat pour les communautés autochtones."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=oti7o8JS62Q",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/edc8301613324a6699d44e7e8ad91427/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/28da03d6-aee2-4c23-be8f-bee1d50d7a4a/thumbnails/Fish Habitat v2_H264_tumb.0000030.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "ab fish",
      "fish habitat",
      "native trout",
      "indigenous values"
    ],

    fr: [
      "poissons alberta",
      "habitat du poisson",
      "truite indigene",
      "valeurs autochtones"
    ]
  },
};
