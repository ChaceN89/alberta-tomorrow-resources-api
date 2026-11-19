/**
 * @file 02-SimulatorOverview.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Simulator Overview tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "tutorial-02a-simulator-overview";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const simulatorOverviewVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "An overview of the AT simulator and features",
    fr: "Un aperçu du simulateur d’AT et des fonctions"
  },

  description: {
    en: "Watch this tutorial to see the different features of the Alberta Tomorrow Simulator.",
    fr: "Regardez ce tutoriel pour voir les différentes fonctions du simulateur d’Alberta Tomorrow. "
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=nnm0V6jmpbM",
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
      "simulator",
      "overview",
      "tutorial",
      "features",
      "dashboard"
    ],

    fr: [
      "simulateur",
      "apercu",
      "tutoriel",
      "fonctions",
      "tableau de bord"
    ]
  },
} satisfies VideoSource;
