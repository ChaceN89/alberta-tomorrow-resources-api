/**
 * @file 09-WaterServices.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Water Services video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const waterServicesVideo = {
  id: "brbc-09f-water-services",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Water Services",
    fr: ""
  },

  description: {
    en: "Explore some of the Glenmore dam and reservoir as Patrick Van den Eynden talks about its history, infrastructure, services, and the City's water drinking system.",
    fr: ""
  },

  lessonPlans: [
    {
      title: "Glenmore Dam and Resevoir: Water Services",
      link: "https://docs.google.com/document/d/1X8bXoEl8IDyHjAtW5nSc5mtB-jVN8DU0"
    }
  ],

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=BselhdsCzvM&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=6",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_6_water_services.png",
    is360: true
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring"],
    fr: []
  },
};
