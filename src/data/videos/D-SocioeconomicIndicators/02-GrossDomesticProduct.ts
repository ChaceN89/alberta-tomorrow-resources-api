/**
 * @file 02-GrossDomesticProduct.ts
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Gross Domestic Product video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "soc-02d-gdp";
const videoAssets = getVideoAssetPaths(VideoCategory.SOCIO_ECONOMIC_INDICATORS.id, videoId);

export const grossDomesticProductVideo = {
  id: videoId,

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
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=u9_-Oz9W3Dg",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
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
} satisfies VideoSource;
