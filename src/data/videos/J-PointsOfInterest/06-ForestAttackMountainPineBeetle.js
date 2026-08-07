/**
 * @file 06-ForestAttackMountainPineBeetle.js
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Forest Attack - Mountain Pine Beetle video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const forestAttackMountainPineBeetleVideo = {
  id: "poi-06j-forest-attack-mountain-pine-beetle",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Forest Attack - Mountain Pine Beetle",
    fr: "N/A"
  },

  description: {
    en: "Follow biologists as they look for trees attacked by Mountain Pine Beetles.",
    fr: "N/A"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=3ojS4z9Z68c",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_PineBeetle.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "forests",
      "pine-beetle",
      "infestation",
      "biology"
    ],
    fr: []
  }
};
