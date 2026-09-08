/**
 * @file 05-DidWeDoThat.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the Did We Do That lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../enums/LessonThemeIds.js";
import { FileType } from "../enums/fileTypes.js";
import { Grade } from "../enums/gradeIds.js";
import { Subject } from "../enums/subjectIds.js";

export const didWeDoThatLessonPlan = {
  id: "landuse-05c-did-we-do-that",

  themeId: LessonTheme.LAND_USE.id,

  title: {
    en: "Did We Do That? A Study of Alberta's Geography and the Benefits and Drawbacks of Landuse",
    fr: "N/A"
  },

  description: {
    en: "Grade 4 students will investigate Alberta's natural ecoregions through a series of educational videos, examining the benefits and drawbacks of different land-use decisions.",
    fr: "N/A"
  },

  approximateTime: {
    en: "12 classes",
    fr: "12 cours"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Grade 4 Lesson Plan",
        url: null
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Plan de leçon de 4e année",
        url: null
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_4.id
  ],

  subjectIds: [
    Subject.SOCIAL_STUDIES.id
  ],

  searchTerms: {
    en: [
      "A sense of the Land",
      "land use",
      "quality of life",
      "wildlife",
      "water quality",
      "water consumption",
      "alberta",
      "economy",
      "ecosystem services"
    ],
    fr: [
      "un sens du territoire",
      "utilisation des terres",
      "qualité de vie",
      "faune",
      "qualité de l’eau",
      "consommation d’eau",
      "Alberta",
      "économie",
      "services écosystémiques"
    ]
  },

  learningOutcomes: {
    en: [
      "Investigate the geography of Alberta",
      "Examine the benefits and drawbacks of land-use practices"
    ],
    fr: [
      "Étudier la géographie de l’Alberta.",
      "Examiner les avantages et les inconvénients des pratiques d’utilisation des terres."
    ]
  },

  videoIds: [
    "env-01c-natural-landscapes",
    "env-02c-caribou-habitat",
    "env-03c-grizzly-habitat",
    "env-04c-fish-habitat",
    "env-05c-water-quality",
    "env-06c-greenhouse-gases",
    "soc-01d-human-population",
    "soc-02d-gdp",
    "soc-03d-hydrocarbon-production",
    "soc-04d-timber-production",
    "soc-05d-agriculture-production",
    "soc-06d-water-consumption"
  ],

  relatedResources: []
};
