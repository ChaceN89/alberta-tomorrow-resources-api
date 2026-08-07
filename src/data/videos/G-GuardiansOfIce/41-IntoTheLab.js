/**
 * @file 41-IntoTheLab.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Into the Lab video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const intoTheLabVideo = {
  id: "goi-41g-into-the-lab",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Into the Lab",
    fr: "Dans le laboratoire"
  },

  description: {
    en: "Dr. Ali Criscitiello takes us into the lab used to study Alberta glaciers.",
    fr: "Ali Criscitiello, Ph. D., nous amène dans le laboratoire qu’elle utilise pour étudier les glaciers de l’Alberta."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Nt4575dF2ME",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/acb56cc0-edb4-4cb1-ae5e-d8504ee154d0/thumbnails/obs_9877d8ac-26fc-435d-8e9d-d1acad385aae_tumb.0000004.jpg",
    is360: false
  },

  searchTerms: {
    en: ["lab","abglaciers","climatechange","abwater"],
    fr: ["dans","laboratoire"]
  },
};
