/**
 * @file 03-EcologicalGoodsAndServices.ts
 * @module Data/Videos/UnderstandingTheLandscape
 * @desc Contains localized metadata and media information for the Ecological Goods and Services video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

import type { VideoSource } from "../../videoTypes.js";

export const ecologicalGoodsAndServicesVideo = {
  id: "landscape-03b-ecological-goods",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.LANDSCAPE.id,

  title: {
    en: "Ecological Goods and Services",
    fr: "Biens et services écologiques"
  },

  description: {
    en: "An introduction to ecological goods and services.",
    fr: "Une introduction aux biens et services écologiques."
  },

  media: {
    primaryUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/d3af3f5027fc4578bb8a5e661fd15662/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    youtubeUrl: "https://www.youtube.com/watch?v=WBdpkY9KSgs",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/7f76a14f-20e9-430d-bef6-5c08247cad75/thumbnails/Ecological Goods v2_H264_tumb.0000033.jpg",
    is360: false
  },
  subtitles: {
    en: "N/A",
    fr: "N/A"
  },

  searchTerms: {
    en: [
      "egs",
      "ecology",
      "land use",
      "natural capital",
      "ecosystem services"
    ],

    fr: [
      "bse",
      "ecologie",
      "utilisation des terres",
      "capital naturel",
      "services ecosystemiques"
    ]
  },
} satisfies VideoSource;
