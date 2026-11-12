/**
 * @file 07-ReacclimatizingInTheSibbald.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Reclimatizing in the Sibbald video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-07h-reacclimatizing";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const reacclimatizingInTheSibbaldVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Reacclimatizing in the Sibbald Area",
    fr: "Se réacclimater dans la région de Sibbald"
  },

  description: {
    en: "Travis discusses how the Sibbald area was used by the Stoney people to reacclimatize back to Mountain elevations after travelling south.",
    fr: "Travis explique que la nation Stoney utilisait la région de Sibbald pour se réacclimater à l’altitude des montagnes après avoir voyagé au Sud."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=XQv_Gy_gpWo",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "indigenousstories",
      "stoneynakoda",
      "indigenouslanduse",
      "morley",
      "landuse",
      "abwater",
      "alberta",
      "stoneyvoices",
      "traditionallanduse"
    ],
    fr: [
      "reacclimater",
      "region",
      "sibbald",
      "travis",
      "explique",
      "nation",
      "stoney",
      "utilisait"
    ]
  }
} satisfies VideoSource;
