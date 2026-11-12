/**
 * @file 17-HowMuchGlacialIceAreWeLosing.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the and what we use these pipes for, video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-17g-how-much-glacial-ice-are-we-losing";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const howMuchGlacialIceAreWeLosingVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How much glacial ice are we losing?",
    fr: "Combien de glace des glaciers perdons-nous?"
  },

  description: {
    en: "Watch as Peter Lemieux discusses how much ice the Athabasca Glacier is losing in one season and how he knows this.",
    fr: "Écoutez Peter Lemieux expliquer combien de glace perd le glacier Athabasca en une saison, et comment il le sait."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Htf4sCgOyvc",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["use","these","pipes","abglaciers","climatechange","abwater"],
    fr: ["voici","quoi","servent","ces","poteaux"]
  },
} satisfies VideoSource;
