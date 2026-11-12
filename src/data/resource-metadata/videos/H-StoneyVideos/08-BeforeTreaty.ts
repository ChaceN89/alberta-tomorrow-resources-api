/**
 * @file 08-BeforeTreaty.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Before Treaty video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-08h-before-treaty";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const beforeTreatyVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Before Treaty",
    fr: "Avant le Traité"
  },

  description: {
    en: "Elder Margaret is asked to describe the Stoney people before Treaty was signed.",
    fr: "On demande à l’aînée Margaret de décrire la nation Stoney avant la signature du Traité."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/tuNheHwbU7c?si=uTlYq-LqELvWmpuf",
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
      "avant",
      "traite",
      "demande",
      "ainee",
      "margaret",
      "decrire",
      "nation",
      "stoney"
    ]
  }
} satisfies VideoSource;
