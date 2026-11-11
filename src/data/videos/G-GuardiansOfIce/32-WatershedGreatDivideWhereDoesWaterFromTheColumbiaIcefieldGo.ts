/**
 * @file 32-WatershedGreatDivideWhereDoesWaterFromTheColumbiaIcefieldGo.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the It can truly be continental. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-32g-watershed-great-divide";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const watershedGreatDivideWhereDoesWaterFromTheColumbiaIcefieldGoVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Watershed Great Divide - Where does water from the Columbia Icefield go?",
    fr: "Ligne continentale de partage des eaux – où l’eau du champ de glace Columbia finit-elle?"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about meltwater from the Columbia Icefield and where it eventually ends up.",
    fr: "Ali Criscitiello, Ph. D., parle de l’eau de fonte du champ de glace Columbia et de l’endroit où elle finit."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=OGN943BCxAk",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["can","truly","continental","abglaciers","climatechange","abwater"],
    fr: ["elle","peut","veritablement","etendre","echelle","continent"]
  },
} satisfies VideoSource;
