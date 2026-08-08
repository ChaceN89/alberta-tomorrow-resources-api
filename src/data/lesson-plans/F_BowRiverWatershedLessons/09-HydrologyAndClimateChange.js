/**
 * @file 09-HydrologyAndClimateChange.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Hydrology and Climate Change lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const hydrologyAndClimateChangeLessonPlan = {
  id: "brbc-09f-hydrology-climate-change",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Hydrology and Climate Change",
    fr: "Hydrologie et changements climatiques"
  },

  description: {
    en: "In this activity you will learn about how to monitor climate change and hydrologic functions within a watershed.",
    fr: "Dans le cadre de cette activité, vous apprendrez comment surveiller les changements climatiques et les fonctions hydrologiques dans un bassin hydrographique."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Hydrology and Climate Change - Google Doc",
        url: "https://docs.google.com/document/d/1RgpNqFu8Muak1gNkwCZbaxPoFc6qzXM4"
      }
    ],
    fr: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Hydrologie et changements climatiques – document Google",
        url: "https://docs.google.com/document/d/1RgpNqFu8Muak1gNkwCZbaxPoFc6qzXM4"
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
      "hydrology",
      "climate change",
      "watershed"
    ],
    fr: [
      "hydrologie",
      "changements climatiques",
      "bassin hydrographique"
    ]
  },

  learningOutcomes: {
    en: [
      "Examine the effects of climate change on the water cycle and hydrology"
    ],
    fr: [
      "Examiner les effets des changements climatiques sur le cycle de l’eau et l’hydrologie."
    ]
  },

  videoIds: [],

  relatedResources: []
};
