/**
 * @file 10-IndigenousVoicesInAlbertaTomorrow.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Indigenous Voices in Alberta Tomorrow tutorial video.
 *
 * @author Chace Nielson
 * @created Sep 09, 2026
 * @updated Sep 09, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "tutorial-10a-indigenous-voices";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const indigenousVoicesInAlbertaTomorrowVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "Indigenous Voices in Alberta Tomorrow",
    fr: "Voix autochtones dans Alberta Tomorrow"
  },

  description: {
    en: "This video shows land use planning through an Indigenous lens in the Alberta Tomorrow simulation tool, including how the southern half of the Stoney Nakoda Traditional Territory has changed and may change in the future using indicators developed with Stoney Elders and Knowledge Keepers.",
    fr: "Cette video presente la planification de l'utilisation des terres selon une perspective autochtone dans Alberta Tomorrow, y compris l'evolution passee et future possible de la moitie sud du territoire traditionnel Stoney Nakoda a l'aide d'indicateurs elabores avec des aines et des gardiens du savoir Stoney."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=r-Yk6CjEKP8",
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
      "indigenous voices",
      "stoney nakoda",
      "land use planning",
      "traditional territory"
    ],

    fr: [
      "voix autochtones",
      "stoney nakoda",
      "planification territoriale",
      "territoire traditionnel"
    ]
  },
} satisfies VideoSource;
