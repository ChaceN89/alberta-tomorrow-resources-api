/**
 * @file 09-WhatIsAMoraine.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Nice area? video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-09g-what-is-a-moraine";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whatIsAMoraineVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "What is a Moraine",
    fr: "Qu’est-ce qu’une moraine?"
  },

  description: {
    en: "Listen to Peter Lemieux discuss the different types of glacial moraine.",
    fr: "Écoutez Peter Lemieux expliquer les différents types de moraine glaciaire."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=nFzRuDBiB28",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["nice","area","abglaciers","climatechange","abwater"],
    fr: ["bel","endroit","est","pas"]
  },
} satisfies VideoSource;
