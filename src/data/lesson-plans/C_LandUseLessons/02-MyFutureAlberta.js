/**
 * @file 02-MyFutureAlberta.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the My Future Alberta lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - updated lesson resource URLs using the V8 mapping
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const myFutureAlbertaLessonPlan = {
  id: "landuse-02c-my-future-alberta",

  themeId: LessonTheme.LAND_USE.id,

  title: {
    en: "My Future Alberta: Creating a Landuse Plan for 2050",
    fr: "Mon Alberta du futur : Créer un plan d’utilisation des terres pour 2050"
  },

  description: {
    en: "Students use the Alberta Tomorrow simulator to create a land use plan for Alberta's future.",
    fr: "Les élèves utilisent le simulateur d’Alberta Tomorrow pour créer un plan d’utilisation des terres pour l’avenir de l’Alberta."
  },

  approximateTime: {
    en: "90 min",
    fr: "90 min"
  },

  files: {
    en: [
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "My Future Alberta: Creating a Landuse Plan for 2050: Lesson Plan and Student Worksheet",
        url: "https://docs.google.com/document/d/1DSeh7sKtz0aPw2avwpJx9EX48MODMQOUeRI8G4_z1VQ"
      }
    ],
    fr: [
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Mon Alberta du futur : Créer un plan d’utilisation des terres pour 2050 : plan de leçon et feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1UDRo6NxP8NWbfwsH_ggYj-rClTW_JEHaAWU2dEbPiEA"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_4.id,
    Grade.GRADE_5.id,
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
    Grade.GRADE_9.id,
    Grade.GRADE_10.id,
    Grade.GRADE_11.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.SOCIAL_STUDIES.id,
    Subject.OUTDOOR_EDUCATION.id,
    Subject.CTS.id
  ],

  searchTerms: {
    en: [
      "land use",
      "future planning",
      "economy",
      "ecosystem services"
    ],
    fr: [
      "plan d’utilisation des terres",
      "avenir",
      "alberta",
      "simulateur"
    ]
  },

  learningOutcomes: {
    en: [
      "Create a landuse plan for Alberta's future"
    ],
    fr: [
      "Créer un plan d’utilisation des terres pour l’avenir de l’Alberta."
    ]
  },

  videoIds: [],

  relatedResources: [
    {
      fileType: FileType.OTHER_FILE_TYPE,
      title: "Alberta Landuse Framework",
      url: "https://landuse.alberta.ca/Pages/default.aspx"
    }
  ]
};
