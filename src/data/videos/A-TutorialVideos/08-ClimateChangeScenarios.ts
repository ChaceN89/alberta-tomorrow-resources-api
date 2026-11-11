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

import type { VideoSource } from "../../videoTypes.js";

export const climateChangeScenariosVideo = {
  id: "tutorial-08a-climate-scenarios",

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
    youtubeUrl: "https://www.youtube.com/watch?v=yF4SY7VoqDs",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialClimate.jpg",
    is360: false
  },
  subtitles: {
    en: "N/A",
    fr: "N/A"
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
