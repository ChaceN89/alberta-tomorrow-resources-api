/**
 * @file 04-WaterQualityClimateChangeAndAlbertasGlaciersWebinar.ts
 * @module Data/Videos/UnderstandingTheLandscape
 * @desc Contains localized metadata and media information for the Water Quality, Climate Change and Alberta's Glaciers Webinar video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "landscape-04b-glaciers-webinar";
const videoAssets = getVideoAssetPaths(VideoCategory.LANDSCAPE.id, videoId);

export const waterQualityClimateChangeAndAlbertasGlaciersWebinarVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.LANDSCAPE.id,

  title: {
    en: "Water Quality, Climate Change and Alberta's Glaciers Webinar",
    fr: "Qualité de l’eau, changements climatiques et glaciers de l’Alberta : webinaire"
  },

  description: {
    en: "This webinar was held on May 27, 2020 and features 4 prominent scientists talking about climate change and how it will affect glaciers, glacier melt, water policy and our water quality.",
    fr: "Ce webinaire a eu lieu le 27 mai 2020 et met en vedette 4 scientifiques de renom qui parlent des changements climatiques et de la façon dont ils affecteront les glaciers, la fonte des glaciers, la politique de l’eau et la qualité de notre eau."
  },

  media: {
    
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=Xgb3_I8nagY",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "ab glaciers",
      "climate change",
      "water quality",
      "columbia icefield",
      "athabasca glacier",
      "land use"
    ],

    fr: [
      "glaciers alberta",
      "changements climatiques",
      "qualite de l'eau",
      "champ de glace columbia",
      "glacier athabasca",
      "utilisation des terres"
    ]
  },
} satisfies VideoSource;
