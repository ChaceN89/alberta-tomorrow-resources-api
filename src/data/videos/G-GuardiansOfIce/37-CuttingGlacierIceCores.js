/**
 * @file 37-CuttingGlacierIceCores.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Cutting Glacier Ice Cores video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const cuttingGlacierIceCoresVideo = {
  id: "goi-37g-cutting-glacier-ice-cores",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Cutting Glacier Ice Cores",
    fr: "Coupe de carottes de glace prélevées dans les glaciers"
  },

  description: {
    en: "Cutting Ice Cores at the Canadian Ice Core Lab",
    fr: "Coupe de carottes de glace au Laboratoire canadien des carottes de glace."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=VLaZWe8nACs",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/acb56cc0-edb4-4cb1-ae5e-d8504ee154d0/thumbnails/obs_9877d8ac-26fc-435d-8e9d-d1acad385aae_tumb.0000004.jpg",
    is360: false
  },

  searchTerms: {
    en: ["cutting","glacier","ice","cores","abglaciers","climatechange","abwater"],
    fr: ["coupe","carottes","glace","prelevees","dans","les","glaciers"]
  },
};
