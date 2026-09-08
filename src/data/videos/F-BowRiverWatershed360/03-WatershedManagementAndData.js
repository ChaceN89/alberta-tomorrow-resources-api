/**
 * @file 03-WatershedManagementAndData.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Watershed Management and Data video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const watershedManagementAndDataVideo = {
  id: "brbc-03f-management-data",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Watershed Management and Data",
    fr: ""
  },

  description: {
    en: "Dr. Lee Jackson talks about the Sustainable Watershed Integrated Management Platform and the necessity of shared water data for the health of the Bow River Basin. Explore from the headwaters into the prairies and learn about citizen science projects, and different data parameters.",
    fr: ""
  },

  lessonPlans: [],

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=1sIN7zr8xoo&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=5",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_9_watershed_management_and_data.png",
    is360: true
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring", "sustainability"],
    fr: []
  },
};
