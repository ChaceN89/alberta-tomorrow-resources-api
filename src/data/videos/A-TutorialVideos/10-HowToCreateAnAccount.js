/**
 * @file 10-HowToCreateAnAccount.js
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the How to Create an Account tutorial video.
 *
 * @author Chace Nielson
 * @created Sep 09, 2026
 * @updated Sep 09, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const howToCreateAnAccountVideo = {
  id: "tutorial-10a-create-account",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "How to Create an Account to Use Alberta Tomorrow",
    fr: "Comment creer un compte pour utiliser Alberta Tomorrow"
  },

  description: {
    en: "Follow these easy steps to create your own Public, Teacher, or Student account in Alberta Tomorrow.",
    fr: "Suivez ces etapes simples pour creer votre propre compte public, enseignant ou etudiant dans Alberta Tomorrow."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=kJ6Pu5uByQM",
    thumbnailUrl: "https://img.youtube.com/vi/kJ6Pu5uByQM/hqdefault.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "account",
      "signup",
      "teacher",
      "student"
    ],

    fr: [
      "compte",
      "inscription",
      "enseignant",
      "etudiant"
    ]
  },
};
