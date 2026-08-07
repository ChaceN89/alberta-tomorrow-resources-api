/**
 * @file 01-BlackfootPerspectiveOnWater.js
 * @module Data/Videos/BlackfootVideos
 * @desc Contains localized metadata and media information for the A Blackfoot Perspective on Water video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const blackfootPerspectiveOnWaterVideo = {
  id: "bfv-01i-blackfoot-perspective-on-water",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BLACKFOOT_VOICES.id,

  title: {
    en: "A Blackfoot Perspective on Water",
    fr: "N/A"
  },

  description: {
    en: "A video sharing the Blackfoot perspective on water and its significance in Indigenous culture and the environment.",
    fr: "N/A"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=r-NzlnMgDj4",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/thumb-a-blackfoot-perspective.jpg",
    is360: true
  },

  searchTerms: {
    en: [
      "blackfoot",
      "indigenous-voices",
      "traditional-ecological-knowledge",
      "water",
      "culture",
      "land-stewardship"
    ],
    fr: []
  }
};
