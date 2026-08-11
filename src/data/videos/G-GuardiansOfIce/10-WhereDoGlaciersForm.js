/**
 * @file 10-WhereDoGlaciersForm.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the If you were to go across the valley you are not going to find anything over there. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whereDoGlaciersFormVideo = {
  id: "goi-10g-where-do-glaciers-form",

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
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Y8IaKMp4dAk",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["you","were","across","valley","not","going","find","anything"],
    fr: ["vous","traversiez","vallee","trouveriez","plus","rien","bas"]
  },
};
