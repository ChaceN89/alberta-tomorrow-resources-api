/**
 * @file 27-AccessToLandSibbaldFlats.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Access To Land - Sibbald Flats video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "stoney-27h-access-to-land";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const accessToLandSibbaldFlatsVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Access To Land - Sibbald Flats",
    fr: "Accès aux terres - Sibbald Flats"
  },

  description: {
    en: "Listen to Elders talk about the importance of the Sibbald Flats for hunting, collecting berries and traditional uses and the incompatibility with some other land uses.",
    fr: "Écoutez les aînés parler de l’importance des Sibbald Flats pour la chasse, la cueillette de petits fruits et les utilisations traditionnelles, et de l’incompatibilité avec certaines autres utilisations du territoire."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=4ZixFCSIMww",
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
      "acces",
      "terres",
      "sibbald",
      "flats",
      "ecoutez",
      "aines",
      "parler",
      "importance"
    ]
  }
} satisfies VideoSource;
