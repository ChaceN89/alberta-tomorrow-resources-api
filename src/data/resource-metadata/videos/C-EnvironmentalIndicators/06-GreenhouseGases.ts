/**
 * @file 06-GreenhouseGases.ts
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Greenhouse Gases video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "env-06c-greenhouse-gases";
const videoAssets = getVideoAssetPaths(VideoCategory.ENVIRONMENTAL_INDICATORS.id, videoId);

export const greenhouseGasesVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Greenhouse Gases and Biotic Carbon Storage",
    fr: "Gaz à effet de serre et stockage du carbone biotique"
  },

  description: {
    en: "What are greenhouse gases (GHGs), and where do they come from? Explore the carbon cycle and how carbon is stored in living organisms. Understand how greenhouse gas emissions are linked to population and resource production, and how best practices can reduce emissions.",
    fr: "Que sont les gaz à effet de serre (GES) et d’où viennent-ils? Explorez le cycle du carbone et la façon dont le carbone est stocké dans les organismes vivants. Découvrez comment les émissions de gaz à effet de serre sont liées à la population et à la production de ressources, et comment les bonnes pratiques peuvent réduire ces émissions."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=m7G3mSq2aD0",
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
      "ab climate change",
      "climate change",
      "biotic carbon storage",
      "land use",
      "photosynthesis",
      "carbon sinks",
      "carbon sources",
      "greenhouse gases",
      "greenhouse effect"
    ],

    fr: [
      "changements climatiques alberta",
      "changements climatiques",
      "stockage du carbone biotique",
      "utilisation des terres",
      "photosynthese",
      "puits de carbone",
      "sources de carbone",
      "gaz a effet de serre",
      "effet de serre"
    ]
  },
} satisfies VideoSource;
