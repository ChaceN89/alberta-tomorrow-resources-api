/**
 * @file 07-SeasonalChangeOnTheGlacierAndCryoconite.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Upwards of a metre or more of snow on the ice, but by mid June most of that has gone. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-07g-seasonal-change-on-the-glacier";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const seasonalChangeOnTheGlacierAndCryoconiteVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Seasonal change on the glacier and cryconite",
    fr: "Changement saisonnier sur le glacer et cryonite"
  },

  description: {
    en: "Listen to Peter Lemieux talk about seasonal changes on the glacier.",
    fr: "Écoutez Peter Lemieux expliquer les changements saisonniers sur le glacier."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=KCKew0PiqOc",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["upwards","metre","more","snow","ice","but","mid","june"],
    fr: ["mois","mai","trouve","souvent","plus","metre","neige","sur"]
  },
} satisfies VideoSource;
