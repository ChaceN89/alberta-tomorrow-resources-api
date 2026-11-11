/**
 * @file 08-StriationsOnTheRocks.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Striations. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-08g-striations-on-the-rocks";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const striationsOnTheRocksVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Striations on the Rocks",
    fr: "Stries sur les roches"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how glaciers can cause striations on rocks as they move.",
    fr: "Écoutez Peter Lemieux expliquer comment les glaciers peuvent causer des stries sur les roches quand ils se déplacent."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=sKF4M0v1GdM",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["striations","abglaciers","climatechange","abwater"],
    fr: ["des","stries","glaciaires"]
  },
} satisfies VideoSource;
