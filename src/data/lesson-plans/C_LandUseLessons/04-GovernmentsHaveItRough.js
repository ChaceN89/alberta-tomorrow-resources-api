/**
 * @file 04-GovernmentsHaveItRough.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the Governments Have It Rough lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const governmentsHaveItRoughLessonPlan = {
  id: "landuse-04c-governments-have-it-rough",

  themeId: LessonTheme.LAND_USE.id,

  title: {
    en: "Governments Have it Rough! Can You Make Everyone Happy?",
    fr: "C’est difficile pour les gouvernements! Pouvez-vous rendre tout le monde heureux?"
  },

  description: {
    en: "Students assume the role of government planners tasked with balancing the interests of various stakeholders in land-use decisions. Through the simulator, they explore the complexities of policy-making and the challenges of satisfying diverse community needs.",
    fr: "Les élèves jouent le rôle des planificateurs gouvernementaux responsables de trouver le juste équilibre entre les intérêts des divers intervenants dans leurs décisions sur l’utilisation des terres. Avec le simulateur, ils explorent la complexité de l’élaboration des politiques et les défis de répondre aux divers besoins de la communauté."
  },

  approximateTime: {
    en: "120 min",
    fr: "120 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Governments Have it Rough!: Lesson Plan",
        description: "",
        url: "https://docs.google.com/document/d/1aNPK0LmRNRv66uWmo3VaUHwx2cjW_lAI/edit"
      },
      {
        id: "student-worksheet",
        title: "Governments Have it Rough: Student Worksheet",
        description: "",
        url: null
      },
      {
        id: "answer-key",
        title: "Governments Have it Rough: Answer Key",
        description: "",
        url: null
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "C’est difficile pour les gouvernements! : plan de leçon",
        description: "",
        url: "https://docs.google.com/document/d/1x0a4-z0-FNdjN8_1OWLkeNLESI7Hx4AU/edit"
      },
      {
        id: "student-worksheet",
        title: "C’est difficile pour les gouvernements! : feuille de travail de l’élève",
        description: "",
        url: null
      },
      {
        id: "answer-key",
        title: "C’est difficile pour les gouvernements! : clé de correction",
        description: "",
        url: null
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_9.id
  ],

  subjectIds: [
    Subject.SOCIAL_STUDIES.id
  ],

  searchTerms: {
    en: [
      "policy-making",
      "stakeholder engagement",
      "land-use planning",
      "government roles"
    ],
    fr: [
      "gouvernements",
      "intervenants",
      "politiques",
      "utilisation des terres"
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

  videoIds: [
    "env-01c-natural-landscapes",
    "env-02c-caribou-habitat",
    "env-03c-grizzly-habitat",
    "env-04c-fish-habitat",
    "env-05c-water-quality",
    "env-06c-greenhouse-gasses",
    "soc-01d-human-population",
    "soc-02d-gdp",
    "soc-03d-hydrocarbon-production",
    "soc-04d-timber-production",
    "soc-05d-agriculture-production",
    "soc-06d-water-consumption"
  ],

  relatedResources: {
    en: [],
    fr: []
  }
};
