/**
 * @file 32-WatershedGreatDivideWhereDoesWaterFromTheColumbiaIcefieldGo.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the It can truly be continental. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const watershedGreatDivideWhereDoesWaterFromTheColumbiaIcefieldGoVideo = {
  id: "goi-32g-watershed-great-divide",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Watershed Great Divide - Where does water from the Columbia Icefield go?",
    fr: "Ligne continentale de partage des eaux – où l’eau du champ de glace Columbia finit-elle?"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about meltwater from the Columbia Icefield and where it eventually ends up.",
    fr: "Ali Criscitiello, Ph. D., parle de l’eau de fonte du champ de glace Columbia et de l’endroit où elle finit."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=OGN943BCxAk",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["can","truly","continental","abglaciers","climatechange","abwater"],
    fr: ["elle","peut","veritablement","etendre","echelle","continent"]
  },
};
