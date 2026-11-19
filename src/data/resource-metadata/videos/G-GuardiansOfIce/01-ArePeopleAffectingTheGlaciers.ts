/**
 * @file 01-ArePeopleAffectingTheGlaciers.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Well it might affect it in some small way but what I often tend to say instead. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-01g-are-people-affecting-the-glaciers";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const arePeopleAffectingTheGlaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Are People Affecting the Glaciers?",
    fr: "Les gens nuisent-ils aux glaciers?"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how people are affecting the glaciers.",
    fr: "Écoutez Peter Lemieux parler de l’effet des gens sur les glaciers."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Ns7BiGb3cMQ",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["well","might","affect","some","small","way","but","often"],
    fr: ["bien","cela","peut","avoir","certain","effet","mais","probablement"]
  },
} satisfies VideoSource;
