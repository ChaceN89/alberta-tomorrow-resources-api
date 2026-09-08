/**
 * @file 14-ConceptOfTime.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Concept of Time video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const conceptOfTimeVideo = {
  id: "stoney-14h-concept-of-time",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Concept of Time",
    fr: "Concept du temps"
  },

  description: {
    en: "Travis talks about differences in the concept of time. The oral tradition says \"Back in time\".  Stoney used the surroundings and animals to tell time, seasons and the weather. \"The Sky was the clock, the moon, the stars.\"",
    fr: "Travis parle des différences en matière de concept du temps. La tradition orale dit « Dans le temps ». Les Stoney se servaient de l’environnement et des animaux comme calendrier, des saisons et de la température. « Le ciel était notre montre, la lune, les étoiles »."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=8Rxut4EAyYg",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/16e0288c-1b7e-4323-8470-91ed4f317b65/thumbnails/Concept%20of%20Time_tumb.0000000.jpg",
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
      "concept",
      "temps",
      "travis",
      "parle",
      "differences",
      "matiere",
      "tradition",
      "orale"
    ]
  }
};
