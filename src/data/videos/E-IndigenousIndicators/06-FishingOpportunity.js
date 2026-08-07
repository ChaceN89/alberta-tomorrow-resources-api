/**
 * @file 06-FishingOpportunity.js
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Fishing Opportunity video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const fishingOpportunityVideo = {
  id: "ind-06e-fishing-opportunity",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Fishing Opportunity",
    fr: "Possibilites de peche"
  },

  description: {
    en: "Fishing Opportunity combines TLU Access and Fish Habitat to indicate access to successful fishing activities for Indigenous peoples.",
    fr: "Les possibilites de peches combinent l'acces aux UTT et l'habitat du poisson pour indiquer l'acces aux activites de peche fructueuse pour les peuples autochtones."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=vN_X59jznLE",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/64b6a087dc63427fa227b08165994242/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/e9bd9064-c34e-4769-a3c3-8d702623d91b/thumbnails/Fishing%20on%20the%20Bow_tumb.0000000.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "fishing",
      "tlu",
      "native trout",
      "land use"
    ],

    fr: [
      "peche",
      "utt",
      "truite indigene",
      "utilisation des terres"
    ]
  },
};
