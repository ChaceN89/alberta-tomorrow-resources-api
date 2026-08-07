/**
 * @file 12-WhereWasTheAthabascaGlacierIn2006.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Why don't we go over and take a look at these two boulders. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whereWasTheAthabascaGlacierIn2006Video = {
  id: "goi-12g-where-was-the-athabasca-glacier-in-2006",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Why don't we go over and take a look at these two boulders.",
    fr: "Pourquoi ne pas aller voir ces deux rochers de plus près ?"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how far the glacier has receded since 2006 and how he knows!",
    fr: "Parce qu’en 2006, j’ai trouvé ces rochers à côté du glacier et je me suis dit que ce serait un bon point de repère."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=NCKgmaIkIm0",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["don","over","take","look","these","two","boulders","abglaciers"],
    fr: ["pourquoi","pas","aller","voir","ces","deux","rochers","plus"]
  },
};
