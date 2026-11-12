/**
 * @file 04-FishHabitat.ts
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Fish Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "env-04c-fish-habitat";
const videoAssets = getVideoAssetPaths(VideoCategory.ENVIRONMENTAL_INDICATORS.id, videoId);

export const fishHabitatVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Fish Habitat",
    fr: "Habitat du poisson"
  },

  description: {
    en: "Discover how land use affects fish community health, from native trout populations to the impacts of angling and habitat disturbance.",
    fr: "Découvrez comment les utilisations des terres nuisent à la santé des communautés de poissons, des populations de truites indigènes aux impacts de la pêche sportive et de la perturbation de l’habitat."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=oti7o8JS62Q",
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
      "ab fish",
      "fish habitat",
      "ab water",
      "ab trout",
      "native trout"
    ],

    fr: [
      "poissons alberta",
      "habitat du poisson",
      "eau alberta",
      "truite alberta",
      "truite indigene"
    ]
  },
} satisfies VideoSource;
