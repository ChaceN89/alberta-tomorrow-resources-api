/**
 * @file 44-DrCriscitielloAndHerResearch.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the I am an ice core scientist and I got interested in ice cores and ice in general and glaciers. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-44g-dr-criscitiello-and-her-research";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const drCriscitielloAndHerResearchVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Dr. Criscitiello and her research",
    fr: "Ali Criscitiello, Ph. D., et ses travaux de recherche"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about how she got interested in studying glaciers and what she does at the Canadian Ice Core Lab.",
    fr: "Ali Criscitiello explique comment elle en est venue à s’intéresser à l’étude des glaciers et ce qu’elle fait au Laboratoire canadien des carottes de glace."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=VIt0NySXoGM",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["ice","core","scientist","got","interested","cores","general","glaciers"],
    fr: ["suis","scientifique","specialisee","dans","les","carottes","glace","interessee"]
  },
} satisfies VideoSource;
