/**
 * @file 34-WhereDoWeFindGlaciers.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the We find glaciers across all Alberta. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whereDoWeFindGlaciersVideo = {
  id: "goi-34g-where-do-we-find-glaciers",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "We find glaciers across all Alberta.",
    fr: "On trouve des glaciers partout en Alberta."
  },

  description: {
    en: "Dr. Ali Criscitiello discusses where we find glaciers.",
    fr: "Principalement dans un corridor orienté du nord au sud qui commence juste à l’ouest d’ici, dans la région d’Edmonton."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=22vQm0cfKnI",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["find","glaciers","across","all","alberta","abglaciers","climatechange","abwater"],
    fr: ["trouve","des","glaciers","partout","alberta"]
  },
};
