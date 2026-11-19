/**
 * @file 42-HowBigIsTheAthabascaGlacier.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the This is a shot of the Athabasca glacier. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-42g-how-big-is-the-athabasca-glacier";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const howBigIsTheAthabascaGlacierVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How big is the Athabasca Glacier",
    fr: "Quelle est la taille du glacier Athabasca?"
  },

  description: {
    en: "Listen to Peter Lemieux talk about the size of the Athabasca Glacier.",
    fr: "Écoutez Peter Lemieux parler de la taille du glacier Athabasca."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=qq7vwd_ahzU",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["shot","athabasca","glacier","abglaciers","climatechange","abwater"],
    fr: ["voici","une","vue","glacier","athabasca"]
  },
} satisfies VideoSource;
