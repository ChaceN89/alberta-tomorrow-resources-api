/**
 * @file 03-BiogeochemicalCyclesAndLandUse.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the Biogeochemical Cycles and Land Use lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
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
        id: "lesson-plan",
        title: "Biogeochemical Cycles: Bio 20 Lesson Plan",
        description: "",
        url: "https://docs.google.com/document/d/18wXANYbaRv_r3vSBRlw0xNx00mF-X0KR/edit?usp=drive_link&ouid=107808106052250146136&rtpof=true&sd=true"
      },
      {
        id: "student-worksheet",
        title: "Biogeochemical Cycles: Bio 20 Student Worksheet",
        description: "",
        url: "https://docs.google.com/document/d/1LeujOsQOvL-yAL3urmPKQSTDOXsijmjB/edit?usp=drive_link&ouid=107808106052250146136&rtpof=true&sd=true"
      },
      {
        id: "answer-key",
        title: "Biogeochemical Cycles: Bio 20 Answer Key",
        description: "",
        url: "https://docs.google.com/document/d/1OsCViid43oOZrJ6WL6ohsEjPyINpGnro/edit?usp=drive_link&ouid=107808106052250146136&rtpof=true&sd=true"
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "Cycles biogéochimiques : Biologie 20 - plan de leçon",
        description: "",
        url: "https://docs.google.com/document/d/18ewlElnzNzp6wEi7dunsnkNpDBmT_yEK/edit"
      },
      {
        id: "student-worksheet",
        title: "Cycles biogéochimiques : Biologie 20 - feuille de travail de l’élève",
        description: "",
        url: "https://docs.google.com/document/d/1pJqdjwsseUphgvDzBbtxA-WFthAQPBq0/edit"
      },
      {
        id: "answer-key",
        title: "Cycles biogéochimiques : Biologie 20 - clé de correction",
        description: "",
        url: "https://docs.google.com/document/d/1W-q4bGaM-eG7EmsKLFV_llxrtT3c18Qu/edit"
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
      "atténuation",
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
