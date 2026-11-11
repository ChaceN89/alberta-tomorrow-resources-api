/**
 * @file 01-RegisteringForAnAccount.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Registering for an Account tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Nov 11, 2026
 *
 * @dependencies
 * - videoCategoryIds.js
 * - language.js
 * - videoTypes.js
 *
 * @notes
 * - The ID is a stable API value and should not be changed.
 * - Both locales share the same MP4 and have separate WebVTT subtitle tracks.
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "tutorial-01a-register-account";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const registeringForAnAccountVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "Registering for an Account",
    fr: "S’inscrire pour créer un compte"
  },

  description: {
    en: "Watch this tutorial to see how to register for a Public, Teacher or Student Account.",
    fr: "Regardez ce tutoriel pour voir comment créer un compte grand public, enseignant ou élève."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=5Qi8v-Y3iXM",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },

  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "account",
      "registration",
      "user guide",
      "education",
      "public account",
      "teacher account",
      "student account"
    ],

    fr: [
      "compte",
      "inscription",
      "guide utilisateur",
      "education",
      "compte public",
      "compte enseignant",
      "compte etudiant"
    ]
  }
} satisfies VideoSource;