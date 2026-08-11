/**
 * @file 42-HowBigIsTheAthabascaGlacier.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the This is a shot of the Athabasca glacier. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const howBigIsTheAthabascaGlacierVideo = {
  id: "goi-42g-how-big-is-the-athabasca-glacier",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How big is the Athabasca Glacier",
    fr: "Quelle est la taille du glacier Athabasca?"
  },

  description: {
    en: "Listen to Peter Lemieux talk about the size of the Athabasca Glacier.",
    fr: "Écoutez Peter Lemieux parler de la taille du glacier Athabasca."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=qq7vwd_ahzU",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["shot","athabasca","glacier","abglaciers","climatechange","abwater"],
    fr: ["voici","une","vue","glacier","athabasca"]
  },
};
