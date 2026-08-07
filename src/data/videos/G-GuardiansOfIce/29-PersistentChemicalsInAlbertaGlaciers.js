/**
 * @file 29-PersistentChemicalsInAlbertaGlaciers.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the A persistent chemical is something that doesn't break down in the environment. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const persistentChemicalsInAlbertaGlaciersVideo = {
  id: "goi-29g-persistent-chemicals-in-alberta",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "A persistent chemical is something that doesn't break down in the environment.",
    fr: "Un produit chimique persistant est une substance qui se dégrade très lentement dans l’environnement."
  },

  description: {
    en: "Dr. Ali Criscitiello discusses what persistent chemicals are and the danger of them being released after being trapped in Alberta glacier ice.",
    fr: "Plus nous en introduisons dans l’environnement, plus il s’y accumule simplement."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=dlIX3EisMpo",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["persistent","chemical","something","doesn","break","down","environment","abglaciers"],
    fr: ["produit","chimique","persistant","est","une","substance","qui","degrade"]
  },
};
