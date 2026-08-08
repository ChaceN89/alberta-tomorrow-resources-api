/**
 * @file 11-NativePrairiesAndPlants.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Native Prairies and Plants lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const nativePrairiesAndPlantsLessonPlan = {
  id: "brbc-11f-native-prairies-plants",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Native Prairies and Plants",
    fr: "Prairies et plantes indigènes"
  },

  description: {
    en: "In this activity, you will learn about the biodiversity of the native prairies, and the many different types of functions native plants have roles in, as well as the importance of bees and other pollinators.",
    fr: "Dans le cadre de cette activité, vous apprendrez des faits sur la biodiversité des prairies indigènes, et sur les nombreux types différents de fonctions dans lesquelles les plantes indigènes ont des rôles à jouer, ainsi que l’importance des abeilles et des autres pollinisateurs."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Native Prairies and Plants - Google Doc",
        url: "https://docs.google.com/document/d/1uTt5BFsG986N8SgW9H4nNCfXDPj5Wta7/"
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "Prairies et plantes indigènes – document Google",
        url: "https://docs.google.com/document/d/1uTt5BFsG986N8SgW9H4nNCfXDPj5Wta7/"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id
  ],

  searchTerms: {
    en: [
      "native prairies",
      "plants",
      "pollinators"
    ],
    fr: [
      "prairies indigènes",
      "plantes",
      "pollinisateurs"
    ]
  },

  learningOutcomes: {
    en: [
      "Examine the ecological roles of plants in the prairies",
      "Investigate the methods of addressing threatened native species",
      "Observe spaces that native and introduced species are seen to examine the role of biodiversity"
    ],
    fr: [
      "Étudier les rôles écologiques des plantes dans les prairies.",
      "Étudier les méthodes employées pour protéger les espèces indigènes menacées.",
      "Observer les endroits où ont été vues les espèces indigènes et introduites pour étudier le rôle de la biodiversité."
    ]
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
