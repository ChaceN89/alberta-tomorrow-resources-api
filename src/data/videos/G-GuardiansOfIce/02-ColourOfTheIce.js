/**
 * @file 02-ColourOfTheIce.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the We have'nt seen a lot of really deep blue or more beautiful blue like ice blue colours. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const colourOfTheIceVideo = {
  id: "goi-02g-colour-of-the-ice",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Colour of the ice",
    fr: "La couleur de la glace"
  },

  description: {
    en: "Listen to Peter Lemieux talk about why glacier ice is sometimes blue.",
    fr: "Écoutez Peter Lemieux expliquer pourquoi la glace des glaciers est parfois bleue."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=7Ld_jQCuJzE",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["have","seen","lot","really","deep","blue","more","beautiful"],
    fr: ["nous","avons","pas","encore","beaucoup","cette","glace","bleu"]
  },
};
