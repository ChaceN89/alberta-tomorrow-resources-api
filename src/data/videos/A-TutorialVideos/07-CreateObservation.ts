/**
 * @file 07-CreateObservation.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Create an Observation tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "tutorial-07a-create-observation";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const createObservationVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "How to Create an Observation in the Simulator",
    fr: "Comment créer une observation dans le simulateur"
  },

  description: {
    en: "This tutorial walks you through how to create your own observation in the simulator that you and all registered users can see.",
    fr: "Ce tutoriel vous guide dans la création de votre propre observation dans le simulateur, une observation que vous et tous les utilisateurs enregistrés peuvent voir."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=fp_WVPCdCnU",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "observation",
      "engagement",
      "student projects"
    ],

    fr: [
      "observation",
      "engagement",
      "projets etudiants"
    ]
  },
} satisfies VideoSource;
