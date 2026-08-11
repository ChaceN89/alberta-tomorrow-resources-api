/**
 * @file 11-InvasiveSpeciesAndControl.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Invasive Species and Control video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const invasiveSpeciesAndControlVideo = {
  id: "brbc-11f-invasive-species",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Invasive Species and Control",
    fr: ""
  },

  description: {
    en: "Learn about invasive species in native grasslands, control systems, and the importance of native species from Erin Anderson and Megan Evans as you explore various prairie landscapes.",
    fr: ""
  },

  lessonPlans: [
    {
      title: "Invasive Species and Control",
      link: "https://docs.google.com/document/d/1qqVuwjHNtqhLvMsjksYxXIQTULxbah9S"
    }
  ],

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=EQXmN_v_2qw&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=7",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_1_invasive_species_and_control.png",
    is360: true
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring"],
    fr: []
  },
};
