/**
 * @file 01-Watershed360Tour.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Watershed 360 Tour video.
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

const videoId = "brbc-01f-watershed";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const watershed360TourVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Watershed 360 Tour",
    fr: "Visite à 360° du bassin versant"
  },

  description: {
    en: "Visit each sub-basin in the Bow River basin and get a feel for how people use the water and the landscape. Look at the different types of buildings, pathways, and activities that can take place within the watershed as you travel from the headwaters, down to the end in the prairies.",
    fr: "Visitez chaque sous-bassin du bassin de la rivière Bow et découvrez comment les gens utilisent l’eau et le paysage. Observez les différents types de bâtiments, de sentiers et d’activités présents dans le bassin versant, depuis les sources jusqu’aux Prairies."
  },

  lessonPlans: [
    {
      title: "The Watershed",
      link: "https://docs.google.com/document/d/1IJGMeGkcj1MlH58Ch4MnEmQOQ92UcrPz"
    }
  ],

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=-66yGxMmQxE&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=9",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring", "tour"],
    fr: ["eau", "bassin versant", "surveillance", "visite"]
  },
} satisfies VideoSource;
