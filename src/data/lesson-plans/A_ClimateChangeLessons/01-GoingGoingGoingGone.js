/**
 * @file 01-GoingGoingGoingGone.js
 * @module Data/LessonPlans/ClimateChange
 * @desc Contains localized metadata and lesson plan information for the Going Going Going Gone: Climate Change and the Columbia Icefield lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 31, 2026
 *
 * @dependencies
 * - LessonThemeIds.js
 * - gradeIds.js
 * - subjectIds.js
 *
 * @notes
 * - The ID is a stable API value and should not be changed.
 * - English and French resource entries use matching stable file IDs.
 * - Google document URLs omit editing parameters and anchors.
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const goingGoingGoingGoneLessonPlan = {
  id: "climate-01a-going-going-gone",

  themeId: LessonTheme.CLIMATE_CHANGE.id,

  title: {
    en: "Going Going Going Gone: Climate Change and the Columbia Icefield",
    fr: "Il recule, il recule, il disparaît – Les changements climatiques et le champ de glace Columbia"
  },

  description: {
    en: "Students will explore how climate change has affected Alberta's glaciers and do some calculations to determine the loss of ice on the Athabasca Glacier.",
    fr: "Les élèves étudieront comment les glaciers de l’Alberta ont été touchés par les changements climatiques et ils feront des calculs pour déterminer la perte de glace sur le glacier Athabasca."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Going Going Going Gone: Lesson Plan",
        url: null
      },
      {
        id: "student-worksheet",
        title: "Going Going Going Gone: Student Worksheet",
        url: null
      },
      {
        id: "climate-myths-and-misconceptions-slides",
        title: "Climate Myths and Misconceptions: Slide Show",
        url: null
      }
    ],

    fr: [
      {
        id: "lesson-plan",
        title: "Il recule, il recule, il disparaît : plan de leçon",
        url: null
      },
      {
        id: "student-worksheet",
        title: "Il recule, il recule, il disparaît : feuille de travail de l’élève",
        url: null
      },
      {
        id: "climate-myths-and-misconceptions-slides",
        title: "Mythes et idées fausses sur les changements climatiques : présentation",
        url: null
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_2.id,
    Grade.GRADE_3.id,
    Grade.GRADE_5.id,
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
    Grade.GRADE_10.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id,
    Subject.CTS.id
  ],

  searchTerms: {
    en: [
      "glaciers",
      "climate change",
      "math",
      "ice loss",
      "calculations",
      "water",
      "Science 14",
      "Science 20",
      "Biology 20",
      "Energy Flow in Global Systems",
      "Environmental Stewardship",
      "Physical Geography of Canada"
    ],

    fr: [
      "glaciers",
      "changements climatiques",
      "mathématiques",
      "perte de glace",
      "calculs",
      "eau",
      "Sciences 14",
      "Sciences 20",
      "Biologie 20",
      "flux d’énergie dans les systèmes mondiaux",
      "gérance de l’environnement",
      "géographie physique du Canada"
    ]
  },

  learningOutcomes: {
    en: [
      "Understand seasonal variation in glacier mass.",
      "Understand the effect of climate change on glacier mass.",
      "Calculate loss of glacier ice on the Athabasca Glacier over the next 10 years.",
      "Determine the loss of ice volume in Rocky Mountain Glaciers."
    ],

    fr: [
      "Comprendre la variation saisonnière dans la masse des glaciers.",
      "Comprendre l’effet des changements climatiques sur la masse des glaciers.",
      "Calculer la perte de glace sur le glacier Athabasca au cours des 10 prochaines années.",
      "Déterminer la perte de volume de glace dans les glaciers des montagnes Rocheuses."
    ]
  },

  videoIds: [
    "env-06c-greenhouse-gasses",
    "landscape-01b-climate-change",
    "goi-35g-why-are-alberta-glaciers-important",
    "goi-22g-forest-fires-and-glaciers",
    "oth-01z-oxygen-isotopes"
  ],

  relatedResources: {
    en: [],
    fr: []
  }
};