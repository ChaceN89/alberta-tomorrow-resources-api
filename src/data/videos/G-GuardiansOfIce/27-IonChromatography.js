/**
 * @file 27-IonChromatography.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Ion Chromatograph video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Sep 10, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const ionChromatographyVideo = {
  id: "goi-27g-ion-chromatography",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Ion chromatograph",
    fr: "Chromatographe d’ions"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about the ion chromatograph and what it tells us about glaciers.",
    fr: "Ali Criscitiello, Ph. D., parle du chromatographe d’ions et de ce qu’il nous apprend sur les glaciers."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=L7F4VIAwcA0",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "ions",
      "ion chromatograph",
      "ion chromatography",
      "alberta glaciers",
      "climate change",
      "water"
    ],

    fr: [
      "ions",
      "chromatographe d’ions",
      "chromatographie ionique",
      "glaciers de l’alberta",
      "changements climatiques",
      "eau"
    ]
  },
};