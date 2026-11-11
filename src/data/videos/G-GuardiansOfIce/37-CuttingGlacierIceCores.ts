/**
 * @file 37-CuttingGlacierIceCores.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Cutting Glacier Ice Cores video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-37g-cutting-glacier-ice-cores";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const cuttingGlacierIceCoresVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Cutting Glacier Ice Cores",
    fr: "Coupe de carottes de glace prélevées dans les glaciers"
  },

  description: {
    en: "Cutting Ice Cores at the Canadian Ice Core Lab",
    fr: "Coupe de carottes de glace au Laboratoire canadien des carottes de glace."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=VLaZWe8nACs",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["cutting","glacier","ice","cores","abglaciers","climatechange","abwater"],
    fr: ["coupe","carottes","glace","prelevees","dans","les","glaciers"]
  },
} satisfies VideoSource;
