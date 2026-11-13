/**
 * @file 03-SandDunesOfAlberta.ts
 * @module Data/Videos/OtherVideos
 * @desc Contains localized metadata for the Athabasca sand dunes video.
 *
 * @author Chace Nielson
 * @created Nov 13, 2026
 * @updated Nov 13, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "oth-03z-sand-dunes-of-alberta";
const videoAssets = getVideoAssetPaths(VideoCategory.OTHER.id, videoId);

export const sandDunesOfAlbertaVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.OTHER.id,

  title: {
    en: "Sand Dunes of Alberta: Amazing Ecological Areas in Alberta, Canada",
    fr: "Dunes de sable de l’Alberta : des milieux écologiques remarquables au Canada"
  },

  description: {
    en: "I head out to explore the Athabasca sand dunes, which are located in north eastern Alberta, Canada. Living in Alberta, Canada, you might not expect to find sand dunes, but as you will see, this is truly one of the amazing ecological areas to be found in the province.",
    fr: "Je pars explorer les dunes de sable de l’Athabasca, situées dans le nord-est de l’Alberta, au Canada. Si vous vivez en Alberta, vous ne vous attendez peut-être pas à y trouver des dunes de sable. Comme vous le verrez, il s’agit vraiment de l’un des milieux écologiques remarquables de la province."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=KrkcyfUn274",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: "https://www.youtube.com/@LetsGoOutdoors"
  },

  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: null
  },

  searchTerms: {
    en: [
      "sand dunes",
      "athabasca",
      "ecological areas",
      "alberta",
      "canada"
    ],
    fr: [
      "dunes de sable",
      "athabasca",
      "écologie",
      "alberta",
      "canada"
    ]
  }
} satisfies VideoSource;
