/**
 * @file 03-AthabascaSandDunesEcologicalReserve.ts
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Athabasca Sand Dunes Ecological Reserve video.
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

const videoId = "poi-03j-athabasca-sand-dunes-ecological-reserve";
const videoAssets = getVideoAssetPaths(VideoCategory.POINTS_OF_INTEREST.id, videoId);

export const athabascaSandDunesEcologicalReserveVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Athabasca Sand Dunes Ecological Reserve",
    fr: "Réserve écologique des dunes de sable de l’Athabasca"
  },

  description: {
    en: "Open, moving sand dunes surrounded by lakes.",
    fr: "Des dunes de sable dégagées et mouvantes entourées de lacs."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=KrkcyfUn274",
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
      "athabasca",
      "sand",
      "dunes",
      "ecological-reserve"
    ],
    fr: ["Athabasca", "sable", "dunes", "réserve écologique"]
  }
} satisfies VideoSource;
