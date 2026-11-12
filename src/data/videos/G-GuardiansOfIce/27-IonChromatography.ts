/**
 * @file 27-IonChromatography.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Ion Chromatograph video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Sep 10, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-27g-ion-chromatography";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const ionChromatographyVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Ion chromatograph",
    fr: "Chromatographe d’ions"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about the ion chromatograph and what it tells us about glaciers.",
    fr: "Ali Criscitiello, Ph. D., parle du chromatographe d’ions et de ce qu’il nous apprend sur les glaciers."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=L7F4VIAwcA0",
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
      "ions",
      "ion chromatograph",
      "ion chromatography",
      "alberta glaciers",
      "climate change",
      "water"
    ],

    fr: [
      "ions",
      "chromatographe d’ions",
      "chromatographie ionique",
      "glaciers de l’alberta",
      "changements climatiques",
      "eau"
    ]
  },
} satisfies VideoSource;
