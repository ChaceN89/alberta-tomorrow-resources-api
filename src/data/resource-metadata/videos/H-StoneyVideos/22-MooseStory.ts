/**
 * @file 22-MooseStory.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Moose Story video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-22h-moose-story";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const mooseStoryVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Moose Story",
    fr: "Histoire de l’orignal"
  },

  description: {
    en: "Moose Habitat is reduced by industrial development and proximity to human activity. This video explores how habitat value is calculated in Alberta Tomorrow.",
    fr: "L’habitat de l’orignal est réduit par le développement industriel et la proximité des activités humaines. Cette vidéo explique comment la valeur de l’habitat est calculée dans Alberta Tomorrow."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/rb0WIzUHnYw?si=r438JuVzkL4PxsaR",
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
      "histoire",
      "orignal",
      "territoire",
      "stoney",
      "autant",
      "avait",
      "autrefois"
    ]
  }
} satisfies VideoSource;
