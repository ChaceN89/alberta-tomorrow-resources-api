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

import type { VideoSource } from "../../videoTypes.js";

const assetBaseUrl =
  "https://abt-video-assets-prod.s3.us-west-2.amazonaws.com/videos/A-TutorialVideos/tutorial-01a-register-account";

export const registeringForAnAccountVideo = {
  id: "tutorial-01a-register-account",

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
    primaryUrl: `${assetBaseUrl}/User%20Tutorial_%20Registering%20for%20an%20Account.mp4`,
    youtubeUrl: "https://www.youtube.com/watch?v=5Qi8v-Y3iXM",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialRegisterAccount.jpg",
    is360: false
  },

  subtitles: {
    en: `${assetBaseUrl}/en-captions.vtt`,
    fr: `${assetBaseUrl}/fr-captions.vtt`
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