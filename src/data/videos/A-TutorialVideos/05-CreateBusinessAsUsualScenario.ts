/**
 * @file 05-CreateBusinessAsUsualScenario.ts
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Create a Business as Usual Scenario tutorial video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "tutorial-05a-create-bau-scenario";
const videoAssets = getVideoAssetPaths(VideoCategory.TUTORIALS.id, videoId);

export const createBusinessAsUsualScenarioVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "How to Create a Business as Usual (BAU) Scenario",
    fr: "Comment créer un scénario de « maintien du statu quo » "
  },

  description: {
    en: "A BAU scenario gives you a glimpse of a possible future, one that carries current trends in landuse into the future.",
    fr: "Un scénario de « maintien du statu quo » vous donne un aperçu de ce à quoi pourrait ressembler l’avenir; ce scénario projette les tendances actuelles en matière d’utilisation des terres dans l’avenir."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=gWm7yWBkPHo",
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
      "bau",
      "scenario",
      "future",
      "land use"
    ],

    fr: [
      "statu quo",
      "scenario",
      "avenir",
      "utilisation des terres"
    ]
  },
} satisfies VideoSource;
