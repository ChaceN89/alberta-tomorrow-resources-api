/**
 * @file 23-GlacialAlbedo.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the So as glaciers shrink or as glacier surfaces become dirtier both of these impact overal albedo. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-23g-glacial-albedo";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const glacialAlbedoVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Glacial Albedo",
    fr: "Albédo glacial"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses what Albedo is and how it relates to Alberta glaciers.",
    fr: "Ali Criscitiello, Ph. D., explique ce qu’est l’albédo et son lien avec les glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=RbPa7lv1fv0",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["glaciers","shrink","glacier","surfaces","become","dirtier","both","these"],
    fr: ["mesure","que","les","glaciers","retrecissent","leur","surface","devient"]
  },
} satisfies VideoSource;
