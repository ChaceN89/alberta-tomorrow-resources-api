/**
 * @file 11-InvasiveSpeciesAndControl.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Invasive Species and Control video.
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

const videoId = "brbc-11f-invasive-species";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const invasiveSpeciesAndControlVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Invasive Species and Control",
    fr: "Espèces envahissantes et lutte contre elles"
  },

  description: {
    en: "Learn about invasive species in native grasslands, control systems, and the importance of native species from Erin Anderson and Megan Evans as you explore various prairie landscapes.",
    fr: "Erin Anderson et Megan Evans présentent les espèces envahissantes des prairies naturelles, les méthodes de lutte et l’importance des espèces indigènes. Explorez différents paysages des Prairies."
  },

  lessonPlans: [
    {
      title: "Invasive Species and Control",
      link: "https://docs.google.com/document/d/1qqVuwjHNtqhLvMsjksYxXIQTULxbah9S"
    }
  ],

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=EQXmN_v_2qw&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3&index=7",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring"],
    fr: ["eau", "bassin versant", "surveillance", "espèces envahissantes", "lutte", "plantes indigènes"]
  },
} satisfies VideoSource;
