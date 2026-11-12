/**
 * @file 02-CementFactory.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Cement Factory video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-02h-cement-factory";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const cementFactoryVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "The Cement Factory",
    fr: "La cimenterie"
  },

  description: {
    en: "The Cement factory has been around for a long time. Listen to Elder Lawrence talk about how Exshaw got it's name and the impact of the plant on the Stoney people.",
    fr: "La cimenterie existe depuis très longtemps. Écoutez l’aîné Lawrence expliquer ce qui a valu son nom à Exshaw et l’impact de l’usine sur la nation Stoney."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/KFbHx-jduws?si=IpEgy6vTFzxCDL-u",
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
      "cimenterie",
      "existe",
      "depuis",
      "tres",
      "longtemps",
      "ecoutez",
      "aine",
      "lawrence"
    ]
  }
} satisfies VideoSource;
