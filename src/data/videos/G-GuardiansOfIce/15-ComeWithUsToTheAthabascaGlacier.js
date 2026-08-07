/**
 * @file 15-ComeWithUsToTheAthabascaGlacier.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Come with us to the Athabasca Glacier video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const comeWithUsToTheAthabascaGlacierVideo = {
  id: "goi-15g-come-with-us-to-the-athabasca",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Come with us to the Athabasca Glacier",
    fr: "Venez avec nous jusqu’au glacier Athabasca"
  },

  description: {
    en: "Walk with us the the Athabasca Glacier on the Columbia Icefield.",
    fr: "Venez marcher avec nous au glacier Athabasca sur le champ de glace Columbia."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=IvYUaGfUesM",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["come","athabasca","glacier","abglaciers","climatechange","abwater"],
    fr: ["venez","avec","nous","jusqu","glacier","athabasca"]
  },
};
