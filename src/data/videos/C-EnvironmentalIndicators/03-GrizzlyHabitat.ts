/**
 * @file 03-GrizzlyHabitat.ts
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Grizzly Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "env-03c-grizzly-habitat";
const videoAssets = getVideoAssetPaths(VideoCategory.ENVIRONMENTAL_INDICATORS.id, videoId);

export const grizzlyHabitatVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Grizzly Habitat",
    fr: "Habitat du grizzli"
  },

  description: {
    en: "Learn how forest development and human activity affect the suitability of grizzly bear habitat across Alberta.",
    fr: "Apprenez comment le développement forestier et les activités humaines nuisent à l’habitat convenant au grizzli partout en Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=4wxOOhpNRhs",
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
      "grizzly bear habitat",
      "ab wildlife",
      "ab grizzlies",
      "land use",
      "threatened species"
    ],

    fr: [
      "habitat du grizzli",
      "faune alberta",
      "grizzlis alberta",
      "utilisation des terres",
      "espece menacee"
    ]
  },
} satisfies VideoSource;
