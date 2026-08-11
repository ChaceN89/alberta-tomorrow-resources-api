/**
 * @file 13-FoodAndCamp.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Food and Camp video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const foodAndCampVideo = {
  id: "stoney-13h-food-and-camp",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Food and Camp",
    fr: "Nourriture et camp"
  },

  description: {
    en: "How did the Stoney people survive off the land, especially in the winter?  Watch to find out.",
    fr: "Comment la nation Stoney survivait-elle à l’extérieur du territoire, surtout durant l’hiver? Regardez cette vidéo pour le découvrir."
  },

  media: {
    type: "youtube",
    url: "https://youtu.be/s1NAu1rTZzQ?si=8RolJGkfnYz5Bm06",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/1821b035-16d6-461d-ab1f-9341cd6124be/thumbnails/Food%20and%20Camp_tumb.0000000.jpg",
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
      "nourriture",
      "camp",
      "comment",
      "nation",
      "stoney",
      "survivait",
      "elle",
      "exterieur"
    ]
  }
};
