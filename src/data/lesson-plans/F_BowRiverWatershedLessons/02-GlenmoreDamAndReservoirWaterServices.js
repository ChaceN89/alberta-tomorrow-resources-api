/**
 * @file 02-GlenmoreDamAndReservoirWaterServices.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Glenmore Dam and Reservoir: Water Services lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const glenmoreDamAndReservoirWaterServicesLessonPlan = {
  id: "brbc-02f-glenmore-dam-water-services",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Glenmore Dam and Reservoir: Water Services",
    fr: "Barrage et réservoir de Glenmore : services d’approvisionnement en eau"
  },

  description: {
    en: "In this activity you will learn about the movement and management of water within the city of Calgary, along with the history of the Glenmore Reservoir and Dam.",
    fr: "Dans le cadre de cette activité, vous apprendrez des faits sur la circulation et la gestion de l’eau dans la Ville de Calgary, ainsi que l’histoire du réservoir et du barrage de Glenmore."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Glenmore Dam and Reservoir: Water Services - Google Doc",
        url: "https://docs.google.com/document/d/1X8bXoEl8IDyHjAtW5nSc5mtB-jVN8DU0/"
      }
    ],
    fr: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Barrage et réservoir de Glenmore : services d’approvisionnement en eau – document Google",
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
    Subject.SOCIAL_STUDIES.id,
    Subject.SCIENCE.id
  ],

  searchTerms: {
    en: [
      "glenmore dam",
      "water services",
      "calgary"
    ],
    fr: [
      "barrage de glenmore",
      "services d’eau",
      "calgary"
    ]
  },

  learningOutcomes: {
    en: [
      "Understand water movement and management in Calgary"
    ],
    fr: [
      "Comprendre la circulation et la gestion de l’eau à Calgary"
    ]
  },

  videoIds: [],

  relatedResources: []
};
