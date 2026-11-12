/**
 * @file 35-WhyAreAlbertaGlaciersImportant.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Glaciers are important for tons of different reasons. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-35g-why-are-alberta-glaciers-important";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whyAreAlbertaGlaciersImportantVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Why are Alberta glaciers important?",
    fr: "Pourquoi les glaciers de l’Alberta sont-ils importants?"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses the importance of Alberta Glaciers.",
    fr: "Ali Criscitiello, Ph. D., parle de l’importance des glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=HOhflZn8cqo",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["glaciers","important","tons","different","reasons","abglaciers","climatechange","abwater"],
    fr: ["les","glaciers","sont","importants","pour","tres","nombreuses","raisons"]
  },
} satisfies VideoSource;
