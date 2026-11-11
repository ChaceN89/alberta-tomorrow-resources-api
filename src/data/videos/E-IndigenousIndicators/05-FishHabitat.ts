/**
 * @file 05-FishHabitat.ts
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Fish Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "ind-05e-fish-habitat";
const videoAssets = getVideoAssetPaths(VideoCategory.INDIGENOUS_INDICATORS.id, videoId);

export const fishHabitatVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Fish Habitat",
    fr: "Habitat du poisson"
  },

  description: {
    en: "Healthy fish habitat means diverse native species and fewer disturbances. This video highlights habitat importance to Indigenous communities.",
    fr: "Un habitat du poisson en santé se définit par des espèces indigènes diversifiées et moins de perturbations. Cette vidéo souligne l’importance de l’habitat pour les communautés autochtones."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=oti7o8JS62Q",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "ab fish",
      "fish habitat",
      "native trout",
      "indigenous values"
    ],

    fr: [
      "poissons alberta",
      "habitat du poisson",
      "truite indigene",
      "valeurs autochtones"
    ]
  },
} satisfies VideoSource;
