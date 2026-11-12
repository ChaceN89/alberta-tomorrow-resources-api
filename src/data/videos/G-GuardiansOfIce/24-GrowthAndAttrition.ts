/**
 * @file 24-GrowthAndAttrition.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the The main factors are the amount of snowfall in the winter, rain in the summer. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-24g-growth-and-attrition";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const growthAndAttritionVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Growth and Attrition",
    fr: "Progression et retrait des glaciers"
  },

  description: {
    en: "Listen to Dr. Ali Criscitiello discuss growth and attrition of Alberta Glaciers",
    fr: "Écoutez Ali Criscitiello, Ph. D., expliquer la progression et le retrait des glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=uATZEvCjoT4",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["main","factors","amount","snowfall","winter","rain","summer","abglaciers"],
    fr: ["les","principaux","facteurs","sont","quantite","neige","recue","pendant"]
  },
} satisfies VideoSource;
