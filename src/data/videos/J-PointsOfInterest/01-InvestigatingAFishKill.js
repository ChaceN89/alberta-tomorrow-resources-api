/**
 * @file 01-InvestigatingAFishKill.js
 * @module Data/Videos/PointsOfInterest
 * @desc Contains localized metadata and media information for the Investigating a Fish Kill video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const investigatingAFishKillVideo = {
  id: "poi-01j-investigating-a-fish-kill",

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.POINTS_OF_INTEREST.id,

  title: {
    en: "Investigating a Fish Kill",
    fr: "Enquête sur une mortalité de poissons"
  },

  description: {
    en: "Michael Sullivan, provincial fish science specialist with Alberta Fish and Wildlife talks at Lake Isle where thousands of sucker fish are poking their heads out of the water literally gasping for air because of oxygen deficiency in the water in this video from March 2014.",
    fr: "Michael Sullivan, spécialiste provincial des sciences halieutiques d’Alberta Fish and Wildlife, se rend au lac Isle, où des milliers de meuniers sortent la tête de l’eau, littéralement à bout de souffle en raison du manque d’oxygène. Cette vidéo date de mars 2014."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=PD8FnEmi-l0",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/michael_sullivan_isle_lake_fish_kill.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "water-quality",
      "ab-water",
      "land-use",
      "eutrophication",
      "fish-kill",
      "ab-environment"
    ],
    fr: ["qualité de l’eau", "eau en Alberta", "utilisation des terres", "eutrophisation", "mortalité de poissons", "environnement en Alberta"]
  }
};
