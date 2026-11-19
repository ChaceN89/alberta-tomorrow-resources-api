/**
 * @file 11-YamnuskaMeaning.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Yamnuska Meaning video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-11h-yamnuska-meaning";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const yamnuskaMeaningVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "How did Mount Yamnuska get its name?",
    fr: "Comment le mont Yamnuska a-t-il reçu son nom?"
  },

  description: {
    en: "Learn how this iconic mountain in the Alberta Rocky Mountains got its name.",
    fr: "Apprenez comment cette montagne iconique des montagnes Rocheuses de l’Alberta s’est valu son nom."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/GX0PKaCqJiI?si=lL2dqXTkoa-tjh3r",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    position: "top-center",
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
      "signification",
      "yamnuska",
      "apprenez",
      "comment",
      "cette",
      "montagne",
      "iconique",
      "montagnes"
    ]
  }
} satisfies VideoSource;
