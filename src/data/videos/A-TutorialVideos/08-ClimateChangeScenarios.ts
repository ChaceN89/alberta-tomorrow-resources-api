/**
 * @file 08-ClimateChangeScenarios.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Climate Change Scenarios tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "tutorial-08a-climate-scenarios";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const climateChangeScenariosVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "Investigating Climate Change Scenarios in Alberta Tomorrow",
    fr: "Étudier les scénarios climatiques dans Alberta Tomorrow"
  },

  description: {
    en: "See how you can view changes that may occur due to climate change with Mild, Medium or Hot Climate Change Scenarios.",
    fr: "Voyez comment vous pouvez voir les changements qui pourraient survenir en raison des changements climatiques avec les scénarios climatiques Doux, Moyen et Chaud."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=yF4SY7VoqDs",
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
      "climate",
      "change",
      "simulation",
      "future"
    ],

    fr: [
      "climat",
      "changement",
      "simulation",
      "avenir"
    ]
  },
} satisfies VideoSource;
