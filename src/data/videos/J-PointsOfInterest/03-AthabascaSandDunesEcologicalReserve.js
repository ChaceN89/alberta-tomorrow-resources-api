/**
 * @file 03-AthabascaSandDunesEcologicalReserve.js
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

export const athabascaSandDunesEcologicalReserveVideo = {
  id: "poi-03j-athabasca-sand-dunes-ecological-reserve",

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
    type: "youtube",
    url: "https://www.youtube.com/watch?v=KrkcyfUn274",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/LGO_AthabascaSandDunes.jpg",
    is360: false
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
};
