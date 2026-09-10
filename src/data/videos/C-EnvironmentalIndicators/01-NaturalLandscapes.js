/**
 * @file 01-NaturalLandscapes.js
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Natural Landscapes video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const naturalLandscapesVideo = {
  id: "env-01c-natural-landscapes",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Natural Landscapes",
    fr: "Paysages naturels"
  },

  description: {
    en: "Explore Alberta’s natural regions and their diverse ecosystems, from grasslands and boreal forests to mountains and wetlands.",
    fr: "Découvrez les régions naturelles de l’Alberta dans cette vidéo. Apprenez-en davantage sur les caractéristiques de chaque région ainsi que sur les types d’utilisation des terres dans chacune d’elles."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Lx94jZ9ZSBY",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/edc8301613324a6699d44e7e8ad91427/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/7d120260-62f4-48f9-8d72-63fb519fd9a7/thumbnails/Natural Landscapes v3_H264_tumb.0000064.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "land use",
      "ab natural landscapes",
      "ab ecoregions"
    ],

    fr: [
      "utilisation des terres",
      "paysages naturels alberta",
      "ecoregions alberta"
    ]
  },
};
