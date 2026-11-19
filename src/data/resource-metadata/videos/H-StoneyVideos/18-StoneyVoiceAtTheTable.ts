/**
 * @file 18-StoneyVoiceAtTheTable.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Stoney Voice At The Table video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-18h-stoney-voice-at-table";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const stoneyVoiceAtTheTableVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Stoney Voice At The Table",
    fr: "Voix de la nation Stoney à la table"
  },

  description: {
    en: "Land Use planning in Alberta needs to include a Stoney Voice.",
    fr: "Un porte-parole de la nation des Stoney doit prendre part à la planification de l’utilisation des terres en Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/kuFB4CrTufw?si=rVjuYL9xCxY5HwVm",
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
      "voix",
      "nation",
      "stoney",
      "table",
      "porte",
      "parole",
      "doit",
      "prendre"
    ]
  }
} satisfies VideoSource;
