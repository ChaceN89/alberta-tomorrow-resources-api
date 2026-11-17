/**
 * @file 01-WhereIsMyHome.ts
 * @module Data/LessonPlans/IndigenousVoices
 * @desc Contains localized metadata and lesson plan information for the Where Is My Home lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - updated lesson resource URLs using the V8 mapping
 */

import { LessonTheme } from "../../../enums/LessonThemeIds.js";
import { FileType } from "../../../enums/fileTypes.js";
import { Grade } from "../../../enums/gradeIds.js";
import { Subject } from "../../../enums/subjectIds.js";


import type { LessonPlanSource } from "../../../core/lessonPlanTypes.js";

const lessonId = "indigenous-01e-where-is-my-home";

export const whereIsMyHomeLessonPlan = {
  id: lessonId,

  themeId: LessonTheme.INDIGENOUS_VOICES.id,

  title: {
    en: "Where is my Home? Using the Indigenous Map Overlays",
    fr: "Où est ma maison? Utiliser les superpositions cartographiques autochtones."
  },

  description: {
    en: "A step-by-step lesson plan for using the Indigenous Map Overlays.",
    fr: "Un plan de leçon étape par étape pour utiliser les superpositions cartographiques autochtones."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },


  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Where is my Home? Using the Indigenous Map Layers: Lesson Plan",
        url: `https://docs.google.com/document/d/1N29LfRlHfZ4SIklxj32MfhDfW3TBS250PAo9GibpwKA`,
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Where is my Home? Using the Indigenous Map Layers: Student Worksheet",
        url: "https://docs.google.com/document/d/1N29LfRlHfZ4SIklxj32MfhDfW3TBS250PAo9GibpwKA",
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Où est ma maison? Utiliser les superpositions cartographiques autochtones : plan de leçon",
        url: `https://docs.google.com/document/d/1bja_KxsUMc5S4XH0lHKCdzz4_sfo88biLECQRxZnSHQ`,
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Où est ma maison? Utiliser les superpositions cartographiques autochtones : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1bja_KxsUMc5S4XH0lHKCdzz4_sfo88biLECQRxZnSHQ",
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_4.id,
    Grade.GRADE_5.id,
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
    Grade.GRADE_9.id
  ],

  subjectIds: [
    Subject.SOCIAL_STUDIES.id,
    Subject.INDIGENOUS_STUDIES.id
  ],

  searchTerms: {
    en: [
      "indigenous map overlays",
      "home",
      "community",
      "treaty",
      "reserves",
      "settlements"
    ],
    fr: [
      "superpositions cartographiques autochtones",
      "territoire",
      "communauté",
      "traité",
      "réserves",
      "établissements"
    ]
  },

  learningOutcomes: {
    en: [
      "Students will locate their home, school and community on the satellite imagery using the Indigenous map layers, see their location in relation to treaty area, Indigenous territory, traditional languages, reserves and settlements, Métis regions, and residential school locations.",
      "Students will compare sizes of Indigenous territories to reserves and settlements."
    ],
    fr: [
      "Les élèves trouvent leur maison, leur école et leur communauté sur l’image satellite à l’aide des superpositions cartographiques autochtones pour voir leur emplacement par rapport aux régions visées par un traité, aux territoires et aux langues autochtones, aux réserves et aux établissements, aux régions métisses et aux emplacements des pensionnats.",
      "Comparer la taille des territoires autochtones par rapport à celle des réserves et des établissements."
    ]
  },

  videoIds: [],

  relatedResources: []
} satisfies LessonPlanSource;
