/**
 * @file 05-HowDoForestFiresAffectGlaciers.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Any kind of dirt that you find on the surface is going to accelerate melting. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-05g-how-do-forest-fires-affect-glaciers";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const howDoForestFiresAffectGlaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How do Forest Fires Affect Glaciers",
    fr: "Comment les feux de forêt agissent sur les glaciers"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how summer forest fires affect the glaciers.",
    fr: "Écoutez Peter Lemieux expliquer comment les feux de forêt l’été agissent sur les glaciers."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=LkkeMC8VhnA",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["any", "kind", "dirt", "you", "find", "surface", "going", "accelerate"],
    fr: ["toute", "forme", "salete", "debris", "presente", "surface", "accelerer", "fonte"]
  },
} satisfies VideoSource;
