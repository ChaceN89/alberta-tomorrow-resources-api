/**
 * @file 23-LandUseAndWildlife.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Land Use and Wildlife video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const landUseAndWildlifeVideo = {
  id: "stoney-23h-land-use-and-wildlife",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Land Use and Wildlife",
    fr: "Utilisation des terres et animaux sauvages"
  },

  description: {
    en: "Travis talks about how wildlife populations have changed on Stoney territory and what needs to be done to protect from further loss. \"We are coming into the home of the four legged and winged ones and need to be mindful of what we're doing\".",
    fr: "Travis explique comment les populations d’animaux sauvages ont changé sur le territoire des Stoney et ce qui doit être fait pour les protéger et éviter d’autres pertes. « Nous entrons sur le territoire des animaux ailés et à quatre pattes et nous devons faire attention à ce que nous y faisons. »"
  },

  media: {
    type: "youtube",
    url: "https://youtu.be/d_wKqUZMaTk?si=3dnMMNcSOKg8pW5X",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/4682cb45-4133-437f-b341-98c1a7254a06/thumbnails/Land%20Use%20wildlife_tumb.0000000.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "indigenousstories",
      "stoneynakoda",
      "indigenouslanduse",
      "morley",
      "landuse",
      "abwater",
      "alberta",
      "stoneyvoices",
      "traditionallanduse"
    ],
    fr: [
      "utilisation",
      "terres",
      "animaux",
      "sauvages",
      "travis",
      "explique",
      "comment",
      "populations"
    ]
  }
};
