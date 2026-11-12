/**
 * @file 02-MooseHabitat.ts
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Moose Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "ind-02e-moose-habitat";
const videoAssets = getVideoAssetPaths(VideoCategory.INDIGENOUS_INDICATORS.id, videoId);

export const mooseHabitatVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Moose Habitat",
    fr: "Habitat de l’orignal"
  },

  description: {
    en: "Moose Habitat is reduced by industrial development and proximity to human activity. This video explores how habitat value is calculated in Alberta Tomorrow.",
    fr: "L’habitat de l’orignal est réduit par le développement industriel et la proximité avec les activités humaines. Cette vidéo explore comment la valeur de l’habitat est calculée dans Alberta Tomorrow."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=rb0WIzUHnYw",
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
      "moose",
      "habitat",
      "wildlife",
      "land use"
    ],

    fr: [
      "orignal",
      "habitat",
      "faune",
      "utilisation des terres"
    ]
  },
} satisfies VideoSource;
