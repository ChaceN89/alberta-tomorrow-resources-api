/**
 * @file 20-ThisIsTheAthabascaGlacier.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the This is the Athabasca Glacier video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-20g-this-is-the-athabasca-glacier";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const thisIsTheAthabascaGlacierVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "This is the Athabasca Glacier",
    fr: "Voici le glacier Athabasca"
  },

  description: {
    en: "Walk with us to the Athabasca Glacier",
    fr: "Venez marcher avec nous jusqu’au glacier Athabasca."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=KF1JBsGdyZY",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["athabasca","glacier","abglaciers","climatechange","abwater"],
    fr: ["voici","glacier","athabasca"]
  },
} satisfies VideoSource;
