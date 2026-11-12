/**
 * @file 12-IsotopesAndClimateChange.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Isotopes and Climate Change video.
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

const videoId = "brbc-12f-isotopes-climate";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const isotopesAndClimateChangeVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Isotopes and Climate Change",
    fr: "Isotopes et changements climatiques"
  },

  description: {
    en: "Learn about how isotopes can be used to monitor climate change and hydrologic functions within a watershed.",
    fr: "Découvrez comment les isotopes permettent de surveiller les changements climatiques et les processus hydrologiques au sein d’un bassin versant."
  },

  lessonPlans: [
    {
      title: "Isotopes and Climate Change",
      link: "https://docs.google.com/document/d/1PcI2jRXdspNZqIkJeppDro2Ub0wXz9bi"
    }
  ],

  media: {
    primaryUrl: "https://d2qcvmovr4fv.cloudfront.net/faa923d3-a4a0-461d-b339-e5dbcc2c641c/hls/Isotopes.m3u8",
    youtubeUrl: "https://www.youtube.com/watch?v=LebvVpUHCYE&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=4",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring", "isotopes", "climate"],
    fr: ["eau", "bassin versant", "surveillance", "isotopes", "climat"]
  },
} satisfies VideoSource;
