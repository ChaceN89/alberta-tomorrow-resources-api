/**
 * @file 07-CanadaTomorrow.ts
 * @module Data/Videos/AlbertaTomorrowPlatform
 * @desc Contains localized metadata for Canada Tomorrow.
 *
 * @author Chace Nielson
 * @created Nov 13, 2026
 * @updated Nov 13, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "atp-07x-canada-tomorrow";
const videoAssets = getVideoAssetPaths(VideoCategory.ALBERTA_TOMORROW_PLATFORM.id, videoId);

export const canadaTomorrowVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ALBERTA_TOMORROW_PLATFORM.id,

  title: {
    en: "Canada Tomorrow",
    fr: "Canada Tomorrow"
  },

  description: {
    en: "An introduction to Canada Tomorrow.",
    fr: "Une présentation de Canada Tomorrow."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=vRLmJ_2zab0",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },

  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: null
  },

  searchTerms: {
    en: [
      "canada tomorrow",
      "land-use planning",
      "future planning"
    ],
    fr: [
      "canada tomorrow",
      "aménagement du territoire",
      "planification de l’avenir"
    ]
  }
} satisfies VideoSource;
