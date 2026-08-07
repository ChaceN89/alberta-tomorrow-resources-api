/**
 * @file 40-IntoTheCold.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Into the cold video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const intoTheColdVideo = {
  id: "goi-40g-into-the-cold",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Into the cold",
    fr: "Dans le froid"
  },

  description: {
    en: "Dr. Ali Criscitiello takes us into the freezer of the Canadian Ice Core Lab.",
    fr: "Ali Criscitiello, Ph. D., nous amène dans le congélateur du Laboratoire canadien des carottes de glace."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=7cQbvb4l3Ro",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["cold","abglaciers","climatechange","abwater"],
    fr: ["dans","froid"]
  },
};
