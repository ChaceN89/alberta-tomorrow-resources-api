/**
 * @file 06-DidIDoThat.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the Did I Do That lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const didIDoThatLessonPlan = {
  id: "landuse-06c-did-i-do-that",

  themeId: LessonTheme.LAND_USE.id,

  title: {
    en: "Did I Do That? The Relationship Between Humans and Their Environment",
    fr: "Ai-je fait ça? Les rapports entre l’être humain et son environnement"
  },

  description: {
    en: "Using the Alberta Tomorrow simulator, students investigate the unintended consequences of human activity on the environment. They are challenged to come up with a future landuse plan for their watershed that balances the economy with the environment.",
    fr: "À l’aide du simulateur d’Alberta Tomorrow, les élèves étudient les conséquences involontaires de l’activité humaine sur l’environnement. On les met au défi de préparer un plan d’utilisation des terres pour l’avenir, pour leur bassin hydrographique, qui assure l’équilibre entre l’économie et l’environnement."
  },

  approximateTime: {
    en: "180 min",
    fr: "180 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Did we do that? Science 7 Lesson Plan",
        url: "https://docs.google.com/document/d/1CR-RG016EQChxUjxY3X1aESpoSiSfHoq/edit?usp=drive_link&ouid=107808106052250146136&rtpof=true&sd=true"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Did we do that? Science 7 Student Worksheet",
        url: null
      },
      {
        fileType: FileType.ANSWER_KEY,
        title: "Did we do that? Science 7 Answer Sheet",
        url: null
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Avons-nous fait ça? Sciences 7e année, plan de leçon",
        url: "https://docs.google.com/document/d/17gp6CAHLREMW8NS83xN7td3SWwIvlV3l/edit"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Avons-nous fait ça? Sciences 7e année, feuille de travail de l’élève",
        url: null
      },
      {
        fileType: FileType.ANSWER_KEY,
        title: "Avons-nous fait ça? Sciences 7e année, clé de correction",
        url: null
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_7.id
  ],

  subjectIds: [
    Subject.SCIENCE.id
  ],

  searchTerms: {
    en: [
      "land use",
      "quality of life",
      "water quality",
      "future planning",
      "simulator"
    ],
    fr: [
      "conséquences involontaires",
      "bassin hydrographique",
      "équilibre",
      "utilisation des terres"
    ]
  },

  learningOutcomes: {
    en: [
      "Investigate past changes on the landscape",
      "Investigate a possible future",
      "Create their own landuse plan for the future"
    ],
    fr: [
      "Étudier les changements survenus dans le paysage dans le passé.",
      "Étudier un futur possible.",
      "Créer leur propre plan d’utilisation des terres pour l’avenir."
    ]
  },

  videoIds: [
    "env-01c-natural-landscapes",
    "env-02c-caribou-habitat",
    "env-03c-grizzly-habitat",
    "env-04c-fish-habitat",
    "env-05c-water-quality",
    "env-06c-greenhouse-gasses",
    "soc-01d-human-population",
    "soc-02d-gdp",
    "soc-03d-hydrocarbon-production",
    "soc-04d-timber-production",
    "soc-05d-agriculture-production",
    "soc-06d-water-consumption"
  ],

  relatedResources: []
};
