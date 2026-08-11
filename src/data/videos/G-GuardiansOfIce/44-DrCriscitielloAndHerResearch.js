/**
 * @file 44-DrCriscitielloAndHerResearch.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the I am an ice core scientist and I got interested in ice cores and ice in general and glaciers. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const drCriscitielloAndHerResearchVideo = {
  id: "goi-44g-dr-criscitiello-and-her-research",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Dr. Criscitiello and her research",
    fr: "Ali Criscitiello, Ph. D., et ses travaux de recherche"
  },

  description: {
    en: "Dr. Ali Criscitiello talks about how she got interested in studying glaciers and what she does at the Canadian Ice Core Lab.",
    fr: "Ali Criscitiello explique comment elle en est venue à s’intéresser à l’étude des glaciers et ce qu’elle fait au Laboratoire canadien des carottes de glace."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=VIt0NySXoGM",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09f0fac4-de18-4c6a-a045-783ba063c4f0/thumbnails/obs_cff895b3-1701-407d-b743-b3d6326443ba_tumb.0000006.jpg",
    is360: false
  },

  searchTerms: {
    en: ["ice","core","scientist","got","interested","cores","general","glaciers"],
    fr: ["suis","scientifique","specialisee","dans","les","carottes","glace","interessee"]
  },
};
