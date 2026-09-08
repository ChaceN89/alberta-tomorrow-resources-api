/**
 * @file 11-WhereDoesWaterFromTheSnowDomeGo.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the They both flow up to the Arctic Ocean via the MacKenzie River. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whereDoesWaterFromTheSnowDomeGoVideo = {
  id: "goi-11g-where-does-water-from-the-snowdome",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Where does water from the Snow Dome go?",
    fr: "Où va l’eau venant de Snow Dome?"
  },

  description: {
    en: "Listen to Peter Lemieux as he discusses where water from Snow Dome ends up.",
    fr: "Écoutez Peter Lemieux parler d’où finit l’eau qui vient de Snow Dome."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=ZS8TG4_q24A",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["they","both","flow","arctic","ocean","via","mackenzie","river"],
    fr: ["toutes","deux","jettent","dans","ocean","arctique","par","intermediaire"]
  },
};
