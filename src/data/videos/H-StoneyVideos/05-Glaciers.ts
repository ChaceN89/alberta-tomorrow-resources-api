/**
 * @file 05-Glaciers.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Glaciers video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "stoney-05h-glaciers";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const glaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "A Perspective on Glaciers",
    fr: "Un regard sur les glaciers"
  },

  description: {
    en: "Elder Margaret talks about her experience on the Columbia Ice field and what she thinks should be done.",
    fr: "L’aînée Margaret raconte son expérience sur le champ de glace Columbia et explique ce qu’on devrait faire selon elle."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/IxZgkmJnYrw?si=2haLY-beyIpsZQ5W",
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
      "glaciers",
      "ainee",
      "margaret",
      "raconte",
      "son",
      "experience",
      "champ",
      "glace"
    ]
  }
} satisfies VideoSource;
