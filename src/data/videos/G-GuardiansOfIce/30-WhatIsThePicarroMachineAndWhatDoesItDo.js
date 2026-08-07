/**
 * @file 30-WhatIsThePicarroMachineAndWhatDoesItDo.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the This Picarro is an oxygen isotope analyzer. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whatIsThePicarroMachineAndWhatDoesItDoVideo = {
  id: "goi-30g-what-is-the-picarro-machine",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "This Picarro is an oxygen isotope analyzer.",
    fr: "Cet appareil Picarro est un analyseur isotopique de l’oxygène."
  },

  description: {
    en: "Dr. Ali Criscitiello of the Canadian Ice Core Lab discusses some of the technology she uses to study Alberta glaciers.",
    fr: "Ce qu’il fait, c’est qu’il mesure principalement les deux principaux isotopes de l’oxygène, à savoir l’oxygène-16 et l’oxygène-18."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Ps7dhpC1Gec",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["picarro","oxygen","isotope","analyzer","abglaciers","climatechange","abwater"],
    fr: ["cet","appareil","picarro","est","analyseur","isotopique","oxygene"]
  },
};
