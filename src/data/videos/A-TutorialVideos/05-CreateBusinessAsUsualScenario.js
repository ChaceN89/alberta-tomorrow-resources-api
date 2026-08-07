/**
 * @file 05-CreateBusinessAsUsualScenario.js
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Create a Business as Usual Scenario tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const createBusinessAsUsualScenarioVideo = {
  id: "tutorial-05a-create-bau-scenario",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "User Tutorial: How to Create a Business as Usual (BAU) Scenario",
    fr: "Comment creer un scenario de maintien du statu quo"
  },

  description: {
    en: "A BAU scenario gives you a glimpse of a possible future, one that carries current trends in landuse into the future.",
    fr: "Un scenario de maintien du statu quo vous donne un apercu de ce a quoi pourrait ressembler l'avenir; ce scenario projette les tendances actuelles en matiere d'utilisation des terres dans l'avenir."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=gWm7yWBkPHo",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialCreateBAU.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "bau",
      "scenario",
      "future",
      "land use"
    ],

    fr: [
      "statu quo",
      "scenario",
      "avenir",
      "utilisation des terres"
    ]
  },
};
