/**
 * @file 04-WatershedsAndHydrology.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Watersheds and Hydrology video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const watershedsAndHydrologyVideo = {
  id: "brbc-04f-watersheds-hydro",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Watersheds and Hydrology",
    fr: ""
  },

  description: {
    en: "Go from the mountains through the river basin while learning what a watershed is, and how hydrology is apparent in the landscape. Tricia Stadnyk will explain how hydrology can affect everything around it as you explore.",
    fr: ""
  },

  lessonPlans: [
    {
      title: "Watersheds and Hydrology",
      link: "https://docs.google.com/document/d/1pluUXun-r0TxsYWRj8b5X__UlWWcJMcW"
    }
  ],

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=_hFqA3agfhk&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_4_watersheds_and_hydrology.png",
    is360: true
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring", "hydrology", "landscape"],
    fr: []
  },
};
