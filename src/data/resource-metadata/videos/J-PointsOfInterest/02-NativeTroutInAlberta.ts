/**
 * @file 02-NativeTroutInAlberta.ts
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Native Trout in Alberta video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "poi-02j-native-trout-in-alberta";
const videoAssets = getVideoAssetPaths(VideoCategory.POINTS_OF_INTEREST.id, videoId);

export const nativeTroutInAlbertaVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Native Trout in Alberta",
    fr: "Truites indigènes de l’Alberta"
  },

  description: {
    en: "Watch this recording of a LiveStream presented by CPAWS SAB, Trout Unlimited and Cows and Fish to learn about Native Trout in Alberta.",
    fr: "Regardez cet enregistrement d’une diffusion en direct présentée par CPAWS SAB, Trout Unlimited et Cows and Fish pour en apprendre davantage sur les truites indigènes de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=lztrWhXpnHg",
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
      "water-quality",
      "native-trout",
      "cpaws",
      "trout-unlimited",
      "recreation",
      "agriculture"
    ],
    fr: ["qualité de l’eau", "truites indigènes", "CPAWS", "Trout Unlimited", "loisirs", "agriculture"]
  }
} satisfies VideoSource;
