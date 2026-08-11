/**
 * @file 06-CreateLandUseScenario.js
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Create a Land Use Scenario tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const createLandUseScenarioVideo = {
  id: "tutorial-06a-landuse-scenario",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "How to Create your own Land Use Scenarios",
    fr: "Comment créer vos propres scénarios d’utilisation des terres "
  },

  description: {
    en: "This video will show you how to select your watershed study area, set goals, make changes on the map, and run your scenario.",
    fr: "Cette vidéo vous montre comment choisir le bassin hydrographique de votre zone d’étude, établir des objectifs, apporter des changements sur la carte et exécuter votre scénario."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=RQ2Pz6gLIQ0",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialLandusePlan.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "land use",
      "planning",
      "watershed",
      "management"
    ],

    fr: [
      "utilisation des terres",
      "planification",
      "bassin versant",
      "gestion"
    ]
  },
};
