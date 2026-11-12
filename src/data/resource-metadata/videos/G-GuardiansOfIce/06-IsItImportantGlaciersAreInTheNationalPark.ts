/**
 * @file 06-IsItImportantGlaciersAreInTheNationalPark.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the All of these uses of the land are great and essential. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-06g-is-it-important-glaciers-are-in-the-national-park";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const isItImportantGlaciersAreInTheNationalParkVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Is it important glaciers are in the national park?",
    fr: "Est-ce important que les glaciers soient dans les parcs nationaux?"
  },

  description: {
    en: "Listen to Peter Lemieux discuss why it's important to have glaciers protected in National Parks.",
    fr: "Écoutez Peter Lemieux expliquer pourquoi il est important que les glaciers soient protégés à l’intérieur des parcs nationaux."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Deu0HjSCzuM",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["all","these","uses","land","great","essential","abglaciers","climatechange"],
    fr: ["toutes","ces","utilisations","territoire","sont","importantes","essentielles"]
  },
} satisfies VideoSource;
