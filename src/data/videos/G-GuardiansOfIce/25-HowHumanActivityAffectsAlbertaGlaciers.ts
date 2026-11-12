/**
 * @file 25-HowHumanActivityAffectsAlbertaGlaciers.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the There's two main ways. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-25g-how-human-activity-affects-alberta";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const howHumanActivityAffectsAlbertaGlaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How human activity affects Alberta glaciers",
    fr: "Effets des activités humaines sur les glaciers de l’Alberta"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about how human activity affects Alberta Glaciers.",
    fr: "Ali Criscitiello, Ph. D., explique les effets des activités humaines sur les glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=nr34h5i6oqI",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["there","two","main","ways","abglaciers","climatechange","abwater"],
    fr: ["deux","principales","facons"]
  },
} satisfies VideoSource;
