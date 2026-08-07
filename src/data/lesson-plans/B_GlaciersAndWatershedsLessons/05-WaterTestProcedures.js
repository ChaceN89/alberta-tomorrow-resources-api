/**
 * @file 05-WaterTestProcedures.js
 * @module Data/LessonPlans/GlaciersAndWatersheds
 * @desc Contains localized metadata and lesson plan information for the Water Test Procedures lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const waterTestProceduresLessonPlan = {
  id: "glaciers-05b-water-test-procedures",

  themeId: LessonTheme.GLACIERS_AND_WATERSHEDS.id,

  title: {
    en: "Water Test Procedures",
    fr: "Procédures d’analyse de l’eau"
  },

  description: {
    en: "Water test procedures guide.",
    fr: "Guide des procédures d’analyse de l’eau."
  },

  approximateTime: {
    en: "N/A",
    fr: "N/A"
  },

  files: {
    en: [
      {
        id: "water-test-procedures",
        title: "Water Test Procedures",
        description: "",
        url: "https://drive.google.com/file/d/15I2aVVkdXZUWdPTEB7YQyk3OgvBG4SG-/view?usp=sharing"
      },
      {
        id: "glaciers-in-alberta-slides",
        title: "Glaciers in Alberta Slide Show",
        description: "",
        url: "https://docs.google.com/presentation/d/1rBX6NS-xWfHD3HxAV341q1ZC4wZV5FvNaUdsLi94ptg/edit?usp=drive_link"
      }
    ],

    fr: [
      {
        id: "water-test-procedures",
        title: "Procédures d’analyse de l’eau",
        description: "",
        url: "https://docs.google.com/document/d/1S0CSfCmP5sCkBeUdMuooNtXBOYhDOHch/edit"
      },
      {
        id: "glaciers-in-alberta-slides",
        title: "Les glaciers en Alberta : présentation",
        description: "",
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
    Grade.GRADE_11.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id
  ],

  searchTerms: {
    en: [
      "Science 14",
      "Biology 20",
      "Water",
      "Water Quality",
      "Water Consumption",
      "Glaciers",
      "Wetlands",
      "Watershed"
    ],
    fr: []
  },

  learningOutcomes: {
    en: [],
    fr: []
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
