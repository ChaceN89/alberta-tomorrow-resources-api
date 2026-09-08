/**
 * @file 02-BeneficialManagementPractices.js
 * @module Data/Videos/UnderstandingTheLandscape
 * @desc Contains localized metadata and media information for the Beneficial Management Practices video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @dependencies
 * - videoCategoryIds.js
 *
 * @notes
 * - The ID is a stable API value and should not be changed.
 * - The current media URL is shared between locales.
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const beneficialManagementPracticesVideo = {
  id: "landscape-02b-management-practices",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.LANDSCAPE.id,

  title: {
    en: "Beneficial Management Practices",
    fr: "Pratiques de gestion bénéfiques"
  },

  description: {
    en: "What are Beneficial Management Practices and how do they affect the future of Alberta? Find out what large companies, farmers, and you can do to minimize the effect on the environment.",
    fr: "Quelles sont les pratiques de gestion bénéfiques et quel effet ont-elles sur l’avenir de l’Alberta? Découvrez ce que les grandes compagnies, les agriculteurs et vous pouvez faire pour réduire au minimum les effets sur l’environnement."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=WBKwcDIqJ0U",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/883ad936d3e74ad29f7aebfa3ae56dc2/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/a3db110f-8d4b-4190-b512-a84cf1472eb5/thumbnails/Management Practices_H264_tumb.0000039.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "beneficial management practices",
      "management",
      "land use",
      "sustainability",
      "industry",
      "agriculture",
      "farmers",
      "environment",
      "future of Alberta"
    ],

    fr: [
      "pratiques de gestion benefiques",
      "gestion",
      "utilisation des terres",
      "durabilite",
      "industrie",
      "agriculture",
      "agriculteurs",
      "environnement",
      "avenir de l'alberta"
    ]
  },


};