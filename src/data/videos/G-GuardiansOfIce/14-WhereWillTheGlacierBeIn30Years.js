/**
 * @file 14-WhereWillTheGlacierBeIn30Years.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Whats your prediction? video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whereWillTheGlacierBeIn30YearsVideo = {
  id: "goi-14g-where-will-the-glacier-be-in-30-years",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Whats your prediction?",
    fr: "Quelle est votre prédiction ?"
  },

  description: {
    en: "Listen to Peter Lemieux as he discussed where the Athabasca Glacier may be in 30 years.",
    fr: "Selon vous, où se trouvera cette glace glaciaire dans 10, 20, 30 ou 40 ans ?"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=HXQLMjomCes",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["whats","your","prediction","abglaciers","climatechange","abwater"],
    fr: ["quelle","est","votre","prediction"]
  },
};
