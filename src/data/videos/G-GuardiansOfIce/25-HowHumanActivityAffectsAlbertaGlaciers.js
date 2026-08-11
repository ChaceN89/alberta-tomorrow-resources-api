/**
 * @file 25-HowHumanActivityAffectsAlbertaGlaciers.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the There's two main ways. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const howHumanActivityAffectsAlbertaGlaciersVideo = {
  id: "goi-25g-how-human-activity-affects-alberta",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How human activity affects Alberta glaciers",
    fr: "Effets des activités humaines sur les glaciers de l’Alberta"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about how human activity affects Alberta Glaciers.",
    fr: "Ali Criscitiello, Ph. D., explique les effets des activités humaines sur les glaciers de l’Alberta."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=nr34h5i6oqI",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["there","two","main","ways","abglaciers","climatechange","abwater"],
    fr: ["deux","principales","facons"]
  },
};
