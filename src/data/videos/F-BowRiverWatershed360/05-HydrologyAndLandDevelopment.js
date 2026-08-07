/**
 * @file 05-HydrologyAndLandDevelopment.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Hydrology and Land Development video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const hydrologyAndLandDevelopmentVideo = {
  id: "brbc-05f-hydro-dev",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Hydrology and Land Development",
    fr: ""
  },

  description: {
    en: "Explore the watershed while Tricia Stadnyk explains how landscapes and water are affected by development and use changes. How does hydrology within the watershed change when the landscape changes because of humans?",
    fr: ""
  },

  lessonPlans: [
    {
      title: "Hydrology and Land Development",
      link: "https://docs.google.com/document/d/1d4mr6hIi_J3jNzJVj77lyBNeCW_jGhWq"
    }
  ],

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=2qSAx5fmtWg&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=3",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_8_hydrology_and_land_development.png",
    is360: true
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring"],
    fr: []
  },
};
