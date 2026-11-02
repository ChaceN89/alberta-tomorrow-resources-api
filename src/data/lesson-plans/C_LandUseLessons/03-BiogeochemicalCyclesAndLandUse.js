/**
 * @file 03-BiogeochemicalCyclesAndLandUse.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the Biogeochemical Cycles and Land Use lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 * @updated Nov 02, 2026 - updated lesson resource URLs using the V8 mapping
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const biogeochemicalCyclesAndLandUseLessonPlan = {
  id: "landuse-03c-biogeochemical-cycles",

  themeId: LessonTheme.LAND_USE.id,

  title: {
    en: "Biogeochemical Cycles",
    fr: "Cycles biogéochimiques"
  },

  description: {
    en: "Students explore the water, carbon, nitrogen, and phosphorus cycles and how landuse disrupts them. They use the simulator to explore scenarios and develop mitigation strategies.",
    fr: "Les élèves étudient les cycles biogéochimiques de l’eau, du carbone, de l’azote et du phosphore, et comment l’utilisation des terres perturbent ces derniers. Ils utilisent le simulateur pour explorer des scénarios et développer des stratégies d’atténuation."
  },

  approximateTime: {
    en: "180 min",
    fr: "180 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Biogeochemical Cycles: Bio 20 Lesson Plan",
        url: "https://docs.google.com/document/d/1IM5oCd92ukJcRS2_7oc32dxNq6x3yArb3aEDWw4BcPU/edit"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Biogeochemical Cycles: Bio 20 Student Worksheet",
        url: "https://docs.google.com/document/d/1Knd-0RQaq0PIPQEFwbkz9DUS1DpzdXudDw9aoBKkS-4/edit"
      },
      {
        fileType: FileType.ANSWER_KEY,
        title: "Biogeochemical Cycles: Bio 20 Answer Key",
        url: "https://docs.google.com/document/d/1Bw5a6xQoKQW8R8i3P76ymLw1btT6PGwD7ejJPC823TY/edit"
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Cycles biogéochimiques : Biologie 20 - plan de leçon",
        url: "https://docs.google.com/document/d/1NTmqATlG7Iv5swmk31QzWI41w9tYY883js_VDNeUBGU/edit"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Cycles biogéochimiques : Biologie 20 - feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1gOt1x40DRKUGDR1igXeg_MnoFLz-Y46v_z6Woojc8YE/edit"
      },
      {
        fileType: FileType.ANSWER_KEY,
        title: "Cycles biogéochimiques : Biologie 20 - clé de correction",
        url: "https://docs.google.com/document/d/1s6XubMREQSbpAcJq6TUyN_RmycvVGPJTWmdnkWrVFV0/edit"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_11.id
  ],

  subjectIds: [
    Subject.BIOLOGY.id,
    Subject.SCIENCE.id
  ],

  searchTerms: {
    en: [
      "biogeochemical cycles",
      "nutrients",
      "eutrophication",
      "land use planning"
    ],
    fr: [
      "cycles biogéochimiques",
      "éléments nutritifs",
      "eutrophisation",
      "utilisation des terres"
    ]
  },

  learningOutcomes: {
    en: [
      "Define biogeochemical cycles",
      "Investigate nutrient cycles and disruptions",
      "Explore scenarios using the simulator",
      "Develop a sustainable landuse plan"
    ],
    fr: [
      "Définir les cycles biogéochimiques.",
      "Étudier les cycles des éléments nutritifs et les perturbations.",
      "Explorer des scénarios en utilisant le simulateur.",
      "Créer un plan durable d’utilisation des terres."
    ]
  },

  videoIds: [
    "env-01c-natural-landscapes",
    "env-02c-caribou-habitat",
    "env-03c-grizzly-habitat",
    "env-04c-fish-habitat",
    "env-05c-water-quality",
    "env-06c-greenhouse-gases",
    "soc-01d-human-population",
    "soc-02d-gdp",
    "soc-03d-oil-and-gas-production",
    "soc-04d-forestry",
    "soc-05d-agriculture-production",
    "soc-06d-water-consumption"
  ],

  relatedResources: []
};
