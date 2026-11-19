/**
 * @file 02-ColourOfTheIce.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the We have'nt seen a lot of really deep blue or more beautiful blue like ice blue colours. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-02g-colour-of-the-ice";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const colourOfTheIceVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Colour of the ice",
    fr: "La couleur de la glace"
  },

  description: {
    en: "Listen to Peter Lemieux talk about why glacier ice is sometimes blue.",
    fr: "Écoutez Peter Lemieux expliquer pourquoi la glace des glaciers est parfois bleue."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=7Ld_jQCuJzE",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["have","seen","lot","really","deep","blue","more","beautiful"],
    fr: ["nous","avons","pas","encore","beaucoup","cette","glace","bleu"]
  },
} satisfies VideoSource;
