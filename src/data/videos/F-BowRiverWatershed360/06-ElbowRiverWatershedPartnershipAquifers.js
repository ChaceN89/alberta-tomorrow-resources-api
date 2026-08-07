/**
 * @file 06-ElbowRiverWatershedPartnershipAquifers.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Elbow River Watershed Partnership Aquifers video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const elbowRiverWatershedPartnershipAquifersVideo = {
  id: "brbc-06f-erwp-aquifers",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Elbow River Watershed Partnership (ERWP) Aquifers",
    fr: ""
  },

  description: {
    en: "Explore the Elbow River watershed and learn about its groundwater, and state of the aquifer with Joe and Flora. Learn the definitions for what an aquifer is, how groundwater is used in the sub-basin, and how it is affected by people.",
    fr: ""
  },

  lessonPlans: [
    {
      title: "Aquifers",
      link: "https://docs.google.com/document/d/1GBnAfLDry3L8DEJTw1hqczlE5lSD0r5O"
    }
  ],

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=3wvA7macCMM",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/brbc_2_elbow_river_watershed_partnership_aquifers.png",
    is360: true
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring"],
    fr: []
  },
};
