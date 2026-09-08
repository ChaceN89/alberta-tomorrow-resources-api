/**
 * @file 08-BeneathTheSurfaceWaterMonitoringInTheGhostWatershed.js
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Beneath the Surface: Water Monitoring in the Ghost Watershed video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const beneathTheSurfaceWaterMonitoringInTheGhostWatershedVideo = {
  id: "poi-08j-beneath-the-surface-water-monitoring",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Beneath the Surface: Water Monitoring in the Ghost Watershed",
    fr: "N/A"
  },

  description: {
    en: "Peek into a bucket of bugs and see why these aquatic invertebrates are indicators of water quality.",
    fr: "N/A"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=KdEN85OgG4o",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/gwas-ghost-waiparous.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "water",
      "ghost-watershed",
      "monitoring",
      "aquatic-invertebrates"
    ],
    fr: []
  }
};
