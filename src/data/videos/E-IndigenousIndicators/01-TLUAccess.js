/**
 * @file 01-TLUAccess.js
 * @module Data/Videos/IndigenousIndicators
 * @desc Contains localized metadata and media information for the TLU Access video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const tluAccessVideo = {
  id: "ind-01e-tlu-access",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.INDIGENOUS_INDICATORS.id,

  title: {
    en: "TLU Access",
    fr: "Acces a l'UTT"
  },

  description: {
    en: "Traditional Land Use Access (TLU Access) measures land accessibility for Indigenous peoples engaging in traditional practices. It reflects accessible natural areas not within protected zones.",
    fr: "L'acces a l'utilisation des terres traditionnelles (UTT) mesure l'accessibilite aux terres pour les Autochtones pour entreprendre des activites liees aux utilisations traditionnelles. Elle tient compte des regions naturelles accessibles situees a l'exterieur des aires protegees."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=yz52Ysp_meQ",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/31daf805c8d44748a6a14f7d38cc0084/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/a7edc400-3c29-48bb-bcc6-296883adc89c/thumbnails/Using%20the%20Land_tumb.0000000.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "tlu",
      "indigenous access",
      "traditional use",
      "land use"
    ],

    fr: [
      "utt",
      "acces autochtone",
      "utilisation traditionnelle",
      "utilisation des terres"
    ]
  },
};
