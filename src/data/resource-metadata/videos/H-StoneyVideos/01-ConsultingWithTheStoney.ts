/**
 * @file 01-ConsultingWithTheStoney.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Consulting With The Stoney video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-01h-consulting-with-the-stoney";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const consultingWithTheStoneyVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Consulting With The Stoney",
    fr: "Consultations avec la nation Stoney"
  },

  description: {
    en: "The Stoney people want to be included in discussions about the future of Stoney lands. Listen to Elders talk about what they use the land for.",
    fr: "La nation Stoney veut faire partie des discussions concernant l’avenir des terres des Stoney. Écoutez les aînés parler de l’utilisation qu’ils faisaient autrefois du territoire."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/CEmbcJ_2oPA?si=aqTK4AvzdPw2yPXx",
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
      "consultations",
      "nation",
      "stoney",
      "avenir",
      "terres",
      "aines",
      "utilisation",
      "territoire"
    ]
  }
} satisfies VideoSource;
