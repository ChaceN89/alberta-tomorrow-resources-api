/**
 * @file 03-WatershedManagementAndData.js
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Watershed Management and Data video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const watershedManagementAndDataVideo = {
  id: "brbc-03f-management-data",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Watershed Management and Data",
    fr: "Gestion du bassin versant et données"
  },

  description: {
    en: "Dr. Lee Jackson talks about the Sustainable Watershed Integrated Management Platform and the necessity of shared water data for the health of the Bow River Basin. Explore from the headwaters into the prairies and learn about citizen science projects, and different data parameters.",
    fr: "Le Dr Lee Jackson présente la Plateforme intégrée de gestion durable des bassins versants et explique pourquoi le partage des données sur l’eau est essentiel à la santé du bassin de la rivière Bow. Explorez le territoire depuis les sources jusqu’aux Prairies et découvrez des projets de science citoyenne ainsi que différents paramètres de données."
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
    fr: ["eau", "bassin versant", "surveillance", "durabilité", "données"]
  },
};
