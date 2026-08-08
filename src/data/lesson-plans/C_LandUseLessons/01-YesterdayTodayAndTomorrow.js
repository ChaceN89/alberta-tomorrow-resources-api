/**
 * @file 01-YesterdayTodayAndTomorrow.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the Yesterday, Today and Tomorrow lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const yesterdayTodayAndTomorrowLessonPlan = {
  id: "landuse-01c-yesterday-today-tomorrow",

  themeId: LessonTheme.LAND_USE.id,

  title: {
    en: "Yesterday, Today, and Tomorrow: Using the Alberta Tomorrow Simulator",
    fr: "Hier, aujourd’hui et demain : Utiliser le simulateur d’Alberta Tomorrow"
  },

  description: {
    en: "Students will see how the landscape has changed since 1900 as a result of human activity. They will then investigate a business-as-usual future based on past development rates.",
    fr: "Les élèves verront comment le paysage a changé depuis les années 1900 en raison de l’activité humaine. Ils étudieront le futur prévu selon un scénario d’avenir de « maintien du statu quo » qui repose sur le taux de développement passé."
  },

  approximateTime: {
    en: "90 min",
    fr: "90 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan-and-student-worksheet",
        title: "Yesterday, Today and Tomorrow - Using the Alberta Tomorrow Simulator Lesson Plan and Student Worksheet",
        url: "https://docs.google.com/document/d/1Bnm4lgL7gFeSJW0DRwunmlZUOey-v6mrSTRmU6-raBM/edit?usp=drive_link"
      }
    ],
    fr: [
      {
        id: "lesson-plan-and-student-worksheet",
        title: "Hier, aujourd’hui et demain - Utiliser le simulateur d’Alberta Tomorrow : plan de leçon et feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/19_h05r90eQzVl3V6TfJLKg-mTrWGmQmo/edit"
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
      "historical change",
      "ecosystem services",
      "climate change",
      "simulator"
    ],
    fr: [
      "utilisation des terres",
      "changement historique",
      "indicateurs environnementaux",
      "simulateur"
    ]
  },

  learningOutcomes: {
    en: [
      "Explore the province of Alberta on satellite imagery",
      "Identify which watershed they live in",
      "See how the landscape has changed and the effect on environmental indicators",
      "Explore a projected 'business as usual' scenario"
    ],
    fr: [
      "Explorer la province de l’Alberta par les images satellite.",
      "Trouver dans quel bassin hydrographique ils habitent.",
      "Voir comment le paysage a changé par le passé et l’effet sur les indicateurs environnementaux.",
      "Étudier un scénario de « maintien du statu quo »."
    ]
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
