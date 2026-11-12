/**
 * @file 12-WhereWasTheAthabascaGlacierIn2006.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Why don't we go over and take a look at these two boulders. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-12g-where-was-the-athabasca-glacier-in-2006";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whereWasTheAthabascaGlacierIn2006Video = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Where was the Athabasca glacier in 2006?",
    fr: "Où se situait le glacier Athabasca en 2006?"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how far the glacier has receded since 2006 and how he knows!",
    fr: "Écoutez Peter Lemieux expliquer à quel point le glacier a reculé depuis 2006 et comment il le sait!"
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=NCKgmaIkIm0",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["don","over","take","look","these","two","boulders","abglaciers"],
    fr: ["pourquoi","pas","aller","voir","ces","deux","rochers","plus"]
  },
} satisfies VideoSource;
