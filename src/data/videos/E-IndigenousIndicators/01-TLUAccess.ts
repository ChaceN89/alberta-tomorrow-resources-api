/**
 * @file 01-TLUAccess.ts
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the TLU Access video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "ind-01e-tlu-access";
const videoAssets = getVideoAssetPaths(VideoCategory.INDIGENOUS_INDICATORS.id, videoId);

export const tluAccessVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "TLU Access",
    fr: "Accès à l’UTT"
  },

  description: {
    en: "Traditional Land Use Access (TLU Access) measures land accessibility for Indigenous peoples engaging in traditional practices. It reflects accessible natural areas not within protected zones.",
    fr: "L’accès à l’utilisation des terres traditionnelles (UTT) mesure l’accessibilité aux terres pour les Autochtones pour entreprendre des activités liées aux utilisations traditionnelles. Elle tient compte des régions naturelles accessibles situées à l’extérieur des aires protégées."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=yz52Ysp_meQ",
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
      "tlu",
      "indigenous access",
      "traditional use",
      "land use"
    ],

    fr: [
      "utt",
      "acces autochtone",
      "utilisation traditionnelle",
      "utilisation des terres"
    ]
  },
} satisfies VideoSource;
