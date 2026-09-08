/**
 * @file 04-FishHabitat.js
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Fish Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const fishHabitatVideo = {
  id: "env-04c-fish-habitat",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Fish Habitat",
    fr: "Habitat du poisson"
  },

  description: {
    en: "Discover how land use affects fish community health, from native trout populations to the impacts of angling and habitat disturbance.",
    fr: "Découvrez comment les utilisations des terres nuisent à la santé des communautés de poissons, des populations de truites indigènes aux impacts de la pêche sportive et de la perturbation de l’habitat."
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
      "ab water",
      "ab trout",
      "native trout"
    ],

    fr: [
      "poissons alberta",
      "habitat du poisson",
      "eau alberta",
      "truite alberta",
      "truite indigene"
    ]
  },
};
