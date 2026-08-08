/**
 * @file 02-LoveItOrLoseItAlbertaGlacierEdition.js
 * @module Data/LessonPlans/GlaciersAndWatersheds
 * @desc Contains localized metadata and lesson plan information for the Love It or Lose It: Alberta Glacier Edition lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
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
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const loveItOrLoseItAlbertaGlacierEditionLessonPlan = {
  id: "glaciers-02b-love-it-or-lose-it",

  themeId: LessonTheme.GLACIERS_AND_WATERSHEDS.id,

  title: {
    en: "Love It or Lose It: Alberta Glacier Edition",
    fr: "Aimez-les ou perdez-les : les glaciers de l’Alberta"
  },

  description: {
    en: "Students investigate the location of glaciers in Alberta and observe how they have changed over time. Students learn about how climate change is affecting our glaciers and come up with an action plan to help prevent the further loss of our glaciers.",
    fr: "Les élèves chercheront l’emplacement des glaciers de l’Alberta et observeront comment ils ont changé au fil du temps. Les élèves apprendront l’effet des changements climatiques sur nos glaciers et prépareront un plan d’action pour contribuer à prévenir et à ralentir la perte de nos glaciers."
  },

  approximateTime: {
    en: "30 min plus project time",
    fr: "30 min plus le temps du projet"
  },

  files: {
    en: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Love it or Lose it: Alberta Glacier Edition Lesson Plan",
        url: null
      },
      {
        FileType: FileType.STUDENT_WORKSHEET,
        title: "Love it or Lose it: Alberta Glacier Edition: Student Worksheet",
        url: null
      },
      {
        FileType: FileType.PRESENTATION_SLIDES,
        title: "Glaciers in Alberta Slide Show",
        url: null
      }
    ],

    fr: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Aimez-les ou perdez-les : les glaciers de l'Alberta : plan de leçon",
        url: null
      },
      {
        FileType: FileType.STUDENT_WORKSHEET,
        title: "Aimez-les ou perdez-les : les glaciers de l'Alberta : feuille de travail de l'élève",
        url: null
      },
      {
        FileType: FileType.PRESENTATION_SLIDES,
        title: "Les glaciers en Alberta : présentation",
        url: null
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_2.id,
    Grade.GRADE_3.id,
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
    Grade.GRADE_9.id,
    Grade.GRADE_10.id,
    Grade.GRADE_11.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id
  ],

  searchTerms: {
    en: [
      "A Sense of the Land",
      "Physical Geography of Canada",
      "Wetland Ecosystems",
      "Interactions and Ecosystems",
      "Freshwater and Saltwater Systems",
      "Energy Flow in Global Systems",
      "Energy and Matter Exchange",
      "Grade 10 Science",
      "Biology 20",
      "glaciers",
      "climate change",
      "action plan",
      "personal actions",
      "glacier loss"
    ],

    fr: [
      "glaciers",
      "changements climatiques",
      "plan d’action",
      "perte des glaciers"
    ]
  },

  learningOutcomes: {
    en: [
      "Identify glacier location in Alberta.",
      "Observe change in the glaciers over time.",
      "Investigate how climate change is affecting Alberta's glaciers.",
      "Develop an action plan of how they can help prevent further loss of the glaciers."
    ],

    fr: [
      "Trouver l’emplacement des glaciers de l’Alberta.",
      "Observer comment les glaciers ont changé au fil du temps.",
      "Étudier l’effet des changements climatiques sur les glaciers de l’Alberta.",
      "Préparer un plan d’action pour contribuer à prévenir et à ralentir la perte des glaciers."
    ]
  },

  videoIds: [
    "goi-43g-every-year-its-further-to-get-to-work",
    "goi-14g-where-will-the-glacier-be-in-30-years",
    "goi-24g-growth-and-attrition",
    "goi-13g-where-was-the-glacier-in-1982",
    "goi-12g-where-was-the-athabasca-glacier-in-2006",
    "goi-19g-why-should-we-protect-glaciers",
    "goi-01g-are-people-affecting-the-glaciers",
    "goi-33g-what-can-we-do-to-protect-alberta"
  ],

  relatedResources: [
    {
      id: "mountain-legacy-project",
      title: "Mountain Legacy Project",
      url: "http://mountainlegacy.ca/"
    },
    {
      id: "guardians-of-the-ice",
      title: "Guardians of the Ice",
      url: "https://guardiansoftheice.com/the-columbia-icefield/"
    }
  ],

};