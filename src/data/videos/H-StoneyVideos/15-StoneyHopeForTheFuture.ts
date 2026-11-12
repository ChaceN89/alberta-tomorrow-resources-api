/**
 * @file 15-StoneyHopeForTheFuture.ts
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
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "stoney-15h-stoney-hope-for-the-future";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const stoneyHopeForTheFutureVideo = {
  id: videoId,

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
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=UpJUo8M5Bck",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
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
} satisfies VideoSource;
