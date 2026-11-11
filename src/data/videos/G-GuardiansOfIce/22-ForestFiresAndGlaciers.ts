/**
 * @file 22-ForestFiresAndGlaciers.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the It does a couple of things. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-22g-forest-fires-and-glaciers";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const forestFiresAndGlaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Forest Fires and Glaciers",
    fr: "Feux de forêt et glaciers"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses the effects of forest fires on Alberta Glaciers.",
    fr: "Ali Criscitiello, Ph. D., parle des effets des feux de forêt sur les glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=f2wUf95774k",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["couple","things","abglaciers","climatechange","abwater"],
    fr: ["cela","plusieurs","effets"]
  },
} satisfies VideoSource;
