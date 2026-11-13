/**
 * @file 03-ThePowerOfAlbertaTomorrow.ts
 * @module Data/Videos/AlbertaTomorrowPlatform
 * @desc Contains localized metadata for The Power of Alberta Tomorrow video.
 *
 * @author Chace Nielson
 * @created Nov 13, 2026
 * @updated Nov 13, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "atp-03x-power-of-alberta-tomorrow";
const videoAssets = getVideoAssetPaths(VideoCategory.ALBERTA_TOMORROW_PLATFORM.id, videoId);

export const powerOfAlbertaTomorrowVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ALBERTA_TOMORROW_PLATFORM.id,

  title: {
    en: "The Power of Alberta Tomorrow",
    fr: "La puissance d’Alberta Tomorrow"
  },

  description: {
    en: "Discover how Alberta Tomorrow helps people explore land-use planning and possible futures for Alberta.",
    fr: "Découvrez comment Alberta Tomorrow permet d’explorer l’aménagement du territoire et différents avenirs possibles pour l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=7RmwsUh1-0E",
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
      "land-use planning",
      "future planning"
    ],
    fr: [
      "alberta tomorrow",
      "aménagement du territoire",
      "planification de l’avenir"
    ]
  }
} satisfies VideoSource;
