/**
 * @file 43-EveryYearItsFurtherToGetToWork.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Now you can see just how much we've lost. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-43g-every-year-its-further-to-get-to-work";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const everyYearItsFurtherToGetToWorkVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Every year its further to get to work",
    fr: "Chaque année, c’est plus loin pour se rendre au travail"
  },

  description: {
    en: "Listen to Peter Lemieux talk about the receding of the Athabasca Glacier.",
    fr: "Écoutez Peter Lemieux parler du recul du glacier Athabasca."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=efoZxoc0_RE",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["now","you","can","see","just","much","lost","abglaciers"],
    fr: ["aujourd","hui","vous","pouvez","constater","quel","point","nous"]
  },
} satisfies VideoSource;
