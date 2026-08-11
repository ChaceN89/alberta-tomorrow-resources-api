/**
 * @file 22-MooseStory.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Moose Story video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const mooseStoryVideo = {
  id: "stoney-22h-moose-story",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Moose Story",
    fr: "Histoire de l’orignal"
  },

  description: {
    en: "Moose in Stoney Territory. Are there as many now as there were in the past?",
    fr: "L’orignal sur le territoire des Stoney. Y en a-t-il autant qu’il y en avait autrefois?"
  },

  media: {
    type: "youtube",
    url: "https://youtu.be/rb0WIzUHnYw?si=r438JuVzkL4PxsaR",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/18212f4c-ba95-443b-9a9c-8cea0186f22a/thumbnails/Moose%20Story_tumb.0000000.jpg",
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
      "orignal",
      "territoire",
      "stoney",
      "autant",
      "avait",
      "autrefois"
    ]
  }
};
