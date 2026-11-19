/**
 * @file 02-CaribouHabitat.ts
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Caribou Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "env-02c-caribou-habitat";
const videoAssets = getVideoAssetPaths(VideoCategory.ENVIRONMENTAL_INDICATORS.id, videoId);

export const caribouHabitatVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Caribou Habitat",
    fr: "Habitat du caribou"
  },

  description: {
    en: "Explore how caribou habitat is impacted by human development and how best practices can reduce disturbances in their environment.",
    fr: "Voyez l’effet du développement humain sur l’habitat du caribou et comment les bonnes pratiques peuvent réduire les perturbations dans leur environnement. "
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=xiBz_Vov6H0",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },

  subtitles: {
    en: videoAssets.file("en.vtt"), // ex https://d2qcvmovr4fv.cloudfront.net/subtitles/caribou-habitat-en.vtt
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "caribou habitat",
      "ab caribou",
      "woodland caribou",
      "threatened species",
      "land use",
      "ab wildlife"
    ],

    fr: [
      "habitat du caribou",
      "caribou alberta",
      "caribou des bois",
      "espece menacee",
      "utilisation des terres",
      "faune alberta"
    ]
  },
} satisfies VideoSource;
