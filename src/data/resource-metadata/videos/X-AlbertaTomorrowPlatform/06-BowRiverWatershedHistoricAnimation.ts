/**
 * @file 06-BowRiverWatershedHistoricAnimation.ts
 * @module Data/Videos/AlbertaTomorrowPlatform
 * @desc Contains localized metadata for the Bow River Watershed historic animation.
 *
 * @author Chace Nielson
 * @created Nov 13, 2026
 * @updated Nov 13, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "atp-06x-bow-river-watershed-historic-animation";
const videoAssets = getVideoAssetPaths(VideoCategory.ALBERTA_TOMORROW_PLATFORM.id, videoId);

export const bowRiverWatershedHistoricAnimationVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ALBERTA_TOMORROW_PLATFORM.id,

  title: {
    en: "Bow River Watershed Historic Animation",
    fr: "Animation historique du bassin versant de la rivière Bow"
  },

  description: {
    en: "See how the Bow River Watershed has changed from 1910 to present.",
    fr: "Découvrez comment le bassin versant de la rivière Bow a évolué de 1910 à aujourd’hui."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=9o_BQt5agnE",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },

  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "bow river watershed",
      "historic animation",
      "landscape change",
      "alberta"
    ],
    fr: [
      "bassin versant de la rivière Bow",
      "animation historique",
      "changements du paysage",
      "Alberta"
    ]
  }
} satisfies VideoSource;
