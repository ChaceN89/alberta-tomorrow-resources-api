/**
 * @file 20-ThisIsTheAthabascaGlacier.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the This is the Athabasca Glacier video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const thisIsTheAthabascaGlacierVideo = {
  id: "goi-20g-this-is-the-athabasca-glacier",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "This is the Athabasca Glacier",
    fr: "Voici le glacier Athabasca"
  },

  description: {
    en: "Walk with us to the Athabasca Glacier",
    fr: "Venez marcher avec nous jusqu’au glacier Athabasca."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=KF1JBsGdyZY",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/c6678f98-a6f3-4ca1-ab0b-4082cc0fc877/thumbnails/This%20is%20the%20Athabasca%20glacier._tumb.0000007.jpg",
    is360: false
  },

  searchTerms: {
    en: ["athabasca","glacier","abglaciers","climatechange","abwater"],
    fr: ["voici","glacier","athabasca"]
  },
};
