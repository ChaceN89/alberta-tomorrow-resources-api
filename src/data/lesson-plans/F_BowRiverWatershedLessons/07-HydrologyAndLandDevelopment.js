/**
 * @file 07-HydrologyAndLandDevelopment.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Hydrology and Land Development lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const hydrologyAndLandDevelopmentLessonPlan = {
  id: "brbc-07f-hydrology-land-development",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Hydrology and Land Development",
    fr: "Hydrologie et aménagement du territoire"
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
        title: "Hydrology and Land Development - Google Doc",
        url: "https://docs.google.com/document/d/1d4mr6hIi_J3jNzJVj77lyBNeCW_jGhWq"
      }
    ],
    fr: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Hydrologie et aménagement du territoire – document Google",
        url: "https://docs.google.com/document/d/1d4mr6hIi_J3jNzJVj77lyBNeCW_jGhWq"
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
      "hydrology",
      "land development",
      "watershed"
    ],
    fr: [
      "hydrologie",
      "aménagement du territoire",
      "bassin hydrographique"
    ]
  },

  learningOutcomes: {
    en: [
      "Examine the watershed and hydrological practices",
      "Investigate how a watershed functions"
    ],
    fr: [
      "Examiner les pratiques hydrologiques et relatives aux bassins hydrographiques.",
      "Étudier le fonctionnement d’un bassin hydrographique."
    ]
  },

  videoIds: [],

  relatedResources: []
};
