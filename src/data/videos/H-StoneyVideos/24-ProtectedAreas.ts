/**
 * @file 24-ProtectedAreas.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Protected Areas video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "stoney-24h-protected-areas";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const protectedAreasVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Protected Areas",
    fr: "Aires protégées"
  },

  description: {
    en: "The Sibbald area is an area used for camping and recreation but does that compatible with the Stoney Traditional Land Uses?",
    fr: "La région Sibbald sert aujourd’hui pour le camping et les activités récréatives, mais est-ce compatible avec les utilisations des terres traditionnelles des Stoney?"
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/IuvVMb1y0oU?si=mka-5Q1s3IP_kDPU",
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
      "aires",
      "protegees",
      "region",
      "sibbald",
      "sert",
      "aujourd",
      "hui",
      "camping"
    ]
  }
} satisfies VideoSource;
