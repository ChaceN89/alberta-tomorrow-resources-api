/**
 * @file 22-ForestFiresAndGlaciers.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the It does a couple of things. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const forestFiresAndGlaciersVideo = {
  id: "goi-22g-forest-fires-and-glaciers",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "It does a couple of things.",
    fr: "Cela a plusieurs effets."
  },

  description: {
    en: "Dr. Ali Criscitiello discusses the effects of forest fires on Alberta Glaciers.",
    fr: "Le premier effet, et le plus évident, est qu’il transforme cette magnifique surface blanche et immaculée, très réfléchissante, en une surface plus sombre qui absorbe davantage d’énergie."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=f2wUf95774k",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["couple","things","abglaciers","climatechange","abwater"],
    fr: ["cela","plusieurs","effets"]
  },
};
