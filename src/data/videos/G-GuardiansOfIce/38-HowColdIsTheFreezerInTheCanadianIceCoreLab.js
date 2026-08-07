/**
 * @file 38-HowColdIsTheFreezerInTheCanadianIceCoreLab.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the How Cold is the freezer in the Canadian Ice Core Lab? video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const howColdIsTheFreezerInTheCanadianIceCoreLabVideo = {
  id: "goi-38g-how-cold-is-the-freezer-in-the",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How Cold is the freezer in the Canadian Ice Core Lab?",
    fr: "À quel point le congélateur du Laboratoire canadien des carottes de glace est-il froid?"
  },

  description: {
    en: "Dr. Alison Criscitiello demonstrated how she cuts ice cores for analysis at the Canadian Ice Core Lab at the University of Alberta.",
    fr: "Ali Criscitiello, Ph. D., montre comment elle coupe des carottes de glace pour les analyser dans le Laboratoire canadien des carottes de glace de l’Université de l’Alberta."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=o4lpNdvjl98",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["cold","freezer","canadian","ice","core","lab","abglaciers","climatechange"],
    fr: ["quel","point","congelateur","laboratoire","canadien","des","carottes","glace"]
  },
};
