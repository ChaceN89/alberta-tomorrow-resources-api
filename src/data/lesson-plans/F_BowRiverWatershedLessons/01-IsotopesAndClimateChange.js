/**
 * @file 01-IsotopesAndClimateChange.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Isotopes and Climate Change lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const isotopesAndClimateChangeLessonPlan = {
  id: "brbc-01f-isotopes-and-climate-change",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Isotopes and Climate Change",
    fr: "Isotopes et changements climatiques"
  },

  description: {
    en: "We can track climate changes by looking at what types of isotopes are in the water.",
    fr: "Nous pouvons étudier les changements climatiques en examinant les types d’isotopes présents dans l’eau."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Isotopes and Climate Change - Google Doc",
        url: "https://docs.google.com/document/d/1PcI2jRXdspNZqIkJeppDro2Ub0wXz9bi/"
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Isotopes et changements climatiques – document Google",
        url: "https://docs.google.com/document/d/1PcI2jRXdspNZqIkJeppDro2Ub0wXz9bi/"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
    Grade.GRADE_9.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id
  ],

  searchTerms: {
    en: [
      "isotopes",
      "climate change",
      "water"
    ],
    fr: [
      "isotopes",
      "changements climatiques",
      "eau"
    ]
  },

  learningOutcomes: {
    en: [
      "Examine the use of isotope tracking",
      "Investigate the consequences of climate change",
      "Examine the negative impact of climate change"
    ],
    fr: [
      "Examiner le recours à l’analyse des isotopes.",
      "Étudier les répercussions des changements climatiques.",
      "Examiner l’effet négatif des changements climatiques."
    ]
  },

  videoIds: [],

  relatedResources: []
};
