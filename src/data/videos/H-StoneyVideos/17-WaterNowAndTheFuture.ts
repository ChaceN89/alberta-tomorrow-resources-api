/**
 * @file 17-WaterNowAndTheFuture.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Water - Now and The Future video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "stoney-17h-water-now-and-future";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const waterNowAndTheFutureVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Water — For Now and for the Future",
    fr: "L’eau — pour aujourd’hui et pour l’avenir"
  },

  description: {
    en: "Listen to Elder Margaret talk about the importance of Water to the Stoney People and to everyone.",
    fr: "Écoutez l’aînée Margaret expliquer l’importance de l’eau pour la nation Stoney et pour toute la population."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=oG-PuCO-h7I&list=PLvZi8sQT8o8MTHACtzLmHa69Eln1AiDsn",
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
      "eau",
      "aujourd",
      "hui",
      "futur",
      "ecoutez",
      "ainee",
      "margaret",
      "expliquer"
    ]
  }
} satisfies VideoSource;
