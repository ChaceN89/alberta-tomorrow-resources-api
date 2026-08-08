/**
 * @file 02-AnimalAdaptations.js
 * @module Data/LessonPlans/AlbertaNaturalRegions
 * @desc Contains localized metadata and lesson plan information for the Animal Adaptations lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const animalAdaptationsLessonPlan = {
  id: "abregions-02-animal-adaptations",

  themeId: LessonTheme.ALBERTA_NATURAL_REGIONS.id,

  title: {
    en: "Animal Adaptations - Using the 360 Virtual Field Trips",
    fr: "N/A"
  },

  description: {
    en: "In this lesson students will explore animals in all 6 ecoregions within Alberta and learn about how they are specially adapted to living there.",
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
        title: "Grade 3 Science Adaptations and the 360 Virtual Field Trips",
        url: null
      },
      {
        id: "student-worksheet",
        title: "Animal Adaptations Student Worksheet - Fillable Google Slides",
        url: null
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "N/A",
        url: null
      },
      {
        id: "student-worksheet",
        title: "N/A",
        url: null
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_3.id
  ],

  subjectIds: [
    Subject.SCIENCE.id
  ],

  searchTerms: {
    en: [
      "animal adaptations",
      "alberta",
      "ecoregions"
    ],
    fr: []
  },

  learningOutcomes: {
    en: [
      "Students will learn how animals are adapted to life in each of the 6 natural regions of Alberta"
    ],
    fr: []
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
}
