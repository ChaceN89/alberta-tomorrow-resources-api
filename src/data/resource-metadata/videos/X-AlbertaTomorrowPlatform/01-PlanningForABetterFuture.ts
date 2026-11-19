/**
 * @file 01-PlanningForABetterFuture.ts
 * @module Data/Videos/AlbertaTomorrowPlatform
 * @desc Contains localized metadata for Alberta Tomorrow's planning video.
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

const videoId = "atp-01x-planning-for-a-better-future";
const videoAssets = getVideoAssetPaths(VideoCategory.ALBERTA_TOMORROW_PLATFORM.id, videoId);

export const planningForABetterFutureVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ALBERTA_TOMORROW_PLATFORM.id,

  title: {
    en: "Alberta Tomorrow - Planning for a Better Future",
    fr: "Alberta Tomorrow - Planifier un avenir meilleur"
  },

  description: {
    en: "Balancing environment and economy is tough, but essential. Watch this video to see why and how we can plan for a better future.",
    fr: "Il est difficile, mais essentiel, de concilier l’environnement et l’économie. Regardez cette vidéo pour comprendre pourquoi et comment nous pouvons planifier un avenir meilleur."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Q6-l7HymJTQ",
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
      "planning for a better future",
      "environment and economy"
    ],
    fr: [
      "alberta tomorrow",
      "avenir meilleur",
      "environnement",
      "économie",
      "planification durable"
    ]
  }
} satisfies VideoSource;
