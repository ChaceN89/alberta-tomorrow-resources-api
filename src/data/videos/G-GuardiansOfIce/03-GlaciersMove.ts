/**
 * @file 03-GlaciersMove.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the It's higher, it's colder, more precipitation falls up there, more of it falls as snow. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-03g-glaciers-move";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const glaciersMoveVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Glaciers Move",
    fr: "Déplacement des glaciers"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how glaciers move.",
    fr: "Écoutez Peter Lemieux expliquer comment les glaciers se déplacent."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=1KGk2LAvz4s",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["higher","colder","more","precipitation","falls","there","snow","abglaciers"],
    fr: ["haut","altitude","est","plus","elevee","fait","froid","les"]
  },
} satisfies VideoSource;
