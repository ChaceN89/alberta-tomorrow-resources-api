/**
 * @file 07-ReacclimatizingInTheSibbald.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Reclimatizing in the Sibbald video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const reacclimatizingInTheSibbaldVideo = {
  id: "stoney-07h-reacclimatizing",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Reacclimatizing in the Sibbald",
    fr: "Se réacclimater dans la région de Sibbald"
  },

  description: {
    en: "Travis discusses how the Sibbald area was used by the Stoney people to reacclimatize back to Mountain elevations after travelling south.",
    fr: "Travis explique que la nation Stoney utilisait la région de Sibbald pour se réacclimater à l’altitude des montagnes après avoir voyagé au Sud."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=XQv_Gy_gpWo",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/b88daa80-37fc-4079-869a-7f9f5a0fdb96/thumbnails/Reclimatizing_tumb.0000000.jpg",
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
      "reacclimater",
      "region",
      "sibbald",
      "travis",
      "explique",
      "nation",
      "stoney",
      "utilisait"
    ]
  }
};
