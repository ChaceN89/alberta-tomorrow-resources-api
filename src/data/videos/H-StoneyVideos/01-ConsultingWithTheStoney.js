/**
 * @file 01-ConsultingWithTheStoney.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Consulting With The Stoney video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const consultingWithTheStoneyVideo = {
  id: "stoney-01h-consulting-with-the-stoney",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Consulting With The Stoney",
    fr: "Consultations avec la nation Stoney"
  },

  description: {
    en: "The Stoney people want to be included in discussions about the future of Stoney lands. Listen to Elders talk about what they use the land for.",
    fr: "La nation Stoney veut faire partie des discussions concernant l’avenir des terres des Stoney. Écoutez les aînés parler de l’utilisation qu’ils faisaient autrefois du territoire."
  },

  media: {
    type: "youtube",
    url: "https://youtu.be/CEmbcJ_2oPA?si=aqTK4AvzdPw2yPXx",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/6efd0003-1620-480a-95d4-49bf1d429d89/thumbnails/Consulting%20With%20Stoney_tumb.0000000.jpg",
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
      "consultations",
      "nation",
      "stoney",
      "avenir",
      "terres",
      "aines",
      "utilisation",
      "territoire"
    ]
  }
};
