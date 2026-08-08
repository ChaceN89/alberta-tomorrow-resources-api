/**
 * @file 03-WaterQualityWaterTreatment.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Water Quality: Water Treatment lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const waterQualityWaterTreatmentLessonPlan = {
  id: "brbc-03f-water-quality-treatment",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Water Quality: Water Treatment",
    fr: "Qualité de l’eau : traitement des eaux"
  },

  description: {
    en: "In this activity you will learn about the process of cleaning water to meet drinking standards within the City of Calgary.",
    fr: "Dans le cadre de cette activité, vous apprendrez des faits sur le processus d’épuration de l’eau pour répondre aux normes sur l’eau potable de la Ville de Calgary."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Water Quality: Water Treatment - Google Doc",
        url: "https://docs.google.com/document/d/1unCOQUIHRLS5YZJ3J5ekBFurcbr9zaL7/"
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "Qualité de l’eau : traitement des eaux – document Google",
        url: "https://docs.google.com/document/d/1unCOQUIHRLS5YZJ3J5ekBFurcbr9zaL7/"
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
      "water quality",
      "water treatment",
      "calgary"
    ],
    fr: [
      "qualité de l’eau",
      "traitement des eaux",
      "calgary"
    ]
  },

  learningOutcomes: {
    en: [
      "Investigate the stages of water treatment"
    ],
    fr: [
      "Étudier les étapes de traitement des eaux."
    ]
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
