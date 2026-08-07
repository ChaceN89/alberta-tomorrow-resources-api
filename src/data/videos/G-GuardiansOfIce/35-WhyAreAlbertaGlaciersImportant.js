/**
 * @file 35-WhyAreAlbertaGlaciersImportant.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Glaciers are important for tons of different reasons. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whyAreAlbertaGlaciersImportantVideo = {
  id: "goi-35g-why-are-alberta-glaciers-important",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Glaciers are important for tons of different reasons.",
    fr: "Les glaciers sont importants pour de très nombreuses raisons."
  },

  description: {
    en: "Dr. Ali Criscitiello discuss the importance of Alberta Glaciers.",
    fr: "Ils sont importants sur le plan environnemental, mais aussi pour les êtres humains, car les glaciers ont un impact direct sur leur vie."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=HOhflZn8cqo",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["glaciers","important","tons","different","reasons","abglaciers","climatechange","abwater"],
    fr: ["les","glaciers","sont","importants","pour","tres","nombreuses","raisons"]
  },
};
