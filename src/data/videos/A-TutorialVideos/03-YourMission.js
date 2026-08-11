/**
 * @file 03-YourMission.js
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Your Mission tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const yourMissionVideo = {
  id: "tutorial-03a-your-mission",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "Your Mission",
    fr: "Votre mission"
  },

  description: {
    en: "An overview of the mission you will accomplish using Alberta Tomorrow",
    fr: "Un aperçu de la mission que vous accomplirez à l’aide d’Alberta Tomorrow."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=yNljbKNBI1M",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialMission.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "mission",
      "objectives",
      "learning path",
      "tutorial"
    ],

    fr: [
      "mission",
      "objectifs",
      "parcours d'apprentissage",
      "tutoriel"
    ]
  },
};
