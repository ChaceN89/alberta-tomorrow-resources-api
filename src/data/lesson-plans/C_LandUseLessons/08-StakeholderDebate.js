/**
 * @file 08-StakeholderDebate.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the Stakeholder Debate lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const stakeholderDebateLessonPlan = {
  id: "landuse-08c-stakeholder-debate",

  themeId: LessonTheme.LAND_USE.id,

  title: {
    en: "Stakeholder Debate",
    fr: "Débat d’intervenants"
  },

  description: {
    en: "In this stakeholder debate, the class is divided into different stakeholder groups. Each group must create a landuse plan that achieves their goals as a company or organization. They present their proposals to the class or government, and in the end, a consensus landuse plan that meets the goals of society is decided upon.",
    fr: "Pour cette activité de débat, la classe est divisée en différents groupes d’intervenants. Chaque groupe doit créer un plan d’utilisation des terres qui permet de réaliser ses objectifs en tant que compagnie ou organisme. Les groupes présentent leurs propositions de plan d’utilisation des terres à la classe ou au gouvernement et, à la fin, ils doivent arriver à un consensus sur le plan à retenir qui répond aux objectifs de l’ensemble de la société."
  },

  approximateTime: {
    en: "4 classes",
    fr: "4 cours"
  },

  files: {
    en: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Stakeholder Debate Lesson Plan",
        url: "https://docs.google.com/document/d/1dYPccl23Ri-zunFgkDOj2ijqErP47S78/edit?usp=drive_link&ouid=107808106052250146136&rtpof=true&sd=true"
      }
    ],
    fr: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Débat d’intervenants : plan de leçon",
        url: "https://docs.google.com/document/d/1tA21i4XtwKCopVD8L4OQ9tsDfJNgAzLT/edit"
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
      "stakeholder debate",
      "land use planning",
      "economy",
      "environmental indicators"
    ],
    fr: [
      "débat",
      "intervenants",
      "utilisation des terres",
      "consensus"
    ]
  },

  learningOutcomes: {
    en: [
      "Students will learn about the interaction between the economy and environmental indicators",
      "Students will investigate multiple perspectives on appropriate land use",
      "Students will role play different stakeholders",
      "Students will develop a landuse plan that would be best for all Albertans"
    ],
    fr: [
      "Les élèves apprennent l’interaction entre l’économie et les indicateurs environnementaux.",
      "Les élèves examinent des perspectives multiples sur l’utilisation des terres appropriée.",
      "Les élèves jouent le rôle de différents intervenants.",
      "Les élèves créent un plan d’utilisation des terres qui serait le plus profitable pour tous les Albertains."
    ]
  },

  videoIds: [],

  relatedResources: []
};
