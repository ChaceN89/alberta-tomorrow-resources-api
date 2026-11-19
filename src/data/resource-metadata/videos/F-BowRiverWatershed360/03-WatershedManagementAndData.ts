/**
 * @file 03-WatershedManagementAndData.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Watershed Management and Data video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "brbc-03f-management-data";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const watershedManagementAndDataVideo = {
  id: videoId,

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
    primaryUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/fa86c43190f043ce98aed64b16304c33/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    youtubeUrl: "https://www.youtube.com/watch?v=1sIN7zr8xoo&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=5",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring", "sustainability"],
    fr: ["eau", "bassin versant", "surveillance", "durabilité", "données"]
  },
} satisfies VideoSource;
