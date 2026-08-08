/**
 * @file 03-MappingIndigenousAreas.js
 * @module Data/LessonPlans/IndigenousVoices
 * @desc Contains localized metadata and lesson plan information for the Mapping Indigenous Areas lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const mappingIndigenousAreasLessonPlan = {
  id: "indigenous-03e-mapping-indigenous-areas",

  themeId: LessonTheme.INDIGENOUS_VOICES.id,

  title: {
    en: "Mapping Indigenous Areas",
    fr: "Cartographier les régions autochtones"
  },

  description: {
    en: "Students will construct maps of traditional territories and treaty areas in Alberta using www.albertatomorrow.ca. They will begin by looking at the Stoney Nakoda people in greater detail.",
    fr: "Les élèves créent des cartes des territoires traditionnels et des régions visées par un traité en Alberta en se servant du simulateur à www.albertatomorrow.ca. Ils commencent par étudier en détail la nation Stoney Nakoda."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Mapping Indigenous Areas: Lesson Plan",
        url: "https://docs.google.com/document/d/1Uyrqu1VyKnJFc7Y_6tZbWeXvMeHkU0zTfktRYppQlYA"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Mapping Indigenous Areas: Student Worksheet",
        url: "https://drive.google.com/file/d/1TD5lTrUbYJPh1OxBeEULOzkZ_q1L5xXv/view?usp=drive_link"
      },
      {
        fileType: FileType.ANSWER_KEY,
        title: "Mapping Indigenous Areas: Answer Sheet",
        url: "https://drive.google.com/file/d/1iv-eAK8aW24oybt-9kOSeA3h4rZengJv/view?usp=drive_link"
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Cartographier les régions autochtones : plan de leçon",
        url: "https://docs.google.com/document/d/18ZRfCirFFmvnZ5-45KBM_QWpU4RuHHpU/edit"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Cartographier les régions autochtones : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1tmkUtOZkroEhYl56TmhyVM-Zmj0nfzZ0/edit#heading=h.vqtq7mb3t4ey"
      },
      {
        fileType: FileType.ANSWER_KEY,
        title: "Cartographier les régions autochtones : clé de correction",
        url: "https://docs.google.com/document/d/1rpoEDqWvW12B7_B-Ycv73uYoHuZIABiu/edit#heading=h.7gig7j9bkhxk"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_3.id
  ],

  subjectIds: [
    Subject.SOCIAL_STUDIES.id
  ],

  searchTerms: {
    en: [
      "indigenous areas",
      "traditional territories",
      "treaty areas",
      "alberta"
    ],
    fr: [
      "régions autochtones",
      "territoires traditionnels",
      "régions visées par un traité",
      "alberta"
    ]
  },

  learningOutcomes: {
    en: [
      "Recognize Alberta as traditional territory of many Indigenous groups since time immemorial.",
      "Identify the 5 numbered Treaty Areas in Alberta and the reasons they were signed.",
      "Differentiate Traditional Territories, Treaty Areas, and Métis Settlements on a map.",
      "Use Alberta Tomorrow map layers to explore overlap between Indigenous territories.",
      "Develop respect for Indigenous contributions to Alberta's identity and land use history."
    ],
    fr: [
      "Reconnaître que l’Alberta est le territoire traditionnel de plusieurs Premières Nations depuis des temps immémoriaux.",
      "Trouver les cinq zones des traités numérotés en Alberta et les raisons pour lesquelles ils ont été signés.",
      "Distinguer sur une carte les territoires traditionnels, les régions visées par un traité et les établissements métis.",
      "Utiliser les superpositions cartographiques d’Alberta Tomorrow pour examiner les chevauchements entre les territoires autochtones.",
      "Inciter au respect pour les contributions des peuples autochtones à l’identité de l’Alberta et à l’histoire de l’utilisation des terres dans la province."
    ]
  },

  videoIds: [],

  relatedResources: []
};
