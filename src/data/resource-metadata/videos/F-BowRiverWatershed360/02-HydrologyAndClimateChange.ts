/**
 * @file 02-HydrologyAndClimateChange.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Hydrology and Climate Change video.
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

const videoId = "brbc-02f-hydro-climate";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const hydrologyAndClimateChangeVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Hydrology and Climate Change",
    fr: "Hydrologie et changements climatiques"
  },

  description: {
    en: "Tricia Stadnyk talks about how a watershed can affect the climate it is in, and in turn, how the climate then affects the landscape. Go from the headwaters through to the prairies as she talks about precipitation and more.",
    fr: "Tricia Stadnyk explique comment un bassin versant peut influencer le climat de sa région et, à son tour, comment le climat influence le paysage. Suivez le parcours des sources jusqu’aux Prairies tandis qu’elle parle des précipitations et d’autres sujets."
  },

  lessonPlans: [
    {
      title: "Hydrology & Climate Change",
      link: "https://docs.google.com/document/d/1RgpNqFu8Muak1gNkwCZbaxPoFc6qzXM4"
    }
  ],

  media: {
    primaryUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/4364db1e1a7041538db38b0d58346cb5/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    youtubeUrl: "https://www.youtube.com/watch?v=6B31usY3S6E&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=2",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring", "climate", "hydrology"],
    fr: ["eau", "bassin versant", "surveillance", "climat", "hydrologie"]
  },
} satisfies VideoSource;
