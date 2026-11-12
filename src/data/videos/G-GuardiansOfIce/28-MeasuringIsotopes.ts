/**
 * @file 28-MeasuringIsotopes.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the This machine measures the heavy and light isotopes of oxygen, oxygen18 and oxygen16. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-28g-measuring-isotopes";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const measuringIsotopesVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Measuring Isotopes",
    fr: "Mesurer les isotopes"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses how her equipment measures oxygen isotopes in Alberta glaciers and what this tells us.",
    fr: "Ali Criscitiello, Ph. D., explique comment son équipement mesure les isotopes de l’oxygène présents dans les glaciers de l’Alberta et ce qu’ils nous indiquent."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=pHCFmnNBeL0",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["machine","measures","heavy","light","isotopes","oxygen","oxygen18","oxygen16"],
    fr: ["cette","machine","mesure","les","deux","principaux","isotopes","oxygene"]
  },
} satisfies VideoSource;
