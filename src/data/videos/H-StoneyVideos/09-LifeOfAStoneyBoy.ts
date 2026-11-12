/**
 * @file 09-LifeOfAStoneyBoy.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Life Of A Stoney Boy video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "stoney-09h-life-of-a-stoney-boy";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const lifeOfAStoneyBoyVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Life of a Stoney Boy",
    fr: "la vie d’un jeune garçon de la nation Stoney"
  },

  description: {
    en: "Listen to Elder Terry tell a story from his youth.",
    fr: "Écoutez l’aîné Terry raconter une histoire de sa jeunesse."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/2CaTbIIOHNE?si=yevh87KVNQY-uCua",
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
      "vie",
      "jeune",
      "garcon",
      "nation",
      "stoney",
      "ecoutez",
      "aine",
      "terry"
    ]
  }
} satisfies VideoSource;
