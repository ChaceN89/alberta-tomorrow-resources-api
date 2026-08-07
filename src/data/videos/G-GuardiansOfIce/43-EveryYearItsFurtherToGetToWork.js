/**
 * @file 43-EveryYearItsFurtherToGetToWork.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Now you can see just how much we've lost. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const everyYearItsFurtherToGetToWorkVideo = {
  id: "goi-43g-every-year-its-further-to-get-to-work",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Now you can see just how much we've lost.",
    fr: "Aujourd’hui, vous pouvez constater à quel point nous avons perdu de glace."
  },

  description: {
    en: "Listen to Peter Lemieux talk about the receding of the Athabasca Glacier.",
    fr: "Chaque année que je reviens, je dois parcourir une plus grande distance pour me rendre à mon lieu de travail."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=efoZxoc0_RE",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["now","you","can","see","just","much","lost","abglaciers"],
    fr: ["aujourd","hui","vous","pouvez","constater","quel","point","nous"]
  },
};
