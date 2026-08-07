/**
 * @file 24-GrowthAndAttrition.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the The main factors are the amount of snowfall in the winter, rain in the summer. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const growthAndAttritionVideo = {
  id: "goi-24g-growth-and-attrition",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "The main factors are the amount of snowfall in the winter, rain in the summer.",
    fr: "Les principaux facteurs sont la quantité de neige reçue pendant l’hiver et la quantité de pluie reçue pendant l’été."
  },

  description: {
    en: "Listen to Dr. Ali Criscitiello discuss growth and attrition of Alberta Glaciers",
    fr: "En résumé, les deux principaux facteurs sont la quantité de précipitations et la température."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=uATZEvCjoT4",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/75a19241-4149-455f-b43b-91a41920ac28/thumbnails/obs_88cdd5c9-8aa9-4c48-870b-3791889c946f_tumb.0000042.jpg",
    is360: false
  },

  searchTerms: {
    en: ["main","factors","amount","snowfall","winter","rain","summer","abglaciers"],
    fr: ["les","principaux","facteurs","sont","quantite","neige","recue","pendant"]
  },
};
