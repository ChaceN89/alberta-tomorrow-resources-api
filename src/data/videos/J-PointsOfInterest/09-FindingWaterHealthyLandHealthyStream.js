/**
 * @file 09-FindingWaterHealthyLandHealthyStream.js
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Finding Water: Healthy Land, Healthy Stream video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const findingWaterHealthyLandHealthyStreamVideo = {
  id: "poi-09j-finding-water-healthy-land-stream",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Finding Water: Healthy Land, Healthy Stream",
    fr: "N/A"
  },

  description: {
    en: "A documentary video on the sources of Canada’s prairie rivers and their vulnerability to land use.",
    fr: "N/A"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=E2wYNZJ-tC4",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/livingstone_findingwater.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "prairie-rivers",
      "stream-health",
      "land-use",
      "canadian-water"
    ],
    fr: []
  }
};
