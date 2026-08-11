/**
 * @file 01-HumanPopulation.js
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Human Population video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const humanPopulationVideo = {
  id: "soc-01d-human-population",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Human Population",
    fr: "Population humaine"
  },

  description: {
    en: "Maximum population growth is assumed to be a doubling of the population. Learn more about Alberta's projected population and land use impacts.",
    fr: "On présume que la croissance maximale de la population représenterait le double de la population actuelle. Apprenez-en davantage au sujet des impacts prévus causés par la population et l’utilisation des terres en Alberta."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=BOBc-sv-qJw",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/88c0e1da186a403b9d8f6504062316a9/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/020d0ab8-d1d3-4cc4-b064-ce5c86f1b702/thumbnails/Human Population v2_H264_tumb.0000010.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "ab population",
      "exponential population growth",
      "ab growth",
      "land use"
    ],

    fr: [
      "population alberta",
      "croissance exponentielle de la population",
      "croissance alberta",
      "utilisation des terres"
    ]
  },
};
