/**
 * @file 03-EcologicalGoodsAndServices.ts
 * @module Data/Videos/UnderstandingTheLandscape
 * @desc Contains localized metadata and media information for the Ecological Goods and Services video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "landscape-03b-ecological-goods";
const videoAssets = getVideoAssetPaths(VideoCategory.LANDSCAPE.id, videoId);

export const ecologicalGoodsAndServicesVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.LANDSCAPE.id,

  title: {
    en: "Ecological Goods and Services",
    fr: "Biens et services écologiques"
  },

  description: {
    en: "An introduction to ecological goods and services.",
    fr: "Une introduction aux biens et services écologiques."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=WBdpkY9KSgs",
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
      "egs",
      "ecology",
      "land use",
      "natural capital",
      "ecosystem services"
    ],

    fr: [
      "bse",
      "ecologie",
      "utilisation des terres",
      "capital naturel",
      "services ecosystemiques"
    ]
  },
} satisfies VideoSource;
