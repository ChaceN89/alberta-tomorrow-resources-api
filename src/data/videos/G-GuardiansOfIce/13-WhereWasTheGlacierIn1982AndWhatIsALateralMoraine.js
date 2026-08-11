/**
 * @file 13-WhereWasTheGlacierIn1982AndWhatIsALateralMoraine.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Yeah, exactly. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whereWasTheGlacierIn1982AndWhatIsALateralMoraineVideo = {
  id: "goi-13g-where-was-the-glacier-in-1982",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Where was the glacier in 1982 and what is a lateral moraine?",
    fr: "Où était le glacier en 1982 et qu’est-ce qu’une moraine latérale?"
  },

  description: {
    en: "Listen to Peter Lemieux as he discusses where the Athabasca glacier was in 1982.",
    fr: "Écoutez Peter Lemieux expliquer où se situait le glacier Athabasca en 1982."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=xYQocIUXHQU",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["yeah","exactly","abglaciers","climatechange","abwater"],
    fr: ["oui","exactement"]
  },
};
