/**
 * @file 23-LandUseAndWildlife.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Land Use and Wildlife video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-23h-land-use-and-wildlife";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const landUseAndWildlifeVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Land Use and Wildlife",
    fr: "Utilisation des terres et animaux sauvages"
  },

  description: {
    en: "Travis talks about how wildlife populations have changed on Stoney territory and what needs to be done to protect from further loss. \"We are coming into the home of the four legged and winged ones and need to be mindful of what we're doing\".",
    fr: "Travis explique comment les populations d’animaux sauvages ont changé sur le territoire des Stoney et ce qui doit être fait pour les protéger et éviter d’autres pertes. « Nous entrons sur le territoire des animaux ailés et à quatre pattes et nous devons faire attention à ce que nous y faisons. »"
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/d_wKqUZMaTk?si=3dnMMNcSOKg8pW5X",
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
      "utilisation",
      "terres",
      "animaux",
      "sauvages",
      "travis",
      "explique",
      "comment",
      "populations"
    ]
  }
} satisfies VideoSource;
