/**
 * @file 18-WhyAreSomeLakesBlue.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the The water's so silky. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whyAreSomeLakesBlueVideo = {
  id: "goi-18g-why-are-some-lakes-blue",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Why are some lakes blue?",
    fr: "Pourquoi certains lacs sont-ils bleus?"
  },

  description: {
    en: "What this video as Peter Lemieux discusses why some glacier lakes are blue.",
    fr: "Regardez cette vidéo dans laquelle Peter Lemieux explique pourquoi certains lacs glaciaires sont bleus."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=KXSVsc1t8OQ",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["water","silky","abglaciers","climatechange","abwater"],
    fr: ["eau","est","soyeuse"]
  },
};
