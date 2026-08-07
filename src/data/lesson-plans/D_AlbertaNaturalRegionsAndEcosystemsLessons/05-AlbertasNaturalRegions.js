/**
 * @file 05-AlbertasNaturalRegions.js
 * @module Data/LessonPlans/AlbertaNaturalRegions
 * @desc Contains localized metadata and lesson plan information for the Alberta's Natural Regions lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const albertasNaturalRegionsLessonPlan = {
  id: "abregions-05-alberta-natural-regions",

  themeId: LessonTheme.ALBERTA_NATURAL_REGIONS.id,

  title: {
    en: "Alberta's Natural Regions",
    fr: "Régions naturelles de l’Alberta"
  },

  description: {
    en: "In this activity, students will research and construct maps of Alberta's Natural Regions.",
    fr: "Dans le cadre de cette activité, les élèves font des recherches et créent des cartes des régions naturelles de l’Alberta."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Alberta's Natural Regions",
        description: "",
        url: "https://docs.google.com/document/d/1FPPfuy7iwOp9QC0pyLNjI1ujvS1EW0JU3YV4qZO9MeE/edit?usp=drive_link"
      },
      {
        id: "student-worksheet",
        title: "360 Virtual Tours Scavenger Hunt Student Worksheet",
        description: "",
        url: "https://drive.google.com/file/d/1fgBduzIjfvYWjkT2Y8m71qhiWMRjEwaL/view?usp=drive_link"
      },
      {
        id: "fillable-google-slides",
        title: "360 Virtual Tours Scavenger Hunt - Fillable Google Slides",
        description: "",
        url: "https://docs.google.com/presentation/d/1cqF8G4yz8O23Jg65PTvcoe-juJLizHjjP8vPkZY1H4k"
      },
      {
        id: "circle-student-worksheet",
        title: "360 Virtual Tours Scavenger Hunt Circle Student Worksheet",
        description: "",
        url: "https://docs.google.com/presentation/d/1iGXFpDscj18TBWM_f03jUxc7rGtzPWRxn6Yxvrn-Pfs"
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "Régions naturelles de l’Alberta",
        description: "",
        url: "https://docs.google.com/document/d/1KWFyGht_qb3wHVTSE9zrLfotffrNw2uI/edit"
      },
      {
        id: "student-worksheet",
        title: "Visites virtuelles à 360 degrés et chasse au trésor : feuille de travail de l’élève",
        description: "",
        url: null
      },
      {
        id: "fillable-google-slides",
        title: "Visites virtuelles à 360 degrés et chasse au trésor : diapositives Google à remplir",
        description: "",
        url: "https://docs.google.com/presentation/d/1FrvTy8G4cR0kKAunb0rwjshiy56Uykg4/edit?slide=id.p1#slide=id.p1"
      },
      {
        id: "circle-student-worksheet",
        title: "Visites virtuelles à 360 degrés et chasse au trésor : feuille de travail de l’élève (encercler)",
        description: "",
        url: null
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
      "natural regions",
      "alberta",
      "maps",
      "geography",
      "physical regions"
    ],
    fr: [
      "régions naturelles",
      "alberta",
      "cartes",
      "géographie",
      "régions physiques"
    ]
  },

  learningOutcomes: {
    en: [
      "Distinguish between Alberta's natural regions based on physical geography",
      "Describe key natural features such as landforms, vegetation, and climate",
      "Identify the relationship between natural resources and regional geography",
      "Construct and annotate maps showing Alberta's physical regions"
    ],
    fr: [
      "Faire la distinction entre les régions naturelles de l’Alberta en fonction de la géographie physique.",
      "Décrire les caractéristiques naturelles principales, comme les reliefs, la végétation et le climat.",
      "Indiquer la relation entre les ressources naturelles et la géographie physique.",
      "Créer et annoter des cartes montrant les régions physiques de l’Alberta."
    ]
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
