/**
 * @file 08-StriationsOnTheRocks.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Striations. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const striationsOnTheRocksVideo = {
  id: "goi-08g-striations-on-the-rocks",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Striations.",
    fr: "Des stries glaciaires."
  },

  description: {
    en: "Listen to Peter Lemieux talk about how glaciers can cause striations on rocks as they move.",
    fr: "Alors, pensez-vous que c’est la glace qui a fait cela ?"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=sKF4M0v1GdM",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/7c3e031d-624b-4383-bca0-1566a980c5a4/thumbnails/obs_b10c9053-9433-43ac-8290-8e643250149d_tumb.0000020.jpg",
    is360: false
  },

  searchTerms: {
    en: ["striations","abglaciers","climatechange","abwater"],
    fr: ["des","stries","glaciaires"]
  },
};
