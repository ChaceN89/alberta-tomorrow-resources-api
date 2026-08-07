/**
 * @file 01-ArePeopleAffectingTheGlaciers.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Well it might affect it in some small way but what I often tend to say instead. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const arePeopleAffectingTheGlaciersVideo = {
  id: "goi-01g-are-people-affecting-the-glaciers",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Well it might affect it in some small way but what I often tend to say instead.",
    fr: "Eh bien, cela peut avoir un certain effet, mais probablement très limité. Ce que je réponds généralement, c’est plutôt…"
  },

  description: {
    en: "Listen to Peter Lemieux talk about how people are affecting the glaciers.",
    fr: "Ce ne sont pas tant les personnes qui marchent sur ce glacier-ci qui ont un impact, mais plutôt les quelque 7 milliards d’habitants de la planète qui exercent une influence considérable ici, comme sur les glaciers du monde entier."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Ns7BiGb3cMQ",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["well","might","affect","some","small","way","but","often"],
    fr: ["bien","cela","peut","avoir","certain","effet","mais","probablement"]
  },
};
