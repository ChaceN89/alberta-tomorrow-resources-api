/**
 * @file 33-WhatCanWeDoToProtectAlbertaGlaciers.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Well sometimes it seems lika a far away problem that one person can't impact. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whatCanWeDoToProtectAlbertaGlaciersVideo = {
  id: "goi-33g-what-can-we-do-to-protect-alberta",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "What can we do to protect Alberta glaciers?",
    fr: "Que pouvons-nous faire pour protéger les glaciers de l’Alberta?"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about what we can do to protect Alberta glaciers.",
    fr: "Ali Criscitiello, Ph. D., explique ce que nous pouvons faire pour protéger les glaciers de l’Alberta."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=iHKg1WAQ3h8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["well","sometimes","seems","lika","far","away","problem","one"],
    fr: ["bien","parfois","cela","semble","etre","probleme","lointain","une"]
  },
};
