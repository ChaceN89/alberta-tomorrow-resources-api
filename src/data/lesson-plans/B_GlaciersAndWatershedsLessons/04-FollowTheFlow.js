/**
 * @file 04-FollowTheFlow.js
 * @module Data/LessonPlans/GlaciersAndWatersheds
 * @desc Contains localized metadata and lesson plan information for the Follow the Flow lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const followTheFlowLessonPlan = {
  id: "glaciers-04b-follow-the-flow",

  themeId: LessonTheme.GLACIERS_AND_WATERSHEDS.id,

  title: {
    en: "Follow the Flow: Water Quality and the Columbia Icefield",
    fr: "Suivre le flux : la qualité de l’eau et le champ de glace Columbia"
  },

  description: {
    en: "Students will learn what a watershed is and identify what watershed they live within. Through watching some short video interviews students will understand how climate change is resulting in persistent chemicals, some banned in Canada, are being released into the rivers from which we get our drinking water from.",
    fr: "Les élèves apprennent ce qu’est un bassin hydrographique et dans quel bassin hydrographique ils vivent. En regardant de courtes vidéos d’entrevues, les élèves comprendront comment les changements climatiques font que des produits chimiques persistants, dont certains sont interdits au Canada, sont rejetés dans les rivières où nous puisons notre eau potable."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Follow the Flow: Lesson Plan",
        url: "https://docs.google.com/document/d/1twB1ff_o9mF3ilUHyIYNV9oBfgcYPau7naA4pnK7POk"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Follow the Flow: Student Worksheet",
        url: "https://docs.google.com/document/d/1vhF9bySogY1Ie_ghov17TdJx93WA6u-j94BHeJCg2NM"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Follow the Flow: Slide Show",
        url: "https://docs.google.com/presentation/d/12OrymNcfZXL8iWEIgtktG0Lkr0QsVZbCbdvhrtMJXr0"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Glaciers in Alberta: Slide Show",
        url: "https://docs.google.com/presentation/d/1rBX6NS-xWfHD3HxAV341q1ZC4wZV5FvNaUdsLi94ptg"
      }
    ],

    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Suivre le flux : plan de leçon",
        url: "https://docs.google.com/document/d/1ETh1-9VemIzGnnd9eaVxbwtQ_IGlkw0g"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Suivre le flux : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/14nd4-44ffnWBS-bjr41M6whUkDrrCarw"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Suivre le flux : présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/1rl9N4QY6T2q3J9QYrYFAuIO2GN5l8C_b"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Les glaciers en Alberta : présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/1rBX6NS-xWfHD3HxAV341q1ZC4wZV5FvNaUdsLi94ptg"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_5.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
    Grade.GRADE_10.id,
    Grade.GRADE_11.id,
    Grade.GRADE_12.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id,
    Subject.OUTDOOR_EDUCATION.id,
    Subject.CTS.id
  ],

  searchTerms: {
    en: [
      "Science 14",
      "Biology 20",
      "Physical Geography of Canada",
      "Wetlands Ecosystems",
      "Interactions and Ecosystems",
      "Freshwater and Saltwater Systems",
      "Environmental Chemistry",
      "Energy Flow in Global Systems",
      "Climate Change",
      "Persistent Chemicals",
      "cfcs",
      "water",
      "watershed",
      "glaciers",
      "water source"
    ],
    fr: [
      "bassin hydrographique",
      "qualité de l’eau",
      "produits chimiques persistants",
      "changements climatiques",
      "champ de glace Columbia"
    ]
  },

  learningOutcomes: {
    en: [
      "Identify their watershed and drainage basin.",
      "Find the Columbia Icefield on the map.",
      "Define persistent chemicals.",
      "Investigate factors that contribute to water quality."
    ],
    fr: [
      "Identifier leur bassin hydrographique et leur bassin versant.",
      "Trouver le champ de glace Columbia sur la carte.",
      "Définir les produits chimiques persistants.",
      "Étudier les facteurs qui ont un effet sur la qualité de l’eau."
    ]
  },

  videoIds: [
    "goi-32g-watershed-great-divide",
    "goi-11g-where-does-water-from-the-snowdome",
    "goi-26g-how-do-chemicals-that-were-trapped",
    "goi-29g-persistent-chemicals-in-alberta",
    "goi-05g-how-do-forest-fires-affect-glaciers"
  ],

  relatedResources: []
};
