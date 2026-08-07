/**
 * @file 04-WaterQualityClimateChangeAndAlbertasGlaciersWebinar.js
 * @module Data/Videos/UnderstandingTheLandscape
 * @desc Contains localized metadata and media information for the Water Quality, Climate Change and Alberta's Glaciers Webinar video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const waterQualityClimateChangeAndAlbertasGlaciersWebinarVideo = {
  id: "landscape-04b-glaciers-webinar",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.LANDSCAPE.id,

  title: {
    en: "Water Quality, Climate Change and Alberta's Glaciers Webinar",
    fr: ""
  },

  description: {
    en: "This webinar was held on May 27, 2020 and features 4 prominent scientists talking about climate change and how it will affect glaciers, glacier melt, water policy and our water quality.",
    fr: ""
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Xgb3_I8nagY",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/water-climate-change-glaciers-webinar.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "ab glaciers",
      "climate change",
      "water quality",
      "columbia icefield",
      "athabasca glacier",
      "land use"
    ],

    fr: [
      "glaciers alberta",
      "changements climatiques",
      "qualite de l'eau",
      "champ de glace columbia",
      "glacier athabasca",
      "utilisation des terres"
    ]
  },
};
