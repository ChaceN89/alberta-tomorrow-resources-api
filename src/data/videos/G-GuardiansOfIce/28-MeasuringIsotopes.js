/**
 * @file 28-MeasuringIsotopes.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the This machine measures the heavy and light isotopes of oxygen, oxygen18 and oxygen16. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const measuringIsotopesVideo = {
  id: "goi-28g-measuring-isotopes",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "This machine measures the heavy and light isotopes of oxygen, oxygen18 and oxygen16.",
    fr: "Cette machine mesure les deux principaux isotopes de l’oxygène : l’oxygène-18, qui est l’isotope lourd, et l’oxygène-16, qui est l’isotope léger."
  },

  description: {
    en: "Dr. Ali Criscitiello discusses how her equipment measures oxygen isotopes in Alberta glaciers and what this tells us .",
    fr: "La mesure de ces isotopes dans les carottes de glace est importante parce que le rapport entre l’oxygène-18 et l’oxygène-16 nous permet de reconstituer les températures passées."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=pHCFmnNBeL0",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["machine","measures","heavy","light","isotopes","oxygen","oxygen18","oxygen16"],
    fr: ["cette","machine","mesure","les","deux","principaux","isotopes","oxygene"]
  },
};
