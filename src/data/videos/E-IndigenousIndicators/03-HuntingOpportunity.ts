/**
 * @file 03-HuntingOpportunity.ts
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the Hunting Opportunity video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "ind-03e-hunting-opportunity";
const videoAssets = getVideoAssetPaths(VideoCategory.INDIGENOUS_INDICATORS.id, videoId);

export const huntingOpportunityVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "Hunting Opportunity",
    fr: "Possibilités de chasse"
  },

  description: {
    en: "This video explains the Hunting Opportunity indicator, combining TLU Access and Moose Habitat to reflect Indigenous hunting access.",
    fr: "Cette vidéo explique l’indicateur Possibilités de chasse, une combinaison de l’accès aux UTT et de l’habitat de l’orignal qui représente l’accès à la chasse pour les Autochtones."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=d_wKqUZMaTk",
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
      "hunting",
      "tlu",
      "moose",
      "land use"
    ],

    fr: [
      "chasse",
      "utt",
      "orignal",
      "utilisation des terres"
    ]
  },
} satisfies VideoSource;
