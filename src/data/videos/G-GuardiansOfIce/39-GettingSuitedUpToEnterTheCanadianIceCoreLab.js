/**
 * @file 39-GettingSuitedUpToEnterTheCanadianIceCoreLab.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Getting suited up to enter the Canadian Ice Core Lab video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const gettingSuitedUpToEnterTheCanadianIceCoreLabVideo = {
  id: "goi-39g-getting-suited-up-to-enter-the",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Getting suited up to enter the Canadian Ice Core Lab",
    fr: "S’habiller chaudement avant d’entrer dans le Laboratoire canadien des carottes de glace"
  },

  description: {
    en: "Dr. Ali Criscitiello gets prepared to go into the Canadian Ice Core Lab.",
    fr: "La glaciologue Ali Criscitiello, Ph. D., se prépare à entrer dans le Laboratoire canadien des carottes de glace."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Ofv6WtFd1Zc",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["getting","suited","enter","canadian","ice","core","lab","abglaciers"],
    fr: ["habiller","chaudement","avant","entrer","dans","laboratoire","canadien","des"]
  },
};
