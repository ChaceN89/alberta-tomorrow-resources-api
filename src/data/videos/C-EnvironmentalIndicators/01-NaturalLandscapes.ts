/**
 * @file 01-NaturalLandscapes.ts
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Natural Landscapes video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "env-01c-natural-landscapes";
const videoAssets = getVideoAssetPaths(VideoCategory.ENVIRONMENTAL_INDICATORS.id, videoId);

export const naturalLandscapesVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Natural Landscapes",
    fr: "Paysages naturels"
  },

  description: {
    en: "Explore Alberta’s natural regions and their diverse ecosystems, from grasslands and boreal forests to mountains and wetlands.",
    fr: "Découvrez les régions naturelles de l’Alberta dans cette vidéo. Apprenez-en davantage sur les caractéristiques de chaque région ainsi que sur les types d’utilisation des terres dans chacune d’elles."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Lx94jZ9ZSBY",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "land use",
      "ab natural landscapes",
      "ab ecoregions"
    ],

    fr: [
      "utilisation des terres",
      "paysages naturels alberta",
      "ecoregions alberta"
    ]
  },
} satisfies VideoSource;
