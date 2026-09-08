/**
 * @file 07-SeasonalChangeOnTheGlacierAndCryoconite.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Upwards of a metre or more of snow on the ice, but by mid June most of that has gone. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const seasonalChangeOnTheGlacierAndCryoconiteVideo = {
  id: "goi-07g-seasonal-change-on-the-glacier",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Seasonal change on the glacier and cryconite",
    fr: "Changement saisonnier sur le glacer et cryonite"
  },

  description: {
    en: "Listen to Peter Lemieux talk about seasonal changes on the glacier.",
    fr: "Écoutez Peter Lemieux expliquer les changements saisonniers sur le glacier."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=KCKew0PiqOc",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["upwards","metre","more","snow","ice","but","mid","june"],
    fr: ["mois","mai","trouve","souvent","plus","metre","neige","sur"]
  },
};
