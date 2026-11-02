/**
 * @file 04-WritingOnStoneProvincialPark.js
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Writing on Stone Provincial Park video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const writingOnStoneProvincialParkVideo = {
  id: "poi-04j-writing-on-stone-provincial-park",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Writing on Stone Provincial Park",
    fr: "Parc provincial Writing-on-Stone"
  },

  description: {
    en: "Learn about the landforms and the significance of the area to the Blackfoot people.",
    fr: "Découvrez les formes de relief et l’importance de ce territoire pour les Pieds-Noirs."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=-MJXlSxkka8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_WritingOnStone.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "writing-on-stone",
      "petroglyphs",
      "milk-river",
      "blackfoot"
    ],
    fr: ["Writing-on-Stone", "pétroglyphes", "rivière Milk", "Pieds-Noirs"]
  }
};
