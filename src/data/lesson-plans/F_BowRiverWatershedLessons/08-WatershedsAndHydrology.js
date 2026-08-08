/**
 * @file 08-WatershedsAndHydrology.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Watersheds and Hydrology lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const watershedsAndHydrologyLessonPlan = {
  id: "brbc-08f-watersheds-hydrology",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Watersheds and Hydrology",
    fr: "Bassins hydrographiques et hydrologie"
  },

  description: {
    en: "In this activity you will learn about the basic functions of a watershed, and the hydrology that is involved.",
    fr: "Dans le cadre de cette activité, vous apprendrez les fonctions de base d’un bassin hydrographique, et l’hydrologie que cela implique."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Watersheds and Hydrology - Google Doc",
        url: "https://docs.google.com/document/d/1pluUXun-r0TxsYWRj8b5X__UlWWcJMcW"
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "Bassins hydrographiques et hydrologie – document Google",
        url: "https://docs.google.com/document/d/1pluUXun-r0TxsYWRj8b5X__UlWWcJMcW"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id
  ],

  subjectIds: [
    Subject.SCIENCE.id
  ],

  searchTerms: {
    en: [
      "watersheds",
      "hydrology",
      "functions"
    ],
    fr: [
      "bassins hydrographiques",
      "hydrologie",
      "fonctions"
    ]
  },

  learningOutcomes: {
    en: [
      "Examine the stage of the watershed",
      "Investigate watershed functions"
    ],
    fr: [
      "Examiner les étapes relatives au bassin hydrographique.",
      "Étudier les fonctions d’un bassin hydrographique."
    ]
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
