/**
 * @file 28-Introductions.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Introductions video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const introductionsVideo = {
  id: "stoney-28h-introductions",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Introductions",
    fr: "Présentations"
  },

  description: {
    en: "Meet the Elders from the Stoney Nakoda Nation who made this video series possible.",
    fr: "Rencontrez les aînés de la nation Stoney Nakoda qui ont rendu possible cette série de vidéos."
  },

  media: {
    type: "youtube",
    url: "https://youtu.be/E1vzAxvrgR4?si=vCtjAcHbtMPzJsNf",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/0b286b2d-05fe-4d19-b923-da03d9afd668/thumbnails/Introductions_tumb.0000001.jpg",
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
      "presentations",
      "rencontrez",
      "aines",
      "nation",
      "stoney",
      "nakoda",
      "ont",
      "rendu"
    ]
  }
};
