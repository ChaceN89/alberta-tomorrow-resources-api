/**
 * @file 31-SeaLevelRise.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Dr. Ali Criscitiello discusses how glaciers contribute to sea level rise. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const seaLevelRiseVideo = {
  id: "goi-31g-sea-level-rise",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Sea level rise",
    fr: "Élévation du niveau des mers"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses how glaciers contribute to sea level rise.",
    fr: "Ali Criscitiello, Ph. D., explique comment les glaciers contribuent à l’élévation du niveau des mers."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=uJ0ucfNs_io",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["ali", "criscitiello", "discusses", "glaciers", "contribute", "sea", "level", "rise"],
    fr: ["ali", "criscitiello", "explique", "comment", "les", "glaciers", "contribuent", "elevation"]
  },
};
