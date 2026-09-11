/**
 * @file 04-WebinarLandUseMistakesMitigationAndRestoration.js
 * @module Data/Videos/OtherVideos
 * @desc Contains English and French metadata for a webinar on land-use
 *       mistakes, mitigation, and restoration.
 *
 * @author Chace Nielson
 * @created Sep 08, 2026
 * @updated Sep 11, 2026
 *
 * @dependencies VideoCategory, Language
 * @notes French metadata is available; the webinar is presented in English.
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const webinarLandUseMistakesMitigationAndRestorationVideo = {
  id: "oth-04z-webinar-land-use-mistakes-mitigation-restoration",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.OTHER.id,

  title: {
    en: "Webinar 1: Land-Use Mistakes, Mitigation and Restoration",
    fr: "Webinaire 1 : utilisation des terres, erreurs, atténuation et restauration"
  },

  description: {
    en: "Watch the recording of a webinar presented in English by Alberta Tomorrow and CPAWS SA on April 27, 2022, titled “Earth Mistakes, Mitigations & Making Amends on the Land.”",
    fr: "Visionnez l’enregistrement d’un webinaire présenté en anglais par Alberta Tomorrow et CPAWS SA le 27 avril 2022, intitulé « Earth Mistakes, Mitigations & Making Amends on the Land »."
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
      "land use",
      "mitigation",
      "restoration",
      "making amends",
      "alberta tomorrow",
      "cpaws"
    ],
    fr: [
      "webinaire",
      "utilisation des terres",
      "erreurs",
      "atténuation",
      "restauration",
      "réparation",
      "territoire",
      "alberta tomorrow",
      "cpaws"
    ]
  }
};