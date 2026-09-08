/**
 * @file 03-IceCoreBasics.js
 * @module Data/LessonPlans/GlaciersAndWatersheds
 * @desc Contains localized metadata and lesson plan information for the Ice Core Basics lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const iceCoreBasicsLessonPlan = {
  id: "glaciers-03b-ice-core-basics",

  themeId: LessonTheme.GLACIERS_AND_WATERSHEDS.id,

  title: {
    en: "Ice Core Basics",
    fr: "Notions de base sur les carottes de glace"
  },

  description: {
    en: "The students will watch videos of a glaciologist talking about how she analyzes the ice cores she collects from glaciers.",
    fr: "Les élèves regardent les vidéos d’une glaciologue qui parle de ses analyses des carottes de glace qu’elle prélève dans les glaciers."
  },

  approximateTime: {
    en: "30 min",
    fr: "30 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Ice Core Basics: Lesson Plan",
        url: "https://docs.google.com/document/d/1ju0v6zBaJoDP6enneGbY0HAMjSeIYZK63sP3gVRHw30"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Ice Core Basics: Student Worksheet",
        url: "https://docs.google.com/document/d/1g3lM4vTFCBDtodNbkB1fCCKixxbEvZQH7hDxJhjoDhw"
      }
    ],

    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Notions de base sur les carottes de glace : plan de leçon",
        url: "https://docs.google.com/document/d/1bLE67Z_lkQd74jEWKgUM1ikKFIUMZETI"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Notions de base sur les carottes de glace : feuille de travail de l'élève",
        url: "https://docs.google.com/document/d/1plOdui_VyO8bjxabKTaDmO7s9B5J1hgm"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_5.id,
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
      "Wetlands",
      "Interactions and Ecosystems",
      "Freshwater and Saltwater Systems",
      "Environmental Chemistry",
      "Energy Flow in Global Systems",
      "Energy and Matter in Chemical Change",
      "Energy and Matter in the Biosphere",
      "Chemical Changes",
      "Matter and Energy",
      "Biology 20",
      "Science 14",
      "oxygen isotopes",
      "climate change",
      "glaciers",
      "water quality",
      "persistent chemicals",
      "cfc's"
    ],
    fr: [
      "carottes de glace",
      "glaciologue",
      "isotopes",
      "produits chimiques persistants"
    ]
  },

  learningOutcomes: {
    en: [
      "Understand what we can learn from ice core analysis.",
      "See how ice coring is done.",
      "Understand what Persistent Chemicals and Endocrine Receptors are."
    ],
    fr: [
      "Comprendre ce que nous pouvons apprendre de l’analyse des carottes de glace.",
      "Voir comment on procède au prélèvement des échantillons de glace (carottage).",
      "Comprendre en quoi consistent les produits chimiques persistants et les récepteurs endocriniens."
    ]
  },

  videoIds: [
    "oth-01z-oxygen-isotopes",
    "soc-06d-water-consumption",
    "env-05c-water-quality",
    "goi-30g-what-is-the-picarro-machine",
    "goi-28g-measuring-isotopes",
    "goi-27g-ion-chromatography",
    "goi-26g-how-do-chemicals-that-were-trapped",
    "goi-21g-endocrine-disruptors"
  ],

  relatedResources: []
};
