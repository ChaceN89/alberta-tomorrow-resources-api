/**
 * @file 40-IntoTheCold.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Into the cold video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-40g-into-the-cold";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const intoTheColdVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Into the cold",
    fr: "Dans le froid"
  },

  description: {
    en: "Dr. Ali Criscitiello takes us into the freezer of the Canadian Ice Core Lab.",
    fr: "Ali Criscitiello, Ph. D., nous amène dans le congélateur du Laboratoire canadien des carottes de glace."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=7cQbvb4l3Ro",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["cold","abglaciers","climatechange","abwater"],
    fr: ["dans","froid"]
  },
} satisfies VideoSource;
