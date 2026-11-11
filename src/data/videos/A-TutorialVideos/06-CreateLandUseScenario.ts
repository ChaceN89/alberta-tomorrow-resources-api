/**
 * @file 06-CreateLandUseScenario.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Create a Land Use Scenario tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "tutorial-06a-landuse-scenario";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const createLandUseScenarioVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "How to Create your own Land Use Scenarios",
    fr: "Comment créer vos propres scénarios d’utilisation des terres "
  },

  description: {
    en: "This video will show you how to select your watershed study area, set goals, make changes on the map, and run your scenario.",
    fr: "Cette vidéo vous montre comment choisir le bassin hydrographique de votre zone d’étude, établir des objectifs, apporter des changements sur la carte et exécuter votre scénario."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=RQ2Pz6gLIQ0",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "land use",
      "planning",
      "watershed",
      "management"
    ],

    fr: [
      "utilisation des terres",
      "planification",
      "bassin versant",
      "gestion"
    ]
  },
} satisfies VideoSource;
