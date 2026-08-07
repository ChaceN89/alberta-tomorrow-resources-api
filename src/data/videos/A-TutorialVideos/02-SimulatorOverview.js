/**
 * @file 02-SimulatorOverview.js
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Simulator Overview tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const simulatorOverviewVideo = {
  id: "tutorial-02a-simulator-overview",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "User Tutorial: An overview of the AT simulator and features",
    fr: "Un apercu du simulateur d'AT et des fonctions"
  },

  description: {
    en: "Watch this tutorial to see the different features of the Alberta Tomorrow Simulator.",
    fr: "Regardez ce tutoriel pour voir les differentes fonctions du simulateur d'Alberta Tomorrow."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=nnm0V6jmpbM",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialOverview.jpg",
    is360: false
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
};
