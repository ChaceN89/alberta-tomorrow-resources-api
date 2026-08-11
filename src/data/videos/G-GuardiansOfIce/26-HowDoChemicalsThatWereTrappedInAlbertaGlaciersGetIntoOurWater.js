/**
 * @file 26-HowDoChemicalsThatWereTrappedInAlbertaGlaciersGetIntoOurWater.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Well in this case, where glaciers are receiving these chemicals. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const howDoChemicalsThatWereTrappedInAlbertaGlaciersGetIntoOurWaterVideo = {
  id: "goi-26g-how-do-chemicals-that-were-trapped",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How do chemicals that were trapped in Alberta glaciers get into our water?",
    fr: "Comment les produits chimiques emprisonnés dans les glaciers de l’Alberta se retrouvent-ils dans notre eau?"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses how chemicals, once trapped in frozen ice, will get into our water supply, even some that were banned years ago!",
    fr: "Ali Criscitiello, Ph. D., explique comment les produits chimiques, autrefois emprisonnés dans la glace, se retrouvent dans notre approvisionnement en eau, même certains qui ont été interdits bien des années auparavant!"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=2ULp_NlGUHE",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["well","case","glaciers","receiving","these","chemicals","abglaciers","climatechange"],
    fr: ["dans","cas","les","glaciers","recoivent","ces","substances","chimiques"]
  },
};
