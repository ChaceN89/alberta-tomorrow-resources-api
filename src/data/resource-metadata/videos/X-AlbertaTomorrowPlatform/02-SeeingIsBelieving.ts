/**
 * @file 02-SeeingIsBelieving.ts
 * @module Data/Videos/AlbertaTomorrowPlatform
 * @desc Contains localized metadata for Alberta Emerald Foundation's video.
 *
 * @author Chace Nielson
 * @created Nov 13, 2026
 * @updated Nov 13, 2026
 *
 * @dependencies VideoCategory, Language
 * @notes French metadata is available; the video is presented in English.
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "atp-02x-seeing-is-believing";
const videoAssets = getVideoAssetPaths(VideoCategory.ALBERTA_TOMORROW_PLATFORM.id, videoId);

export const seeingIsBelievingVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ALBERTA_TOMORROW_PLATFORM.id,

  title: {
    en: "Seeing is Believing: A Legacy of Providing EdTech for Sustainability to Alberta Students",
    fr: "Voir pour y croire : un héritage de technologies éducatives au service du développement durable des élèves de l’Alberta"
  },

  description: {
    en: "Produced by the Alberta Emerald Foundation: 2022",
    fr: "Produit par l’Alberta Emerald Foundation en 2022."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=MHDH_m0agFM",
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
      "alberta tomorrow",
      "seeing is believing",
      "alberta emerald foundation",
      "sustainability education",
      "educational technology"
    ],
    fr: [
      "alberta emerald foundation",
      "développement durable",
      "éducation environnementale",
      "technologies éducatives"
    ]
  }
} satisfies VideoSource;
