/**
 * @file 13-FoodAndCamp.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Food and Camp video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-13h-food-and-camp";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const foodAndCampVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Food and Camp",
    fr: "Nourriture et camp"
  },

  description: {
    en: "How did the Stoney people survive off the land, especially in the winter?  Watch to find out.",
    fr: "Comment la nation Stoney survivait-elle à l’extérieur du territoire, surtout durant l’hiver? Regardez cette vidéo pour le découvrir."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/s1NAu1rTZzQ?si=8RolJGkfnYz5Bm06",
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
      "nourriture",
      "camp",
      "comment",
      "nation",
      "stoney",
      "survivait",
      "elle",
      "exterieur"
    ]
  }
} satisfies VideoSource;
