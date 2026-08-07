/**
 * @file 06-IsItImportantGlaciersAreInTheNationalPark.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the All of these uses of the land are great and essential. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const isItImportantGlaciersAreInTheNationalParkVideo = {
  id: "goi-06g-is-it-important-glaciers-are-in-the-national-park",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "All of these uses of the land are great and essential.",
    fr: "Toutes ces utilisations du territoire sont importantes et essentielles."
  },

  description: {
    en: "Listen to Peter Lemieux discuss why it's important to have glaciers protected in National Parks.",
    fr: "C’est parfois une bonne chose qu’une partie du territoire soit simplement laissée à l’état naturel, et un parc national est justement conçu pour protéger ces lieux afin que tout le monde puisse en profiter et les apprécier."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Deu0HjSCzuM",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["all","these","uses","land","great","essential","abglaciers","climatechange"],
    fr: ["toutes","ces","utilisations","territoire","sont","importantes","essentielles"]
  },
};
