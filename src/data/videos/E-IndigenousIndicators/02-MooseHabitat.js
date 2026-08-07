/**
 * @file 02-MooseHabitat.js
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Moose Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const mooseHabitatVideo = {
  id: "ind-02e-moose-habitat",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Moose Habitat",
    fr: "Habitat de l'orignal"
  },

  description: {
    en: "Moose Habitat is reduced by industrial development and proximity to human activity. This video explores how habitat value is calculated in Alberta Tomorrow.",
    fr: "L'habitat de l'orignal est reduit par le developpement industriel et la proximite avec les activites humaines. Cette video explore comment la valeur de l'habitat est calculee dans Alberta Tomorrow."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=rb0WIzUHnYw",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/0b5e0c2176c843228629c01f7775b085/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/18212f4c-ba95-443b-9a9c-8cea0186f22a/thumbnails/Moose%20Story_tumb.0000000.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "moose",
      "habitat",
      "wildlife",
      "land use"
    ],

    fr: [
      "orignal",
      "habitat",
      "faune",
      "utilisation des terres"
    ]
  },
};
