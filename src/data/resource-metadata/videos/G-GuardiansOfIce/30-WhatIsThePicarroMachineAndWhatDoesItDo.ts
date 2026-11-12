/**
 * @file 30-WhatIsThePicarroMachineAndWhatDoesItDo.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the This Picarro is an oxygen isotope analyzer. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-30g-what-is-the-picarro-machine";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whatIsThePicarroMachineAndWhatDoesItDoVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "What is the Picarro Machine and what does it do?",
    fr: "Qu’est-ce que l’instrument Piccaro et que mesure-t-il?"
  },

  description: {
    en: "Dr. Ali Criscitiello of the Canadian Ice Core Lab discusses some of the technology she uses to study Alberta glaciers.",
    fr: "La glaciologue Ali Criscitiello, Ph. D., du Laboratoire canadien des carottes de glace (CICL) parle des technologies qu’elle utilise pour étudier les glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Ps7dhpC1Gec",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["picarro","oxygen","isotope","analyzer","abglaciers","climatechange","abwater"],
    fr: ["cet","appareil","picarro","est","analyseur","isotopique","oxygene"]
  },
} satisfies VideoSource;
