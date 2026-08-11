/**
 * @file 01-RegisteringForAnAccount.js
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Registering for an Account tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @dependencies
 * - videoCategoryIds.js
 *
 * @notes
 * - The ID is a stable API value and should not be changed.
 * - The current media URL is shared between locales.
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

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
    type: "youtube",
    url: "https://www.youtube.com/watch?v=5Qi8v-Y3iXM",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/tutorialRegisterAccount.jpg",
    is360: false
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
  },

};