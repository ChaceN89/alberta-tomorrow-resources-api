/**
 * @file 01-Watershed360Tour.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Watershed 360 Tour video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const watershed360TourVideo = {
  id: "brbc-01f-watershed",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Watershed 360 Tour",
    fr: ""
  },

  description: {
    en: "Visit each sub-basin in the Bow River basin and get a feel for how people use the water and the landscape. Look at the different types of buildings, pathways, and activities that can take place within the watershed as you travel from the headwaters, down to the end in the prairies.",
    fr: ""
  },

  lessonPlans: [
    {
      title: "The Watershed",
      link: "https://docs.google.com/document/d/1IJGMeGkcj1MlH58Ch4MnEmQOQ92UcrPz"
    }
  ],

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=-66yGxMmQxE&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=9",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_11_watershed.png",
    is360: true
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring", "tour"],
    fr: []
  },
};
