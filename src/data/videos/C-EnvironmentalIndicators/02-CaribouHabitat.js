/**
 * @file 02-CaribouHabitat.js
 * @module Data/Videos/EnvironmentalIndicators
 * @desc Contains localized metadata and media information for the Caribou Habitat video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const caribouHabitatVideo = {
  id: "env-02c-caribou-habitat",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ENVIRONMENTAL_INDICATORS.id,

  title: {
    en: "Caribou Habitat",
    fr: "Habitat du caribou"
  },

  description: {
    en: "Explore how caribou habitat is impacted by human development and how best practices can reduce disturbances in their environment.",
    fr: "Voyez l'effet du developpement humain sur l'habitat du caribou et comment les bonnes pratiques peuvent reduire les perturbations dans leur environnement."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=xiBz_Vov6H0",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/92b720ba2d60441d97a416358c3b700e/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/6d77c369-dc90-454f-a833-ace354a38e40/thumbnails/Caribou Habitat v4_H264_tumb.0000035.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "caribou habitat",
      "ab caribou",
      "woodland caribou",
      "threatened species",
      "land use",
      "ab wildlife"
    ],

    fr: [
      "habitat du caribou",
      "caribou alberta",
      "caribou des bois",
      "espece menacee",
      "utilisation des terres",
      "faune alberta"
    ]
  },
};
