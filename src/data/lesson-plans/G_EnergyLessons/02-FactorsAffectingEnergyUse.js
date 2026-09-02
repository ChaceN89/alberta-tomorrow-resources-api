/**
 * @file 02-FactorsAffectingEnergyUse.js
 * @module Data/LessonPlans/Energy
 * @desc Contains localized metadata and lesson plan information for the Factors Affecting Energy Use lesson.
 *
 * 
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const factorsAffectingEnergyUseLessonPlan = {
  id: "energy-02g-factors-affecting-use",

  themeId: LessonTheme.ENERGY.id,

  title: {
    en: "Factors that Influence the type of Energy Used",
    fr: "Facteurs qui influencent le type d’énergie utilisée"
  },

  description: {
    en: "In this lesson, students explore how energy choices are shaped by availability, accessibility, societal needs, economic considerations, and environmental impact. Using Alberta Tomorrow's simulation tools, students investigate past, present, and future scenarios around Alberta's energy use.",
    fr: "Dans le cadre de cette leçon, les élèves explorent comment les choix énergétiques sont déterminés par la disponibilité, l’accessibilité, les besoins de la société, les considérations économiques et l’impact environnemental. À l’aide des outils de simulation d’Alberta Tomorrow, les élèves étudient les scénarios passés, présents et futurs entourant l’utilisation de l’énergie en Alberta."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Factors that Influence the type of Energy Used: Lesson Plan",
        url: "https://docs.google.com/document/d/1rE_PwNcHq2A9nr28g5SxS3sv3-3MJTwxoRz52nd8eJE"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Factors that Influence the type of Energy Used: Student Worksheet",
        url: "https://docs.google.com/document/d/1T3bvL-Gh1cWDfkHCn6PtPiaKzS457F5EHrXWGdnbAe4"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Energy Resources and Climate Change in Alberta - Presentation Slides",
        url: "https://docs.google.com/presentation/d/1RmQYHLOms6XnWvOTz0E0GW3dK6NdT53zE8AfozExhkY"
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Facteurs qui influencent le type d’énergie utilisée : plan de leçon",
        url: "https://docs.google.com/document/d/1fmgBQURd1PYXInXwUZTr4sTy6ZRk-_ap"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Facteurs qui influencent le type d’énergie utilisée : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1_d0tKmpd9cQ0qkrb1Rn2U_pUnjCHHFeA"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Ressources énergétiques et changements climatiques en Alberta – présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/1Kpaehlq2ap2n6W_Q0X9lDVAh-t6zChAt"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_6.id
  ],

  subjectIds: [
    Subject.SCIENCE.id
  ],

  searchTerms: {
    en: [
      "energy use",
      "factors",
      "simulations",
      "alberta"
    ],
    fr: [
      "utilisation de l’énergie",
      "facteurs",
      "simulations",
      "alberta"
    ]
  },

  learningOutcomes: {
    en: [
      "Investigate factors that influence the selection of energy resources.",
      "Explain how Alberta's energy use has changed over time and may change in the future.",
      "Distinguish between societal, economic, and environmental impacts on energy choices.",
      "Use simulations to analyze land use impacts on energy and sustainability."
    ],
    fr: [
      "Étudier les facteurs qui influencent la sélection des ressources énergétiques.",
      "Expliquer comment l’utilisation de l’énergie en Alberta a changé au fil du temps et pourrait encore changer dans l’avenir.",
      "Faire la différence entre les impacts sociaux, économiques et environnementaux sur les choix énergétiques.",
      "Utiliser les simulations pour analyser les effets de l’utilisation des terres sur l’énergie et le développement durable."
    ]
  },

  videoIds: [],

  relatedResources: []
};
