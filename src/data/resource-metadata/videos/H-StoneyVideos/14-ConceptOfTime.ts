/**
 * @file 14-ConceptOfTime.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Concept of Time video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-14h-concept-of-time";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const conceptOfTimeVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "The Concept of Time",
    fr: "Le concept du temps"
  },

  description: {
    en: "Travis talks about differences in the concept of time. The oral tradition says \"Back in time\".  Stoney used the surroundings and animals to tell time, seasons and the weather. \"The Sky was the clock, the moon, the stars.\"",
    fr: "Travis parle des différences en matière de concept du temps. La tradition orale dit « Dans le temps ». Les Stoney se servaient de l’environnement et des animaux comme calendrier, des saisons et de la température. « Le ciel était notre montre, la lune, les étoiles »."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=8Rxut4EAyYg",
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
      "concept",
      "temps",
      "travis",
      "parle",
      "differences",
      "matiere",
      "tradition",
      "orale"
    ]
  }
} satisfies VideoSource;
