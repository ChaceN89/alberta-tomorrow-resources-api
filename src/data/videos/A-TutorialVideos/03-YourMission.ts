/**
 * @file 03-YourMission.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Your Mission tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "tutorial-03a-your-mission";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const yourMissionVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "Your Mission",
    fr: "Votre mission"
  },

  description: {
    en: "An overview of the mission you will accomplish using Alberta Tomorrow",
    fr: "Un aperçu de la mission que vous accomplirez à l’aide d’Alberta Tomorrow."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=yNljbKNBI1M",
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
      "mission",
      "objectives",
      "learning path",
      "tutorial"
    ],

    fr: [
      "mission",
      "objectifs",
      "parcours d'apprentissage",
      "tutoriel"
    ]
  },
} satisfies VideoSource;
