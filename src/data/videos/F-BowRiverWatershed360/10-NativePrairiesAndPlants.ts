/**
 * @file 10-NativePrairiesAndPlants.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Native Prairies and Plants video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "brbc-10f-native-prairies";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const nativePrairiesAndPlantsVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Native Prairies and Plants",
    fr: "Prairies naturelles et plantes indigènes"
  },

  description: {
    en: "As Megan Evans and Erin Anderson talk about the importance of prairies and their native plants, explore several grassland landscapes within the Bow River Basin.",
    fr: "Megan Evans et Erin Anderson expliquent l’importance des prairies et de leurs plantes indigènes. Explorez plusieurs paysages de prairies du bassin de la rivière Bow."
  },

  lessonPlans: [
    {
      title: "Native Prairies and Plants",
      link: "https://docs.google.com/document/d/1uTt5BFsG986N8SgW9H4nNCfXDPj5Wta7"
    }
  ],

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=EAVeYoygr0c&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=11",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring"],
    fr: ["eau", "bassin versant", "surveillance", "prairies", "plantes indigènes"]
  },
} satisfies VideoSource;
