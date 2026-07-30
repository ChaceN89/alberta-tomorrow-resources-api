/**
 * @file 01-GoingGoingGoingGone.js
 * @module Data/LessonPlans/ClimateChange
 * @desc Contains localized metadata and lesson plan information for the Going Going Going Gone: Climate Change and the Columbia Icefield lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @dependencies
 * - LessonThemeIds.js
 * - gradeIds.js
 * - subjectIds.js
 *
 * @notes
 * - The ID is a stable API value and should not be changed.
 * - French localization is currently awaiting translation.
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const goingGoingGoingGoneLessonPlan = {
  id: "climate-01a-going-going-gone",

  themeId: LessonTheme.CLIMATE_CHANGE.id,

  title: {
    en: "Going Going Going Gone: Climate Change and the Columbia Icefield",
    fr: ""
  },

  description: {
    en: "Students will explore how climate change has affected Alberta's glaciers and do some calculations to determine the loss of ice on the Athabasca Glacier.",
    fr: ""
  },

  approximateTime: {
    en: "60 min",
    fr: ""
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Going Going Going Gone",
        description: "",
        url: "/pdfs/lesson-plans/climateChange/GoingGoingGoingGone.pdf"
      }
    ],

    fr: []
  },

  gradeIds: [
    Grade.GRADE_4.id,
    Grade.GRADE_5.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
    Grade.GRADE_10.id,
    Grade.GRADE_11.id
  ],

  subjectIds: [
    Subject.SOCIAL_STUDIES.id,
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
      "Energy Flow in Global Systems",
      "Environmental Stewardship",
      "Physical Geography of Canada"
    ],

    fr: []
  },

  learningOutcomes: {
    en: [
      "Understand seasonal variation in glacier mass",
      "Understand the effect of climate change on glacier mass",
      "Calculate loss of glacier ice on the Athabasca Glacier over the next 10 years",
      "Determine the loss of ice volume in Rocky Mountain glaciers"
    ],

    fr: []
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