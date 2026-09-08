/**
 * @file 01-OxygenIsotopesAndThePaleoclimateRecord.js
 * @module Data/Videos/OtherVideos
 * @desc Contains localized metadata and media information for the Oxygen Isotopes and the Paleoclimate Record video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const oxygenIsotopesAndThePaleoclimateRecordVideo = {
  id: "oth-01z-oxygen-isotopes",

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
    type: "youtube",
    url: "https://www.youtube.com/watch?v=YfRDNyB1XOY",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/oxygenisotopes.jpg",
    is360: true
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
};
