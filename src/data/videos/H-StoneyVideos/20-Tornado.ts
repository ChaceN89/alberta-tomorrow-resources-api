/**
 * @file 20-Tornado.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Tornado video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "stoney-20h-tornado";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const tornadoVideo = {
  id: videoId,

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
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/Yhx8ylh81EM?si=gPY1Fj7h65WvWSk1",
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
} satisfies VideoSource;
