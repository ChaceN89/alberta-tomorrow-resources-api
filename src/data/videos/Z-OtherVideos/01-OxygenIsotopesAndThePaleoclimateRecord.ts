/**
 * @file 01-OxygenIsotopesAndThePaleoclimateRecord.ts
 * @module Data/Videos/OtherVideos
 * @desc Contains localized metadata and media information for the Oxygen Isotopes and the Paleoclimate Record video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "oth-01z-oxygen-isotopes";
const videoAssets = getVideoAssetPaths(VideoCategory.OTHER.id, videoId);

export const oxygenIsotopesAndThePaleoclimateRecordVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.OTHER.id,

  title: {
    en: "Oxygen Isotopes and the Paleoclimate Record",
    fr: "Isotopes de l’oxygène et les archives paléoclimatiques"
  },

  description: {
    en: "A brief explanation of oxygen isotopes, and how the oxygen isotope signal can be used to study past climates.",
    fr: "Courte explication des isotopes de l’oxygène, et de l’utilisation de ces isotopes pour étudier les climats passés."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=YfRDNyB1XOY",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: "https://www.youtube.com/@suzanneobrien3361"
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "oxygen-isotopes",
      "paleoclimate",
      "climate-change",
      "climate-science",
      "isotope-geochemistry",
      "land-stewardship"
    ],
    fr: [
      "isotopes",
      "oxygene",
      "archives",
      "paleoclimatiques",
      "climats",
      "passes"
    ]
  }
} satisfies VideoSource;
