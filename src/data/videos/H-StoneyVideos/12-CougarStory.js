/**
 * @file 12-CougarStory.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Cougar Story video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const cougarStoryVideo = {
  id: "stoney-12h-cougar-story",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Cougar Story",
    fr: "Histoire de la montagne Cougar"
  },

  description: {
    en: "Elder Lawrence talks about how Cougar Mountain got its name.",
    fr: "L’aîné Lawrence explique ce qui a valu son nom à la montagne Cougar."
  },

  media: {
    type: "youtube",
    url: "https://youtu.be/9269H-WWRBg?si=DX65Ftlw44R5YvbW",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/ea8539b2-f1e7-4b50-bd6b-b41af7d06c94/thumbnails/Cougar%20Story_tumb.0000000.jpg",
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
      "histoire",
      "montagne",
      "cougar",
      "aine",
      "lawrence",
      "explique",
      "valu",
      "son"
    ]
  }
};
