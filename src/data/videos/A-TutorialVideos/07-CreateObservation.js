/**
 * @file 07-CreateObservation.js
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Create an Observation tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const createObservationVideo = {
  id: "tutorial-07a-create-observation",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "How to Create an Observation in the Simulator",
    fr: "Comment créer une observation dans le simulateur"
  },

  description: {
    en: "This tutorial walks you through how to create your own observation in the simulator that you and all registered users can see.",
    fr: "Ce tutoriel vous guide dans la création de votre propre observation dans le simulateur, une observation que vous et tous les utilisateurs enregistrés peuvent voir."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=fp_WVPCdCnU",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialCreateObs.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "observation",
      "engagement",
      "student projects"
    ],

    fr: [
      "observation",
      "engagement",
      "projets etudiants"
    ]
  },
};
