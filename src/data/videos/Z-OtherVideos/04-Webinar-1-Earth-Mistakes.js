/**
 * @file 04-Webinar 1 Earth Mistakes.js
 * @module Data/Videos/OtherVideos
 * @desc Contains localized metadata and media information for the Webinar 1 Earth Mistakes, Mitigations & Making Amends on the Land video.
 *
 * @author Chace Nielson
 * @created Sep 08, 2026
 * @updated Sep 08, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const webinar1EarthMistakesMitigationsAndMakingAmendsOnTheLandVideo = {
  id: "oth-04z-webinar-1-earth-mistakes-mitigations-making-amends",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.OTHER.id,

  title: {
    en: "Webinar 1 Earth Mistakes, Mitigations & Making Amends on the Land Alberta Tomorrow & CPAWS SA",
    fr: "Webinaire 1 : erreurs terrestres, mesures d’atténuation et réparation sur le territoire, Alberta Tomorrow et CPAWS SA"
  },

  description: {
    en: "This is a recording of a webinar held on April 27, 2022.",
    fr: "Il s’agit de l’enregistrement d’un webinaire tenu le 27 avril 2022."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=dqkoz2CgSSU",
    thumbnailUrl: "https://img.youtube.com/vi/dqkoz2CgSSU/hqdefault.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "webinar",
      "earth mistakes",
      "mitigations",
      "making amends",
      "alberta tomorrow",
      "cpaws",
      "land"
    ],
    fr: [
      "webinaire",
      "atténuation",
      "réparation",
      "territoire",
      "alberta tomorrow",
      "cpaws",
      "erreurs"
    ]
  }
};
