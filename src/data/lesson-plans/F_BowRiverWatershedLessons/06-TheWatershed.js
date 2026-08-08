/**
 * @file 06-TheWatershed.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the The Watershed lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const theWatershedLessonPlan = {
  id: "brbc-06f-the-watershed",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "The Watershed",
    fr: "Le bassin hydrographique"
  },

  description: {
    en: "In this activity you will learn about how land use changes impact how water moves through the landscape and how that changes our interactions with it.",
    fr: "Dans le cadre de cette activité, vous apprendrez l’effet des changements d’utilisation des terres sur la circulation de l’eau dans le paysage et comment cela change nos interactions avec l’eau."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "The Watershed - Google Doc",
        url: "https://docs.google.com/document/d/1X8bXoEl8IDyHjAtW5nSc5mtB-jVN8DU0/"
      }
    ],
    fr: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Le bassin hydrographique – document Google",
        url: "https://docs.google.com/document/d/1X8bXoEl8IDyHjAtW5nSc5mtB-jVN8DU0/"
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
    Subject.SOCIAL_STUDIES.id
  ],

  searchTerms: {
    en: [
      "watershed",
      "water movement",
      "land use"
    ],
    fr: [
      "bassin hydrographique",
      "circulation de l’eau",
      "utilisation des terres"
    ]
  },

  learningOutcomes: {
    en: [
      "Examine the land and spaces where water exists",
      "Investigate the different ways that people can interact with the rivers and water",
      "Examine the need for water in our lives"
    ],
    fr: [
      "Examiner les terres et les espaces où l’eau est présente.",
      "Étudier les différents moyens par lesquels les gens peuvent interagir avec les rivières et l’eau.",
      "Étudier la nécessité de l’eau dans nos vies."
    ]
  },

  videoIds: [],

  relatedResources: []
};
