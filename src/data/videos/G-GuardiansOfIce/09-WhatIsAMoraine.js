/**
 * @file 09-WhatIsAMoraine.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Nice area? video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whatIsAMoraineVideo = {
  id: "goi-09g-what-is-a-moraine",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "What is a Moraine",
    fr: "Qu’est-ce qu’une moraine?"
  },

  description: {
    en: "Listen to Peter Lemieux discuss the different types of glacial moraine.",
    fr: "Écoutez Peter Lemieux expliquer les différents types de moraine glaciaire."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=nFzRuDBiB28",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["nice","area","abglaciers","climatechange","abwater"],
    fr: ["bel","endroit","est","pas"]
  },
};
