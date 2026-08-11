/**
 * @file 03-HuntingOpportunity.js
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Hunting Opportunity video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const huntingOpportunityVideo = {
  id: "ind-03e-hunting-opportunity",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Hunting Opportunity",
    fr: "Possibilités de chasse"
  },

  description: {
    en: "This video explains the Hunting Opportunity indicator, combining TLU Access and Moose Habitat to reflect Indigenous hunting access.",
    fr: "Cette vidéo explique l’indicateur Possibilités de chasse, une combinaison de l’accès aux UTT et de l’habitat de l’orignal qui représente l’accès à la chasse pour les Autochtones."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=d_wKqUZMaTk",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/5eefc5c24b0d4099bd93ae333cf1ec23/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/4682cb45-4133-437f-b341-98c1a7254a06/thumbnails/Land%20Use%20wildlife_tumb.0000000.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "hunting",
      "tlu",
      "moose",
      "land use"
    ],

    fr: [
      "chasse",
      "utt",
      "orignal",
      "utilisation des terres"
    ]
  },
};
