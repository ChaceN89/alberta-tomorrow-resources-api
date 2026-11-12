/**
 * @file 41-IntoTheLab.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Into the Lab video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-41g-into-the-lab";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const intoTheLabVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Into the Lab",
    fr: "Dans le laboratoire"
  },

  description: {
    en: "Dr. Ali Criscitiello takes us into the lab used to study Alberta glaciers.",
    fr: "Ali Criscitiello, Ph. D., nous amène dans le laboratoire qu’elle utilise pour étudier les glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Nt4575dF2ME",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["lab","abglaciers","climatechange","abwater"],
    fr: ["dans","laboratoire"]
  },
} satisfies VideoSource;
