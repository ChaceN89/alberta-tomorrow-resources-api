/**
 * @file 04-HowCrevassesForm.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the You know so you get tremendous volumes of water coming off here. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-04g-how-crevasses-form";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const howCrevassesFormVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How Crevasses Form",
    fr: "Comment les crevasses se forment-elles?"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how crevasses form in glaciers.",
    fr: "Écoutez Peter Lemieux expliquer comment les crevasses se forment dans les glaciers."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=QbotXyLZXiQ",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["you","know","get","tremendous","volumes","water","coming","off"],
    fr: ["vous","savez","des","volumes","eau","enormes","ecoulent","ici"]
  },
} satisfies VideoSource;
