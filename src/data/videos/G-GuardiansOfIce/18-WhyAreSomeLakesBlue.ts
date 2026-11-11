/**
 * @file 18-WhyAreSomeLakesBlue.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the The water's so silky. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-18g-why-are-some-lakes-blue";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whyAreSomeLakesBlueVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Why are some lakes blue?",
    fr: "Pourquoi certains lacs sont-ils bleus?"
  },

  description: {
    en: "What this video as Peter Lemieux discusses why some glacier lakes are blue.",
    fr: "Regardez cette vidéo dans laquelle Peter Lemieux explique pourquoi certains lacs glaciaires sont bleus."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=KXSVsc1t8OQ",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["water","silky","abglaciers","climatechange","abwater"],
    fr: ["eau","est","soyeuse"]
  },
} satisfies VideoSource;
