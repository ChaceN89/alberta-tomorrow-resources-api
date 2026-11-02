/**
 * @file 05-HydrologyAndLandDevelopment.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Hydrology and Land Development video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const hydrologyAndLandDevelopmentVideo = {
  id: "brbc-05f-hydro-dev",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Hydrology and Land Development",
    fr: "Hydrologie et aménagement du territoire"
  },

  description: {
    en: "Explore the watershed while Tricia Stadnyk explains how landscapes and water are affected by development and use changes. How does hydrology within the watershed change when the landscape changes because of humans?",
    fr: "Explorez le bassin versant tandis que Tricia Stadnyk explique comment l’aménagement et les changements d’utilisation du territoire influencent les paysages et l’eau. Comment l’hydrologie du bassin versant change-t-elle lorsque les activités humaines transforment le paysage?"
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
    fr: ["eau", "bassin versant", "surveillance", "hydrologie", "aménagement du territoire"]
  },
};
