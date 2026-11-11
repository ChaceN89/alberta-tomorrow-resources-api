/**
 * @file 21-UsingTheLand.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Using The Land video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "stoney-21h-using-the-land";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const usingTheLandVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Using The Land",
    fr: "Utiliser les terres"
  },

  description: {
    en: "Listen to Stoney Elders discuss gathering food and medicines, hunting, and passing on cultural knowledge through camps on the land. Learn how recreation and cattle grazing affect these traditional practices.",
    fr: "Écoutez les aînés de la nation Stoney parler de la cueillette de nourriture et de plantes médicinales, de la chasse et de la transmission des savoirs culturels lors de camps sur le territoire. Découvrez comment les activités récréatives et le pâturage du bétail influencent ces pratiques traditionnelles."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/yz52Ysp_meQ?si=2uYyt4W4Qjq31z2N",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
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
      "utiliser",
      "terres",
      "ecoutez",
      "aines",
      "parler",
      "utilisation",
      "faisaient",
      "stoney"
    ]
  }
} satisfies VideoSource;
