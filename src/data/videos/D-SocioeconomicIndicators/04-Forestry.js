/**
 * @file 04-Forestry.js
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Forestry video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Sep 10, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const forestryVideo = {
  id: "soc-04d-forestry",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Forestry",
    fr: "Foresterie"
  },

  description: {
    en: "Explore forestry in Alberta, from harvesting trees for lumber and paper to its effects on the landscape. Learn how logging and forestry roads affect old-growth forests, carbon storage, and wildlife habitat.",
    fr: "Explorez la foresterie en Alberta, de la récolte des arbres pour produire du bois d’œuvre et du papier à ses effets sur le paysage. Découvrez comment l’exploitation forestière et les chemins forestiers affectent les forêts anciennes, le stockage du carbone et les habitats fauniques."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=157uaHUOKJw",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/82edfc851a914347a416aafc0108d37b/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/741f8b05-8f79-4994-8234-01592f4688e2/thumbnails/Forestry v2_H264_tumb.0000025.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "alberta forestry",
      "timber production",
      "logging",
      "land use",
      "old-growth forests",
      "carbon storage",
      "wildlife habitat"
    ],

    fr: [
      "foresterie en alberta",
      "production de bois d’œuvre",
      "exploitation forestière",
      "utilisation des terres",
      "forêts anciennes",
      "stockage du carbone",
      "habitats fauniques"
    ]
  },
};