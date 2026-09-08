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
    en: "Measuring Isotopes",
    fr: "Mesurer les isotopes"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses how her equipment measures oxygen isotopes in Alberta glaciers and what this tells us.",
    fr: "Ali Criscitiello, Ph. D., explique comment son équipement mesure les isotopes de l’oxygène présents dans les glaciers de l’Alberta et ce qu’ils nous indiquent."
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
