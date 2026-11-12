/**
 * @file 01-HumanPopulation.ts
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Human Population video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "soc-01d-human-population";
const videoAssets = getVideoAssetPaths(VideoCategory.SOCIO_ECONOMIC_INDICATORS.id, videoId);

export const humanPopulationVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Human Population",
    fr: "Population humaine"
  },

  description: {
    en: "Maximum population growth is assumed to be a doubling of the population. Learn more about Alberta's projected population and land use impacts.",
    fr: "On présume que la croissance maximale de la population représenterait le double de la population actuelle. Apprenez-en davantage au sujet des impacts prévus causés par la population et l’utilisation des terres en Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=BOBc-sv-qJw",
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
      "ab population",
      "exponential population growth",
      "ab growth",
      "land use"
    ],

    fr: [
      "population alberta",
      "croissance exponentielle de la population",
      "croissance alberta",
      "utilisation des terres"
    ]
  },
} satisfies VideoSource;
