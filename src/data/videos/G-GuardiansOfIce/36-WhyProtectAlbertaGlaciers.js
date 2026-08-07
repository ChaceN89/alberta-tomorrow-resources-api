/**
 * @file 36-WhyProtectAlbertaGlaciers.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Maybe one of the most important reasons that I can think of, is that glaciers impact people very directly. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whyProtectAlbertaGlaciersVideo = {
  id: "goi-36g-why-protect-alberta-glaciers",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Maybe one of the most important reasons that I can think of, is that glaciers impact people very directly.",
    fr: "L’une des raisons les plus importantes auxquelles je peux penser est que les glaciers ont un impact très direct sur la vie des gens."
  },

  description: {
    en: "Dr. Ali Criscitiello discusses why it is important to protect Alberta Glaciers.",
    fr: "Par exemple, nos réserves d’eau potable qui dépendent des glaciers, comme celles liées au Columbia Icefield."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=PUJYQnJx3tY",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["maybe","one","most","important","reasons","can","think","glaciers"],
    fr: ["une","des","raisons","les","plus","importantes","auxquelles","peux"]
  },
};
