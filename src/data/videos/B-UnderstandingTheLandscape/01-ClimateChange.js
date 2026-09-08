/**
 * @file 01-ClimateChange.js
 * @module Data/Videos/UnderstandingTheLandscape
 * @desc Contains localized metadata and media information for the Climate Change video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const climateChangeVideo = {
  id: "landscape-01b-climate-change",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.LANDSCAPE.id,

  title: {
    en: "Climate Change",
    fr: "Changements climatiques"
  },

  description: {
    en: "How will Alberta be affected by Climate Change? What's the difference between Climate Change and Global Warming?",
    fr: "Comment l’Alberta sera-t-elle touchée par les changements climatiques? Quelle est la différence entre changements climatiques et réchauffement planétaire?"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Okh7vn60kxg",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/climate_change_video.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "climate change",
      "global warming",
      "land use",
      "education",
      "renewable energy",
      "future Alberta"
    ],

    fr: [
      "changements climatiques",
      "rechauffement climatique",
      "utilisation des terres",
      "education",
      "energie renouvelable",
      "avenir de l'alberta"
    ]
  },
};