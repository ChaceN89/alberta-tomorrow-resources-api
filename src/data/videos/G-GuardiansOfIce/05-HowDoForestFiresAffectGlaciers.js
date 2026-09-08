/**
 * @file 05-HowDoForestFiresAffectGlaciers.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Any kind of dirt that you find on the surface is going to accelerate melting. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const howDoForestFiresAffectGlaciersVideo = {
  id: "goi-05g-how-do-forest-fires-affect-glaciers",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How do Forest Fires Affect Glaciers",
    fr: "Comment les feux de forêt agissent sur les glaciers"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how summer forest fires affect the glaciers.",
    fr: "Écoutez Peter Lemieux expliquer comment les feux de forêt l’été agissent sur les glaciers."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=LkkeMC8VhnA",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/a93656c2-dbe9-4cca-8b30-1348050ba4f1/thumbnails/obs_07c1c554-f590-4de2-9609-52263faafbda_tumb.0000024.jpg",
    is360: false
  },

  searchTerms: {
    en: ["any", "kind", "dirt", "you", "find", "surface", "going", "accelerate"],
    fr: ["toute", "forme", "salete", "debris", "presente", "surface", "accelerer", "fonte"]
  },
};
