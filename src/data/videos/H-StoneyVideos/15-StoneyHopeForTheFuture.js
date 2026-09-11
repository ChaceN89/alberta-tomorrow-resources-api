/**
 * @file 15-StoneyHopeForTheFuture.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Stoney Hope for the Future video.
 *
 * @author Chace Nielson
 * @created Sep 10, 2026
 * @updated Sep 10, 2026
 *
 * @dependencies VideoCategory, Language
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const stoneyHopeForTheFutureVideo = {
  id: "stoney-15h-stoney-hope-for-the-future",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Hope for the Future",
    fr: "L’espoir pour l’avenir"
  },

  description: {
    en: "What is your hope for the future?",
    fr: "Qu’espérez-vous pour l’avenir?"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=UpJUo8M5Bck",
    thumbnailUrl: "https://img.youtube.com/vi/UpJUo8M5Bck/hqdefault.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "indigenousstories",
      "stoneynakoda",
      "indigenouslanduse",
      "morley",
      "landuse",
      "alberta",
      "stoneyvoices",
      "traditionallanduse",
      "hope",
      "future"
    ],
    fr: [
      "stoney",
      "nakoda",
      "nation",
      "autochtones",
      "espoirs",
      "avenir",
      "futur",
      "territoire",
      "utilisation traditionnelle des terres"
    ]
  }
};