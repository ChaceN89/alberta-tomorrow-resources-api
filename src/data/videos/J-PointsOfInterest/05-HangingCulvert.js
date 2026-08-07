/**
 * @file 05-HangingCulvert.js
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Hanging Culvert video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const hangingCulvertVideo = {
  id: "poi-05j-hanging-culvert",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Hanging Culvert",
    fr: "N/A"
  },

  description: {
    en: "Listen to this fisheries biologist explain what a hanging culvert is in the upper reaches of the Red Deer River Watershed.",
    fr: "N/A"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=r-_LsSi7FJ0",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_HangingCulvert.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "culvert",
      "stream-crossing",
      "fish",
      "watershed",
      "roads"
    ],
    fr: []
  }
};
