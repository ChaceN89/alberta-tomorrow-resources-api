/**
 * @file 14-WhereWillTheGlacierBeIn30Years.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Whats your prediction? video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-14g-where-will-the-glacier-be-in-30-years";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whereWillTheGlacierBeIn30YearsVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Where will the glacier be in 30 years?",
    fr: "Où se trouvera le glacier dans 30 ans?"
  },

  description: {
    en: "Listen to Peter Lemieux as he discussed where the Athabasca Glacier may be in 30 years.",
    fr: "Écoutez Peter Lemieux expliquer où pourrait se situer le glacier Athabasca dans 30 ans."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=HXQLMjomCes",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["whats","your","prediction","abglaciers","climatechange","abwater"],
    fr: ["quelle","est","votre","prediction"]
  },
} satisfies VideoSource;
