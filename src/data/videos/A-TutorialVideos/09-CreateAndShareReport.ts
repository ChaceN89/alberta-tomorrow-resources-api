/**
 * @file 09-CreateAndShareReport.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Create and Share a Report tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "tutorial-09a-create-report";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const createAndShareReportVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "Creating and Sharing a Report in Alberta Tomorrow",
    fr: "Créer et partager un rapport dans Alberta Tomorrow"
  },

  description: {
    en: "This short tutorial video will show you how to create and share a report in the simulator.",
    fr: "Ce court tutoriel vous montre comment créer et partager un rapport dans le simulateur."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=poxco59ASU8",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "reporting",
      "sharing",
      "communication",
      "project"
    ],

    fr: [
      "rapport",
      "partage",
      "communication",
      "projet"
    ]
  },
} satisfies VideoSource;
