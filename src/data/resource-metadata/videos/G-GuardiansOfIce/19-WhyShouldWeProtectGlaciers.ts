/**
 * @file 19-WhyShouldWeProtectGlaciers.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the You know in Canada but all around the world we value fresh water more and more. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-19g-why-should-we-protect-glaciers";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whyShouldWeProtectGlaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Why should we protect glaciers?",
    fr: "Pourquoi devrions-nous protéger les glaciers?"
  },

  description: {
    en: "Watch as Peter Lemieux discusses why it is so important to protect our glaciers.",
    fr: "Écoutez Peter Lemieux expliquer pourquoi il est si important de protéger nos glaciers."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=LKtGm_ZxZyU",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["you","know","canada","but","all","around","world","value"],
    fr: ["canada","comme","partout","dans","monde","nous","accordons","une"]
  },
} satisfies VideoSource;
