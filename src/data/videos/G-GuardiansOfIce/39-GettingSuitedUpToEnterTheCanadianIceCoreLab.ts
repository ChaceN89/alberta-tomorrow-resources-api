/**
 * @file 39-GettingSuitedUpToEnterTheCanadianIceCoreLab.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Getting suited up to enter the Canadian Ice Core Lab video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-39g-getting-suited-up-to-enter-the";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const gettingSuitedUpToEnterTheCanadianIceCoreLabVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Getting suited up to enter the Canadian Ice Core Lab",
    fr: "S’habiller chaudement avant d’entrer dans le Laboratoire canadien des carottes de glace"
  },

  description: {
    en: "Dr. Ali Criscitiello gets prepared to go into the Canadian Ice Core Lab.",
    fr: "La glaciologue Ali Criscitiello, Ph. D., se prépare à entrer dans le Laboratoire canadien des carottes de glace."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Ofv6WtFd1Zc",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["getting","suited","enter","canadian","ice","core","lab","abglaciers"],
    fr: ["habiller","chaudement","avant","entrer","dans","laboratoire","canadien","des"]
  },
} satisfies VideoSource;
