/**
 * @file 02-AlbertasEcosystemDiversity.ts
 * @module Data/LessonPlans/AlbertaNaturalRegions
 * @desc Contains localized metadata and lesson plan information for the Alberta's Ecosystem Diversity lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - updated English/French lesson-plan URLs
 */

import { LessonTheme } from "../../../enums/LessonThemeIds.js";
import { FileType } from "../../../enums/fileTypes.js";
import { Grade } from "../../../enums/gradeIds.js";
import { Subject } from "../../../enums/subjectIds.js";

import { GOOGLE_DOCS_BASE_URL } from "../../../core/assetUrls.js";

import type { LessonPlanSource } from "../../../core/lessonPlanTypes.js";

const lessonId = "abregions-02d-ecosystem-diversity";

export const albertasEcosystemDiversityLessonPlan = {
  id: lessonId,

  themeId: LessonTheme.ALBERTA_NATURAL_REGIONS.id,

  title: {
    en: "Alberta's Ecosystem Diversity",
    fr: "Diversité des écosystèmes de l’Alberta"
  },

  description: {
    en: "In this activity, students explore Alberta's ecosystems using 360 Virtual Tours to identify and compare abiotic and biotic components. They will analyze how ecosystem characteristics influence plant and animal diversity.",
    fr: "Dans le cadre de cette activité, les élèves étudient les écosystèmes de l’Alberta en effectuant des visites virtuelles à 360 degrés pour repérer et comparer les composants abiotiques et biotiques. Ils analyseront comment les caractéristiques de l’écosystème influence la diversité des plantes et des animaux."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Ecosystems in Alberta: Lesson Plan",
        url: `${GOOGLE_DOCS_BASE_URL}/document/d/1GWB1yWcrgStwDGfjLjrYDBitg7oXBcb7Z-VUcSGFFFM`,
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "360 Virtual Tours Scavenger Hunt - Fillable Google Slides",
        url: `${GOOGLE_DOCS_BASE_URL}/presentation/d/17NmG5afAwCA12cb5tdobQO7XrcPzGxUSODk_rzsSAbE`,
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Écosystèmes en Alberta : plan de leçon",
        url: `${GOOGLE_DOCS_BASE_URL}/document/d/1GFr1Jz7EOqUl4CE9-Rr6ihL0piyh74QNA6XhNCV6M8M`,
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Chasse au trésor dans les écosystèmes de l’Alberta",
        url: `${GOOGLE_DOCS_BASE_URL}/presentation/d/1iz0b3BOVfKQYd-wDOzuWlUTe6eCpalgS`,
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
      "ecosystem diversity",
      "abiotic",
      "biotic",
      "plants",
      "animals",
      "alberta"
    ],
    fr: [
      "diversité des écosystèmes",
      "abiotique",
      "biotique",
      "plantes",
      "animaux",
      "alberta"
    ]
  },

  learningOutcomes: {
    en: [
      "Compare the characteristics of two Alberta ecosystems.",
      "Describe the role of abiotic and biotic factors in ecosystems.",
      "Identify factors that influence plant and animal diversity.",
      "Understand how ecosystems interact with greenhouse gases and carbon storage."
    ],
    fr: [
      "Comparer les caractéristiques de deux écosystèmes de l’Alberta.",
      "Décrire le rôle écologique des facteurs abiotiques et biotiques dans les écosystèmes.",
      "Trouver les facteurs qui influencent la diversité des plantes et des animaux.",
      "Comprendre comment les écosystèmes interagissent avec les gaz à effet de serre et le stockage du carbone."
    ]
  },

  videoIds: [],

  relatedResources: []
} satisfies LessonPlanSource;
