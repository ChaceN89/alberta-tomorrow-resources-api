/**
 * @file 19-FishingOnTheBow.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Fishing On The Bow video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "stoney-19h-fishing-on-the-bow";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const fishingOnTheBowVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.STONEY_VOICES.id,

  title: {
    en: "Fishing On The Bow",
    fr: "Pêcher dans la Bow"
  },

  description: {
    en: "The Stoney used to use the fish from the Bow River, but they don't eat the fish anymore. They enjoy the river but they don't eat the fish.",
    fr: "Autrefois, les Stoney mangeaient le poisson qu’ils pêchaient dans la rivière Bow, mais ils n’osent plus le faire. Ils profitent de la rivière, mais ils ne mangent plus le poisson."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://youtu.be/vN_X59jznLE?si=qs742rPJ9WvbOe1y",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    position: "top-center",
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "indigenousstories",
      "stoneynakoda",
      "indigenouslanduse",
      "morley",
      "landuse",
      "abwater",
      "alberta",
      "stoneyvoices",
      "traditionallanduse"
    ],
    fr: [
      "pecher",
      "bow",
      "autrefois",
      "stoney",
      "mangeaient",
      "poisson",
      "ils",
      "pechaient"
    ]
  }
} satisfies VideoSource;
