/**
 * @file 31-SeaLevelRise.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Dr. Ali Criscitiello discusses how glaciers contribute to sea level rise. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-31g-sea-level-rise";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const seaLevelRiseVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Sea level rise",
    fr: "Élévation du niveau des mers"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses how glaciers contribute to sea level rise.",
    fr: "Ali Criscitiello, Ph. D., explique comment les glaciers contribuent à l’élévation du niveau des mers."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=uJ0ucfNs_io",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["ali", "criscitiello", "discusses", "glaciers", "contribute", "sea", "level", "rise"],
    fr: ["ali", "criscitiello", "explique", "comment", "les", "glaciers", "contribuent", "elevation"]
  },
} satisfies VideoSource;
