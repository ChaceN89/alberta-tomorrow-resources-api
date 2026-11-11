/**
 * @file 08-BeneathTheSurfaceWaterMonitoringInTheGhostWatershed.ts
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
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "poi-08j-beneath-the-surface-water-monitoring";
const videoAssets = getVideoAssetPaths(VideoCategory.POINTS_OF_INTEREST.id, videoId);

export const beneathTheSurfaceWaterMonitoringInTheGhostWatershedVideo = {
  id: videoId,

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
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=KdEN85OgG4o",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
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
} satisfies VideoSource;
