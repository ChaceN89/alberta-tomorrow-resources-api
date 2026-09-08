/**
 * @file 07-GrasslandRestoration.js
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Grassland Restoration video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const grasslandRestorationVideo = {
  id: "poi-07j-grassland-restoration",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Grassland Restoration",
    fr: "N/A"
  },

  description: {
    en: "This ranch south of Manyberries is an Alberta Conservation Association site.",
    fr: "N/A"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=u1qMoL3V61g",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_GrasslandRestoration.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "grassland",
      "restoration",
      "ranching",
      "conservation"
    ],
    fr: []
  }
};
