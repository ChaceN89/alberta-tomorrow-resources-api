/**
 * @file 16-GreatDepression.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Great Depression video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-16h-great-depression";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const greatDepressionVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Great Depression",
    fr: "La Crise de 1929"
  },

  description: {
    en: "Elder Lawrence talks about the Stoney experience during the Great Depression.",
    fr: "L’aîné Lawrence parle de l’expérience des Stoney durant la Crise de 1929."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/57vkAX541xY?si=pygUdIJEajIdovUC",
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
      "crise",
      "1929",
      "aine",
      "lawrence",
      "parle",
      "experience",
      "stoney",
      "durant"
    ]
  }
} satisfies VideoSource;
