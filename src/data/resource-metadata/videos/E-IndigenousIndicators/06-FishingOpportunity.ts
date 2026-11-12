/**
 * @file 06-FishingOpportunity.ts
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Fishing Opportunity video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "ind-06e-fishing-opportunity";
const videoAssets = getVideoAssetPaths(VideoCategory.INDIGENOUS_INDICATORS.id, videoId);

export const fishingOpportunityVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Fishing Opportunity",
    fr: "Possibilités de pêche"
  },

  description: {
    en: "Fishing Opportunity combines TLU Access and Fish Habitat to indicate access to successful fishing activities for Indigenous peoples.",
    fr: "Les possibilités de pêches combinent l’accès aux UTT et l’habitat du poisson pour indiquer l’accès aux activités de pêche fructueuse pour les peuples autochtones."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=vN_X59jznLE",
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
      "fishing",
      "tlu",
      "native trout",
      "land use"
    ],

    fr: [
      "peche",
      "utt",
      "truite indigene",
      "utilisation des terres"
    ]
  },
} satisfies VideoSource;
