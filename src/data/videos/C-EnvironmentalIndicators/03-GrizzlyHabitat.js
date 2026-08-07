/**
 * @file 03-GrizzlyHabitat.js
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Grizzly Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const grizzlyHabitatVideo = {
  id: "env-03c-grizzly-habitat",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Grizzly Habitat",
    fr: "Habitat du grizzli"
  },

  description: {
    en: "Learn how forest development and human activity affect the suitability of grizzly bear habitat across Alberta.",
    fr: "Apprenez comment le developpement forestier et les activites humaines nuisent a l'habitat convenant au grizzli partout en Alberta."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=4wxOOhpNRhs",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/7d5e0260a35c45af8755c0186b82e3d3/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/4aec75a3-5a3a-44fa-8350-8f8dfda26f0c/thumbnails/Grizzly Bear habitat v1_tumb.0000021.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "grizzly bear habitat",
      "ab wildlife",
      "ab grizzlies",
      "land use",
      "threatened species"
    ],

    fr: [
      "habitat du grizzli",
      "faune alberta",
      "grizzlis alberta",
      "utilisation des terres",
      "espece menacee"
    ]
  },
};
