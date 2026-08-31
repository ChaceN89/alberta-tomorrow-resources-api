/**
 * @file 04-AlbertasNaturalResources.js
 * @module Data/LessonPlans/AlbertaNaturalRegions
 * @desc Contains localized metadata and lesson plan information for the Alberta's Natural Resources lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const albertasNaturalResourcesLessonPlan = {
  id: "abregions-04d-natural-resources",

  themeId: LessonTheme.ALBERTA_NATURAL_REGIONS.id,

  title: {
    en: "Alberta's Natural Resources",
    fr: "Ressources naturelles de l’Alberta"
  },

  description: {
    en: "Students will investigate where different natural resources are located in Alberta and how they have influenced settlement, the environment and economy since 1910 to present, and how they may influence the province in the future.",
    fr: "Les élèves font des recherches sur l’emplacement des différentes ressources naturelles en Alberta et comment elles ont influencé le peuplement, l’environnement et l’économie, de 1910 à nos jours, et l’influence qu’elles peuvent avoir sur la province dans le futur."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Alberta's Natural Resources: Lesson Plan",
        url: "https://docs.google.com/document/d/1pMXs-TmZTZcVP5PSmQVUi2jyT9IRvd_bOvSCBw6bSdg"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Alberta's Natural Resources: Student Worksheet",
        url: "https://docs.google.com/document/d/11p5vAYKphMkiPaqH_4zJ49AFQKH_WEhSB5yVTxKjAAw"
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Ressources naturelles de l’Alberta : plan de leçon",
        url: "https://docs.google.com/document/d/1KUFyuRXXLDf0bmCnTnFo4xTqN6QxFoha/edit"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Ressources naturelles de l’Alberta : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1HVNoxTzEKVB58FFgxduCn01xek2Lde6g/edit"
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
      "natural resources",
      "alberta",
      "settlement",
      "economy",
      "environment"
    ],
    fr: [
      "ressources naturelles",
      "alberta",
      "peuplement",
      "économie",
      "environnement"
    ]
  },

  learningOutcomes: {
    en: [
      "Understand the difference between renewable and non-renewable resources",
      "Explore how Alberta's geography affects the location and availability of natural resources",
      "Analyze how natural resources have shaped Alberta's economic development and settlement patterns",
      "Use satellite imagery and simulations to observe environmental and socio-economic changes over time",
      "Predict and propose sustainable land use strategies for Alberta's future"
    ],
    fr: [
      "Comprendre les différences entre ressources renouvelables et non renouvelables.",
      "Étudier quel effet la géographie de l’Alberta a sur l’emplacement et la disponibilité des ressources naturelles.",
      "Analysez comment les ressources naturelles ont façonné le développement économique et les modèles d’établissement de l’Alberta.",
      "Utiliser les images satellite et les simulations pour observer les changements des indicateurs environnementaux et socioéconomiques au fil du temps.",
      "Prédire et proposer des stratégies d’utilisation durable des terres pour l’avenir de l’Alberta."
    ]
  },

  videoIds: [],

  relatedResources: []
};
