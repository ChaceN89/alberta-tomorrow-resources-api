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
import { FileType } from "../../enums/fileTypes.js";
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
        fileType: FileType.OTHER_FILE_TYPE,
        title: "Water Test Procedures",
        url: "https://drive.google.com/file/d/15I2aVVkdXZUWdPTEB7YQyk3OgvBG4SG-"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Glaciers in Alberta: Slide Show",
        url: "https://docs.google.com/presentation/d/1rBX6NS-xWfHD3HxAV341q1ZC4wZV5FvNaUdsLi94ptg"
      }
    ],

    fr: [
      {
        fileType: FileType.OTHER_FILE_TYPE,
        title: "Procédures d’analyse de l’eau",
        url: "https://docs.google.com/document/d/1S0CSfCmP5sCkBeUdMuooNtXBOYhDOHch"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Les glaciers en Alberta : présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/1UUs1xkGOnZ2nMDM42bccVAcw0AJaL-Li/"
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
    fr: ["Sciences 14", "Biologie 20", "eau", "qualité de l’eau", "consommation d’eau", "glaciers", "zones humides", "bassin versant"]
  },

  learningOutcomes: {
    en: [],
    fr: []
  },

  videoIds: [],

  relatedResources: []
};
