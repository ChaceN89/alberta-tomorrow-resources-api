/**
 * @file 09-WaterServices.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Water Services video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "brbc-09f-water-services";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const waterServicesVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Water Services",
    fr: "Services liés à l’eau"
  },

  description: {
    en: "Explore some of the Glenmore dam and reservoir as Patrick Van den Eynden talks about its history, infrastructure, services, and the City's water drinking system.",
    fr: "Explorez le barrage et le réservoir Glenmore tandis que Patrick Van den Eynden présente leur histoire, leurs infrastructures et leurs services, ainsi que le système d’approvisionnement en eau potable de la Ville."
  },

  lessonPlans: [
    {
      title: "Glenmore Dam and Resevoir: Water Services",
      link: "https://docs.google.com/document/d/1X8bXoEl8IDyHjAtW5nSc5mtB-jVN8DU0"
    }
  ],

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=BselhdsCzvM&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=6",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring"],
    fr: ["eau", "bassin versant", "surveillance", "services liés à l’eau", "approvisionnement en eau"]
  },
} satisfies VideoSource;
