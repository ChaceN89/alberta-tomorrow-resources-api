/**
 * @file 17-WaterNowAndTheFuture.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Water - Now and The Future video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const waterNowAndTheFutureVideo = {
  id: "stoney-17h-water-now-and-future",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Water - Now and The Future",
    fr: "Eau – aujourd’hui et dans le futur"
  },

  description: {
    en: "Listen to Elder Margaret talk about the importance of Water to the Stoney People and to everyone.",
    fr: "Écoutez l’aînée Margaret expliquer l’importance de l’eau pour la nation Stoney et pour toute la population."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=oG-PuCO-h7I&list=PLvZi8sQT8o8MTHACtzLmHa69Eln1AiDsn",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/91762971-98d6-4e2a-91d0-8cce43dfb69f/thumbnails/Water%20-%20now%20and%20future_tumb.0000000.jpg",
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
      "eau",
      "aujourd",
      "hui",
      "futur",
      "ecoutez",
      "ainee",
      "margaret",
      "expliquer"
    ]
  }
};
