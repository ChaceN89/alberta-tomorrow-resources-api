/**
 * @file 11-YamnuskaMeaning.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Yamnuska Meaning video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const yamnuskaMeaningVideo = {
  id: "stoney-11h-yamnuska-meaning",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Yamnuska Meaning",
    fr: "Signification de Yamnuska"
  },

  description: {
    en: "Lean how this iconic mountain in the Alberta Rocky Mountains got it's name.",
    fr: "Apprenez comment cette montagne iconique des montagnes Rocheuses de l’Alberta s’est valu son nom."
  },

  media: {
    type: "youtube",
    url: "https://youtu.be/GX0PKaCqJiI?si=lL2dqXTkoa-tjh3r",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/6735981d-73e2-4ca4-8239-31f2a45921d5/thumbnails/Yamnuska%20Meaning_tumb.0000000.jpg",
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
      "signification",
      "yamnuska",
      "apprenez",
      "comment",
      "cette",
      "montagne",
      "iconique",
      "montagnes"
    ]
  }
};
