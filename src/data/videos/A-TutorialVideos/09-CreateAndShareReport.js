/**
 * @file 09-CreateAndShareReport.js
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Create and Share a Report tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const createAndShareReportVideo = {
  id: "tutorial-09a-create-report",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "User Tutorial: Creating and Sharing a Report in Alberta Tomorrow",
    fr: "Creer et partager un rapport dans Alberta Tomorrow"
  },

  description: {
    en: "This short tutorial video will show you how to create and share a report in the simulator.",
    fr: "Ce court tutoriel vous montre comment creer et partager un rapport dans le simulateur."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=poxco59ASU8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialReports.jpg",
    is360: false
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
};
