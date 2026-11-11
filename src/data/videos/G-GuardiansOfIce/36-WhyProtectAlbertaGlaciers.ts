/**
 * @file 36-WhyProtectAlbertaGlaciers.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Maybe one of the most important reasons that I can think of, is that glaciers impact people very directly. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-36g-why-protect-alberta-glaciers";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whyProtectAlbertaGlaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Why protect Alberta glaciers?",
    fr: "Pourquoi protéger les glaciers de l’Alberta?"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses why it is important to protect Alberta Glaciers.",
    fr: "Ali Criscitiello, Ph. D., explique pourquoi il est important de protéger les glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=PUJYQnJx3tY",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["maybe","one","most","important","reasons","can","think","glaciers"],
    fr: ["une","des","raisons","les","plus","importantes","auxquelles","peux"]
  },
} satisfies VideoSource;
