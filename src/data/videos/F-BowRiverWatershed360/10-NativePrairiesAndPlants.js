/**
 * @file 10-NativePrairiesAndPlants.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Native Prairies and Plants video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const nativePrairiesAndPlantsVideo = {
  id: "brbc-010f-native-prairies",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Native Prairies and Plants",
    fr: ""
  },

  description: {
    en: "As Megan Evans and Erin Anderson talk about the importance of prairies and their native plants, explore several grassland landscapes within the Bow River Basin.",
    fr: ""
  },

  lessonPlans: [
    {
      title: "Native Prairies and Plants",
      link: "https://docs.google.com/document/d/1uTt5BFsG986N8SgW9H4nNCfXDPj5Wta7"
    }
  ],

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=EAVeYoygr0c&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=11",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_3_native_prairies_and_plants.png",
    is360: true
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring"],
    fr: []
  },
};
