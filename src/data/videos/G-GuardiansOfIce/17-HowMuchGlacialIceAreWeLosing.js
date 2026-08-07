/**
 * @file 17-HowMuchGlacialIceAreWeLosing.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the and what we use these pipes for, video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const howMuchGlacialIceAreWeLosingVideo = {
  id: "goi-17g-how-much-glacial-ice-are-we-losing",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "and what we use these pipes for,",
    fr: "Et voici à quoi servent ces poteaux"
  },

  description: {
    en: "Watch as Peter Lemieux discusses how much ice the Athabasca Glacier is losing in one season an how he knows this.",
    fr: "qui sont d’ailleurs emprisonnées dans la glace"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Htf4sCgOyvc",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["use","these","pipes","abglaciers","climatechange","abwater"],
    fr: ["voici","quoi","servent","ces","poteaux"]
  },
};
