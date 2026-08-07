/**
 * @file 19-WhyShouldWeProtectGlaciers.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the You know in Canada but all around the world we value fresh water more and more. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whyShouldWeProtectGlaciersVideo = {
  id: "goi-19g-why-should-we-protect-glaciers",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "You know in Canada but all around the world we value fresh water more and more.",
    fr: "Au Canada, comme partout dans le monde, nous accordons une importance de plus en plus importante à l’eau douce."
  },

  description: {
    en: "Watch as Peter Lemieux discusses why it is so important to protect our glaciers.",
    fr: "Mais je pense qu’il y a plus que cela en jeu ici."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=LKtGm_ZxZyU",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["you","know","canada","but","all","around","world","value"],
    fr: ["canada","comme","partout","dans","monde","nous","accordons","une"]
  },
};
