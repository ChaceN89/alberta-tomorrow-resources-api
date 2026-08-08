/**
 * @file 02-ClimateChangeInAlberta.js
 * @module Data/LessonPlans/ClimateChange
 * @desc Contains localized metadata and lesson plan information for the Climate Change in Alberta lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const climateChangeInAlbertaLessonPlan = {
  id: "climate-02a-scenarios",

  themeId: LessonTheme.CLIMATE_CHANGE.id,

  title: {
    en: "Climate Change in Alberta",
    fr: "Changements climatiques en Alberta"
  },

  description: {
    en: "Students will use the Alberta Tomorrow simulator to investigate different climate change scenarios and see the consequences of different futures and the benefits of using beneficial management practices.",
    fr: "Les élèves utiliseront le simulateur d’Alberta Tomorrow pour étudier différents scénarios de changements climatiques et voir les répercussions des différents avenirs et les avantages d’appliquer les pratiques de gestion bénéfiques."
  },

  approximateTime: {
    en: "N/A",
    fr: "N/A"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Climate Change in Alberta: Investigating Mild, Medium and Hot Climate Scenarios: Lesson Plan",
        url: null
      },
      {
        fileType: FileType.LESSON_PLAN,
        title: "Science 6 Climate Change in Alberta - Lesson Plan",
        url: null
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Climate Change in Alberta - Student Worksheet",
        url: null
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Energy Resources and Climate Change in Alberta - Student Worksheet",
        url: null
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Climate Change: Truth and Misconceptions - Presentation Slides",
        url: null
      }
    ],

    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Changements climatiques en Alberta : étudier les scénarios climatiques Doux, Moyen et Chaud : plan de leçon",
        url: null
      },
      {
        fileType: FileType.LESSON_PLAN,
        title: "Sciences, 6e année, Changements climatiques en Alberta – plan de leçon",
        url: null
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Changements climatiques en Alberta – feuille de travail de l’élève",
        url: null
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Ressources énergétiques et changements climatiques – présentation PowerPoint",
        url: null
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Changements climatiques : vérités et idées fausses – présentation PowerPoint",
        url: null
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
    Subject.SOCIAL_STUDIES.id,
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id
  ],

  searchTerms: {
    en: [
      "Science 14",
      "Biology 20",
      "A Sense of the Land",
      "Wetland Ecosystems",
      "Trees and Forests",
      "Interactions and Ecosystems",
      "Freshwater and Saltwater Ecosystems",
      "Government Decision Making",
      "Environmental Chemistry",
      "Globalization",
      "Energy and Matter in Chemical Change",
      "The Changing Earth",
      "Energy and Matter Exchange in the Biosphere",
      "land use",
      "wildlife",
      "climate scenarios",
      "RCPs",
      "natural landscapes",
      "shifting ecosystems",
      "water quality",
      "water consumption",
      "alberta",
      "economy",
      "ecosystem services",
      "beneficial management practices",
      "business as usual",
      "ghgs",
      "climate change",
      "biotic carbon storage",
      "forestry",
      "oil and gas production",
      "agriculture",
      "GDP",
      "human population",
      "fish health",
      "future",
      "land use planning",
      "historical change",
      "industrial activity"
    ],
    fr: ["Sciences 14", "Biologie 20", "un sens du territoire", "Wetterritoire Ecosystems", "Trees and Forests", "Interactions and Ecosystems", "Fresheau and Saltwater Ecosystems", "Government Decision Making", "chimie environnementale", "mondialisation", "Energy and Matter in Chemical Change", "la Terre en évolution", "Energy and Matter Exchange in the Biosphere", "utilisation des terres", "faune", "scénarios climatiques", "RCPs", "paysages naturels", "écosystèmes changeants", "qualité de l’eau", "consommation d’eau", "Alberta", "économie", "services écosystémiques", "pratiques de gestion bénéfiques", "maintien du statu quo", "GES", "changements climatiques", "stockage biologique du carbone", "foresterie", "production de pétrole et de gaz", "agriculture", "PIB", "population humaine", "santé des poissons", "avenir", "planification de l’utilisation des terres", "changement historique", "activité industrielle"]
  },

  learningOutcomes: {
    en: [
      "Investigate the impact of climate change on Alberta's precipitation, climate",
      "Investigate the impact of climate change on Alberta's natural regions",
      "Investigate the impact of climate change on our environment and economy"
    ],
    fr: [
      "Étudier l’effet que peuvent avoir les changements climatiques sur la terre, les plantes, les humains et les autres animaux.",
      "Examiner les actions personnelles qui peuvent être prises pour réduire les changements climatiques.",
      "Étudier l’effet de la réduction des gaz à effet de serre nets."
    ]
  },

  videoIds: [
    "landscape-01b-climate-change"
  ],

  relatedResources: []
};
