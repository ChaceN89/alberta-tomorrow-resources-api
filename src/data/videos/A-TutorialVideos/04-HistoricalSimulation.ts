/**
 * @file 04-HistoricalSimulation.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Historical Simulation tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "tutorial-04a-historical-simulation";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const historicalSimulationVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "Running a Historical Simulation in Alberta Tomorrow",
    fr: "Exécuter un scénario historique dans Alberta Tomorrow"
  },

  description: {
    en: "Watch this video to find out how your study area has changed since 1910!",
    fr: "Regardez cette vidéo pour comprendre l’évolution de votre zone d’étude depuis 1910!"
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=qMXZYBHCD_E",
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
      "history",
      "simulation",
      "land use",
      "education"
    ],

    fr: [
      "histoire",
      "simulation",
      "utilisation des terres",
      "education"
    ]
  },
} satisfies VideoSource;
