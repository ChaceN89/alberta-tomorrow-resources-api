/**
 * @file 04-AlbertaTomorrowInTheClassroom.ts
 * @module Data/Videos/AlbertaTomorrowPlatform
 * @desc Contains localized metadata for Alberta Tomorrow in the Classroom.
 *
 * @author Chace Nielson
 * @created Nov 13, 2026
 * @updated Nov 13, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "atp-04x-alberta-tomorrow-in-the-classroom";
const videoAssets = getVideoAssetPaths(VideoCategory.ALBERTA_TOMORROW_PLATFORM.id, videoId);

export const albertaTomorrowInTheClassroomVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.ALBERTA_TOMORROW_PLATFORM.id,

  title: {
    en: "Alberta Tomorrow in the Classroom",
    fr: "Alberta Tomorrow en classe"
  },

  description: {
    en: "See how Alberta Tomorrow can be used in the classroom.",
    fr: "Découvrez comment Alberta Tomorrow peut être utilisé en classe."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=XcK-MNL1zCg",
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
      "classroom",
      "education"
    ],
    fr: [
      "alberta tomorrow",
      "classe",
      "éducation"
    ]
  }
} satisfies VideoSource;
