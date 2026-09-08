/**
 * @file 20-Tornado.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Tornado video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const tornadoVideo = {
  id: "stoney-20h-tornado",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Tornado",
    fr: "Tornade"
  },

  description: {
    en: "Travis talks about how he was taught to survive a Tornado on Stoney territory.",
    fr: "Travis explique comment on lui a appris à survivre à une tornade sur le territoire des Stoney."
  },

  media: {
    type: "youtube",
    url: "https://youtu.be/Yhx8ylh81EM?si=gPY1Fj7h65WvWSk1",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/5d37a660-4f5b-40b7-badc-9bbf98077e92/thumbnails/Tornado_tumb.0000000.jpg",
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
      "tornade",
      "travis",
      "explique",
      "comment",
      "lui",
      "appris",
      "survivre",
      "territoire"
    ]
  }
};
