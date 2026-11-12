/**
 * @file 10-WhereDoGlaciersForm.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the If you were to go across the valley you are not going to find anything over there. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "goi-10g-where-do-glaciers-form";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whereDoGlaciersFormVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Where do glaciers form?",
    fr: "Où se forment les glaciers?"
  },

  description: {
    en: "Listen to Peter Lemieux discuss where glaciers form in the Rocky Mountains.",
    fr: "Écoutez Peter Lemieux expliquer où les glaciers se forment dans les montagnes Rocheuses."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Y8IaKMp4dAk",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["you","were","across","valley","not","going","find","anything"],
    fr: ["vous","traversiez","vallee","trouveriez","plus","rien","bas"]
  },
} satisfies VideoSource;
