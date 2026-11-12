/**
 * @file 05-HangingCulvert.ts
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Hanging Culvert video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "poi-05j-hanging-culvert";
const videoAssets = getVideoAssetPaths(VideoCategory.POINTS_OF_INTEREST.id, videoId);

export const hangingCulvertVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Hanging Culvert",
    fr: "Ponceau perché"
  },

  description: {
    en: "Listen to this fisheries biologist explain what a hanging culvert is in the upper reaches of the Red Deer River Watershed.",
    fr: "Écoutez une biologiste des pêches expliquer ce qu’est un ponceau perché dans le cours supérieur du bassin versant de la rivière Red Deer."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=r-_LsSi7FJ0",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: "https://www.youtube.com/@LetsGoOutdoors"
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: null
  },

  searchTerms: {
    en: [
      "culvert",
      "stream-crossing",
      "fish",
      "watershed",
      "roads"
    ],
    fr: ["ponceau", "passage de cours d’eau", "poissons", "bassin versant", "routes"]
  }
} satisfies VideoSource;
