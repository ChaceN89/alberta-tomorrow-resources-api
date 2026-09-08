/**
 * @file 01-IntroductionToGlaciers.js
 * @module Data/LessonPlans/GlaciersAndWatersheds
 * @desc Contains localized metadata and lesson plan information for the Introduction to Glaciers lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const introductionToGlaciersLessonPlan = {
  id: "glaciers-01b-intro-to-glaciers",

  themeId: LessonTheme.GLACIERS_AND_WATERSHEDS.id,

  title: {
    en: "Introduction to Glaciers",
    fr: "Introduction aux glaciers"
  },

  description: {
    en: "In this lesson students will be introduced to the glaciers of Alberta, glacier terminology, meet a glaciologist from the University of Alberta and identify the effects of human activity on glaciers.",
    fr: "Dans le cadre de cette leçon, les élèves apprendront des faits sur les glaciers de l’Alberta, le vocabulaire associé aux glaciers; ils rencontreront une glaciologue de l’Université de l’Alberta et découvriront les effets des activités humaines sur les glaciers."
  },

  approximateTime: {
    en: "40 min",
    fr: "40 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Introduction to Glaciers: Lesson Plan",
        url: "https://docs.google.com/document/d/1BhngX8O-1MOSlBE5swn4425hgK7VOJKld0yfxHoY8wQ"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Introduction to Glaciers: Student Worksheet",
        url: "https://docs.google.com/document/d/10YdcGJPaI3TbOVcfOeck9XqizLjeG2Jv3gY2tTBlG4M"
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
        title: "Introduction aux glaciers : plan de leçon",
        url: "https://docs.google.com/document/d/1t5RbxeDS77jtxcVcN-qFLA7QYu02X1ZZ"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Introduction aux glaciers : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1zhM9URFB-AOdjrRl3N3fz7E6eoiSHOrY"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Les glaciers en Alberta : présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/1UUs1xkGOnZ2nMDM42bccVAcw0AJaL-Li"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_2.id,
    Grade.GRADE_3.id,
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
      "Wetland Ecosystems",
      "Interactions and Ecosystems",
      "Freshwater and Saltwater Systems",
      "Environmental Chemistry",
      "Energy Flow in Global Systems",
      "Energy and Matter in the Biosphere",
      "Investigating Matter and Energy",
      "Biology 20",
      "Science 14",
      "water",
      "wetland",
      "glaciers",
      "human activity",
      "terminology"
    ],
    fr: [
      "glaciers",
      "alberta",
      "glaciologue",
      "vocabulaire",
      "activités humaines",
      "eau"
    ]
  },

  learningOutcomes: {
    en: [
      "Develop an understanding of what glaciologists do.",
      "Identify glacier locations in Alberta.",
      "Be introduced to glacier vocabulary.",
      "Learn what Dr. Ali Criscitiello does at the Ice Core Lab.",
      "Identify the effects of human activity on glaciers."
    ],
    fr: [
      "Comprendre ce que fait un glaciologue.",
      "Trouver l’emplacement des glaciers de l’Alberta.",
      "Apprendre le vocabulaire associé aux glaciers.",
      "Apprendre ce que fait Ali Cristiciello, Ph. D., au Laboratoire canadien des carottes de glace.",
      "Découvrir les effets des activités humaines sur les glaciers."
    ]
  },

  videoIds: [
    "goi-20g-this-is-the-athabasca-glacier",
    "goi-10g-where-do-glaciers-form",
    "goi-16g-how-glaciers-move",
    "goi-02g-colour-of-the-ice",
    "goi-07g-seasonal-change-on-the-glacier",
    "goi-09g-what-is-a-moraine",
    "goi-42g-how-big-is-the-athabasca-glacier",
    "goi-04g-how-crevasses-form",
    "goi-08g-striations-on-the-rocks",
    "goi-01g-are-people-affecting-the-glaciers",
    "goi-24g-growth-and-attrition",
    "goi-19g-why-should-we-protect-glaciers"
  ],

  relatedResources: [
    {
      fileType: FileType.OTHER_FILE_TYPE,
      title: "U of A Ice Core Lab",
      url: "https://www.ualberta.ca/science/research-and-teaching/research/ice-core-archive/index.html"
    }
  ]
};
