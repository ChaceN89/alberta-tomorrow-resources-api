/**
 * @file 02-GrossDomesticProduct.js
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Gross Domestic Product video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const grossDomesticProductVideo = {
  id: "soc-02d-gdp",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Gross Domestic Product",
    fr: "Produit intérieur brut"
  },

  description: {
    en: "GDP is based on land use for oil and gas, forestry, and agriculture. Learn how economic development influences Alberta's GDP.",
    fr: "Le PIB repose sur l’utilisation des terres dédiées à la production de pétrole et de gaz, à la foresterie et à l’agriculture. Apprenez comment le développement économique influence le PIB de l’Alberta."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=u9_-Oz9W3Dg",
    cloudFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/b8a59f71ae254c71ab89fcb1bdc48d07/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/e6bbc086-0392-43b3-9a2b-3aa3fef83eea/thumbnails/GDP v2_H264_tumb.0000011.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "ab gdp",
      "ab economy",
      "land use"
    ],

    fr: [
      "pib alberta",
      "economie alberta",
      "utilisation des terres"
    ]
  },
};
