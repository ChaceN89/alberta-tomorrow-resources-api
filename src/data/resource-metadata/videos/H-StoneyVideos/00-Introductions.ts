/**
 * @file 00-Introductions.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Introductions video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-00h-introductions";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const introductionsVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Introductions: Meet our Elders",
    fr: "Présentations: Rencontrez nos aînés"
  },

  description: {
    en: "Meet the Elders from the Stoney Nakoda Nation who made this video series possible.",
    fr: "Rencontrez les aînés de la nation Stoney Nakoda qui ont rendu possible cette série de vidéos."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/E1vzAxvrgR4?si=vCtjAcHbtMPzJsNf",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    position: "top-center",
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
} satisfies VideoSource;
