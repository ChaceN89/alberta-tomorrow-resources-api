/**
 * @file 11-WhereDoesWaterFromTheSnowDomeGo.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the They both flow up to the Arctic Ocean via the MacKenzie River. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-11g-where-does-water-from-the-snowdome";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whereDoesWaterFromTheSnowDomeGoVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Where does water from the Snow Dome go?",
    fr: "Où va l’eau venant de Snow Dome?"
  },

  description: {
    en: "Listen to Peter Lemieux as he discusses where water from Snow Dome ends up.",
    fr: "Écoutez Peter Lemieux parler d’où finit l’eau qui vient de Snow Dome."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=ZS8TG4_q24A",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["they","both","flow","arctic","ocean","via","mackenzie","river"],
    fr: ["toutes","deux","jettent","dans","ocean","arctique","par","intermediaire"]
  },
} satisfies VideoSource;
