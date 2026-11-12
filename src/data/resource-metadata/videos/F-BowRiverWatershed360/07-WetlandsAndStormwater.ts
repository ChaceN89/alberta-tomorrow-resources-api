/**
 * @file 07-WetlandsAndStormwater.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Wetlands and Stormwater video.
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

const videoId = "brbc-07f-wetlands-stormwater";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const wetlandsAndStormwaterVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Wetlands and Stormwater",
    fr: "Milieux humides et eaux pluviales"
  },

  description: {
    en: "Take a walk around the constructed wetlands in North Glenmore park with Liliana Bozic as she explains the uses of wetlands for storage and stormwater. Learn how water quality is affected by wetlands, and how land development changes, and seasons affect them.",
    fr: "Visitez les milieux humides aménagés du parc North Glenmore avec Liliana Bozic, qui explique comment ils servent au stockage de l’eau et à la gestion des eaux pluviales. Découvrez leur influence sur la qualité de l’eau, ainsi que les effets de l’aménagement du territoire et des saisons."
  },

  lessonPlans: [
    {
      title: "Constructed Wetlands and Stormwater",
      link: "https://docs.google.com/document/d/1GrkDcND2Fflt_-S-R6DyNrJL8lwalLG_"
    }
  ],

  media: {
    primaryUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/eb92e3d8e984451f9386414c7dd75121/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    youtubeUrl: "https://www.youtube.com/watch?v=lmypedsjMjQ&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=10",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring", "storm"],
    fr: ["eau", "bassin versant", "surveillance", "eaux pluviales", "milieux humides"]
  },
} satisfies VideoSource;
