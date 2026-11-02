/**
 * @file 08-BeneathTheSurfaceWaterMonitoringInTheGhostWatershed.js
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Beneath the Surface: Water Monitoring in the Ghost Watershed video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const beneathTheSurfaceWaterMonitoringInTheGhostWatershedVideo = {
  id: "poi-08j-beneath-the-surface-water-monitoring",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Beneath the Surface: Water Monitoring in the Ghost Watershed",
    fr: "Sous la surface : surveillance de l’eau dans le bassin versant de Ghost"
  },

  description: {
    en: "Peek into a bucket of bugs and see why these aquatic invertebrates are indicators of water quality.",
    fr: "Observez des invertébrés aquatiques dans un seau et découvrez pourquoi ils sont des indicateurs de la qualité de l’eau."
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
    fr: ["eau", "bassin versant de Ghost", "surveillance", "invertébrés aquatiques"]
  }
};
