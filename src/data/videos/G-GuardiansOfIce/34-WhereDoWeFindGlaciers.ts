/**
 * @file 34-WhereDoWeFindGlaciers.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the We find glaciers across all Alberta. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-34g-where-do-we-find-glaciers";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whereDoWeFindGlaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Where do we find glaciers?",
    fr: "Où trouvons-nous les glaciers?"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses where we find glaciers.",
    fr: "Ali Criscitiello, Ph. D., explique où se trouvent les glaciers."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=22vQm0cfKnI",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["find","glaciers","across","all","alberta","abglaciers","climatechange","abwater"],
    fr: ["trouve","des","glaciers","partout","alberta"]
  },
} satisfies VideoSource;
