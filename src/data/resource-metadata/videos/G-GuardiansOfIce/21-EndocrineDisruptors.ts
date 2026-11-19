/**
 * @file 21-EndocrineDisruptors.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Dr. Ali Criscitiello talks about melting glaciers and what this has to do with Endocrine Disruptors. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-21g-endocrine-disruptors";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const endocrineDisruptorsVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Endocrine Disruptors",
    fr: "Perturbateurs endocriniens"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about melting glaciers and what this has to do with Endocrine Disruptors.",
    fr: "Ali Criscitiello, Ph. D., parle de la fonte des glaciers et de ce que cela a à voir avec les perturbateurs endocriniens."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=fjJZesxnfBo",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["ali", "criscitiello", "talks", "about", "melting", "glaciers", "has", "endocrine"],
    fr: ["ali", "criscitiello", "parle", "fonte", "des", "glaciers", "que", "cela"]
  },
} satisfies VideoSource;
