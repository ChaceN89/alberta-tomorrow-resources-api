/**
 * @file 21-EndocrineDisruptors.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Dr. Ali Criscitiello talks about melting glaciers and what this has to do with Endocrine Disruptors. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const endocrineDisruptorsVideo = {
  id: "goi-21g-endocrine-disruptors",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Endocrine Disruptors",
    fr: "Perturbateurs endocriniens"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about melting glaciers and what this has to do with Endocrine Disruptors.",
    fr: "Ali Criscitiello, Ph. D., parle de la fonte des glaciers et de ce que cela a à voir avec les perturbateurs endocriniens."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=fjJZesxnfBo",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/75a19241-4149-455f-b43b-91a41920ac28/thumbnails/obs_88cdd5c9-8aa9-4c48-870b-3791889c946f_tumb.0000042.jpg",
    is360: false
  },

  searchTerms: {
    en: ["ali", "criscitiello", "talks", "about", "melting", "glaciers", "has", "endocrine"],
    fr: ["ali", "criscitiello", "parle", "fonte", "des", "glaciers", "que", "cela"]
  },
};
