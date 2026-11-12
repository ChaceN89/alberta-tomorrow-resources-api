/**
 * @file 08-WaterQuality.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Water Quality video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "brbc-08f-water-quality";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const waterQualityVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Water Quality",
    fr: "Qualité de l’eau"
  },

  description: {
    en: "Join Patrick Van den Eynden as he talks about the City of Calgary's Glenmore Water Treatment Plant's process from getting the water from the reservoir, all the way to disinfection and sending the water out to service sites across the city.",
    fr: "Patrick Van den Eynden présente le processus de traitement de l’eau à l’usine de traitement de Glenmore de la Ville de Calgary, depuis le prélèvement dans le réservoir jusqu’à la désinfection et à l’acheminement de l’eau vers les différents secteurs de la ville."
  },

  lessonPlans: [
    {
      title: "Water Quality: Water Treatment",
      link: "https://docs.google.com/document/d/1unCOQUIHRLS5YZJ3J5ekBFurcbr9zaL7"
    }
  ],

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=9ksSbswY_CA&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=8",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring"],
    fr: ["eau", "bassin versant", "surveillance", "qualité de l’eau", "traitement de l’eau"]
  },
} satisfies VideoSource;
