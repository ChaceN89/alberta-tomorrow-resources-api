/**
 * @file 12-CougarStory.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Cougar Story video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "stoney-12h-cougar-story";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const cougarStoryVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "The Cougars of Cougar Mountain",
    fr: "Les couguars de la montagne Cougar"
  },

  description: {
    en: "Elder Lawrence talks about how Cougar Mountain got its name.",
    fr: "L’aîné Lawrence explique ce qui a valu son nom à la montagne Cougar."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/9269H-WWRBg?si=DX65Ftlw44R5YvbW",
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
} satisfies VideoSource;
