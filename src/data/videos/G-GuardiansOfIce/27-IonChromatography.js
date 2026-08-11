/**
 * @file 27-IonChromatography.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the This is an Ion Chromatograph. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const ionChromatographyVideo = {
  id: "goi-27g-ion-chromatography",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Ion chromatograph",
    fr: "Chromatographe d’échange d’ions\nAli Criscitiello, Ph. D., parle du chromatographe d’échange d’ions et de ce que cela nous indique sur les glaciers.\n"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about the Ion Chromatograph and what it tells us about the glaciers.",
    fr: "Ali Criscitiello, Ph. D., parle du chromatographe d’échange d’ions et de ce que cela nous indique sur les glaciers."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=L7F4VIAwcA0",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["ion", "chromatograph", "abglaciers", "climatechange", "abwater"],
    fr: ["agit", "chromatographe", "ionique"]
  },
};
