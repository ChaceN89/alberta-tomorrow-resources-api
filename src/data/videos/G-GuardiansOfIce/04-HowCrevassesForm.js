/**
 * @file 04-HowCrevassesForm.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the You know so you get tremendous volumes of water coming off here. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const howCrevassesFormVideo = {
  id: "goi-04g-how-crevasses-form",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "You know so you get tremendous volumes of water coming off here.",
    fr: "Vous savez, des volumes d’eau énormes s’écoulent d’ici chaque année."
  },

  description: {
    en: "Listen to Peter Lemieux talk about how crevasses form in glaciers.",
    fr: "La fonte se produit principalement à la surface, mais l’eau de fonte s’écoule ensuite vers le bas."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=QbotXyLZXiQ",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/abc02ad4-803a-46a3-a40a-30f67c5deaab/thumbnails/obs_4e61c978-3fd4-41c1-8d01-637b2a629580_tumb.0000011.jpg",
    is360: false
  },

  searchTerms: {
    en: ["you","know","get","tremendous","volumes","water","coming","off"],
    fr: ["vous","savez","des","volumes","eau","enormes","ecoulent","ici"]
  },
};
