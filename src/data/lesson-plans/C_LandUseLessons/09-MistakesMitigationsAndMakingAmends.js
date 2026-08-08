/**
 * @file 09-MistakesMitigationsAndMakingAmends.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the Mistakes, Mitigations and Making Amends lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const mistakesMitigationsAndMakingAmendsLessonPlan = {
  id: "landuse-09c-mistakes-mitigations-and-making-amends",

  themeId: LessonTheme.LAND_USE.id,

  title: {
    en: "Mistakes, Mitigations and Making Amends",
    fr: "N/A"
  },

  description: {
    en: "This lesson explores how land-use decisions can have unintended consequences and what can be done to mitigate and repair harm over time.",
    fr: "N/A"
  },

  approximateTime: {
    en: "60 min",
    fr: "N/A"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Land Based Learning Webinar Worksheet",
        url: null
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "N/A",
        url: null
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_4.id,
    Grade.GRADE_5.id,
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
    Grade.GRADE_9.id,
    Grade.GRADE_10.id,
    Grade.GRADE_11.id,
    Grade.GRADE_12.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id,
    Subject.OTHER.id
  ],

  searchTerms: {
    en: [
      "land use",
      "mitigation",
      "repair",
      "environment"
    ],
    fr: []
  },

  learningOutcomes: {
    en: [
      "Students will consider how land-use decisions create consequences and how communities can respond to repair harm."
    ],
    fr: []
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
