/**
 * @file 03-GlaciersMove.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the It's higher, it's colder, more precipitation falls up there, more of it falls as snow. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const glaciersMoveVideo = {
  id: "goi-03g-glaciers-move",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Glaciers Move",
    fr: "Déplacement des glaciers"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how glaciers move.",
    fr: "Écoutez Peter Lemieux expliquer comment les glaciers se déplacent."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=1KGk2LAvz4s",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/7c3e031d-624b-4383-bca0-1566a980c5a4/thumbnails/obs_b10c9053-9433-43ac-8290-8e643250149d_tumb.0000020.jpg",
    is360: false
  },

  searchTerms: {
    en: ["higher","colder","more","precipitation","falls","there","snow","abglaciers"],
    fr: ["haut","altitude","est","plus","elevee","fait","froid","les"]
  },
};
