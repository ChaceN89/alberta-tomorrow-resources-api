/**
 * @file 10-BringingBackTheBison.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Bringing Back the Bison video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "stoney-10h-bringing-back-the-bison";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const bringingBackTheBisonVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Bringing Back the Bison",
    fr: "Ramener le bison"
  },

  description: {
    en: "Travis talks about reintroducing Bison back on the landscape.",
    fr: "Travis parle de la réintroduction du bison sur le territoire."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/Y5ib6lh4HLE?si=p3HpiNYvKy9rFqPT",
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
      "ramener",
      "bison",
      "travis",
      "parle",
      "reintroduction",
      "territoire"
    ]
  }
} satisfies VideoSource;
