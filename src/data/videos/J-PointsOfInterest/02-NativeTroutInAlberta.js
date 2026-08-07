/**
 * @file 02-NativeTroutInAlberta.js
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Native Trout in Alberta video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const nativeTroutInAlbertaVideo = {
  id: "poi-02j-native-trout-in-alberta",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Native Trout in Alberta",
    fr: "N/A"
  },

  description: {
    en: "Watch this recording of a LiveStream presented by CPAWS SAB, Trout Unlimited and Cows and Fish to learn about Native Trout in Alberta.",
    fr: "N/A"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=lztrWhXpnHg",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/7e1583c8-8c39-47f1-89ad-12c7433c8798/thumbnails/obs_7db174da-e122-4667-82c8-824f6787c863_tumb.0000514.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "water-quality",
      "native-trout",
      "cpaws",
      "trout-unlimited",
      "recreation",
      "agriculture"
    ],
    fr: []
  }
};
