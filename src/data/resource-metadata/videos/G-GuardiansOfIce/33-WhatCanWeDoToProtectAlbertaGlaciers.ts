/**
 * @file 33-WhatCanWeDoToProtectAlbertaGlaciers.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Well sometimes it seems lika a far away problem that one person can't impact. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-33g-what-can-we-do-to-protect-alberta";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whatCanWeDoToProtectAlbertaGlaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "What can we do to protect Alberta glaciers?",
    fr: "Que pouvons-nous faire pour protéger les glaciers de l’Alberta?"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about what we can do to protect Alberta glaciers.",
    fr: "Ali Criscitiello, Ph. D., explique ce que nous pouvons faire pour protéger les glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=iHKg1WAQ3h8",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["well","sometimes","seems","lika","far","away","problem","one"],
    fr: ["bien","parfois","cela","semble","etre","probleme","lointain","une"]
  },
} satisfies VideoSource;
