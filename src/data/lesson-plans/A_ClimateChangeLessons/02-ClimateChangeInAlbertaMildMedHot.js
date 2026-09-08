/**
 * @file 02-ClimateChangeInAlbertaMildMedHot.js
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
  id: "climate-02-climate-change-in-alberta-mild-med-hot",

  themeId: LessonTheme.CLIMATE_CHANGE.id,

  title: {
    en: "Climate Change in Alberta: Investigating Mild Med Hot Climate Scenarios",
    fr: "Changements climatiques en Alberta : étudier les scénarios climatiques doux, moyens et chauds"
  },

  description: {
    en: "Students will use the Alberta Tomorrow simulator to investigate different climate change scenarios and see the consequences of different futures and the benefits of using beneficial management practices.",
    fr: "Les élèves utiliseront le simulateur d’Alberta Tomorrow pour étudier différents scénarios de changements climatiques et voir les répercussions des différents avenirs et les avantages d’appliquer les pratiques de gestion bénéfiques."
  },

  approximateTime: {
    en: "90 min",
    fr: "90 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Climate Change in Alberta: Investigating Mild, Medium and Hot Climate Scenarios: Lesson Plan",
        url: "https://docs.google.com/document/d/1kymo9-CGBx6pPJtg5JnaGtfxYDVF_yGGFTJGeLc-ul4"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Climate Change in Alberta: Using the Alberta Tomorrow Simulator: Investigating Mild, Medium and Hot Scenarios Student Worksheet",
        url: "https://docs.google.com/document/d/11HWj4NpysAj7OpfOnATllkD-x4TVCevlpOZLTDhbZhU"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Climate Change: Truth and Misconceptions - Presentation Slides",
        url: "https://docs.google.com/presentation/d/1reQRVGi0VSEUcPAwk4SZ-NCiakFZNO3De-_0s9PehHk"
      }
    ],

    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Changements climatiques en Alberta : étudier les scénarios climatiques Doux, Moyen et Chaud : plan de leçon",
        url: "https://docs.google.com/document/d/1mzr-jLVldiHcQmJdBxeQKTclW3nEChuA"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Changements climatiques en Alberta : utiliser le simulateur d’Alberta Tomorrow : feuille de travail sur les scénarios doux, moyens et chauds",
        url: "https://docs.google.com/document/d/1W1cEJAggaNk5jpMf0KrTp8RKRK40d2Yg"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Changements climatiques : vérités et idées fausses – présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/17-5R62F8HKHMgR73L6VYdk74aj13nudr"
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
    Subject.BIOLOGY.id,
    Subject.CTS.id,
    Subject.OUTDOOR_EDUCATION.id
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
    fr: ["Sciences 14", "Biologie 20", "territoire", "écosystèmes des zones humides", "arbres et forêts", "interactions et écosystèmes", "écosystèmes d’eau douce et d’eau salée", "prise de décision gouvernementale", "chimie environnementale", "mondialisation", "énergie et matière dans les changements chimiques", "la Terre en évolution", "échanges d’énergie et de matière dans la biosphère", "utilisation des terres", "faune", "scénarios climatiques", "RCPs", "paysages naturels", "écosystèmes changeants", "qualité de l’eau", "consommation d’eau", "Alberta", "économie", "services écosystémiques", "pratiques de gestion bénéfiques", "maintien du statu quo", "GES", "changements climatiques", "stockage biologique du carbone", "foresterie", "production de pétrole et de gaz", "agriculture", "PIB", "population humaine", "santé des poissons", "avenir", "planification de l’utilisation des terres", "changement historique", "activité industrielle"]
  },

  learningOutcomes: {
    en: [
      "Investigate the impact of climate change on Alberta's precipitation, climate",
      "Investigate the impact of climate change on Alberta's natural regions",
      "Investigate the impact of climate change on our environment and economy"
    ],
    fr: [
      "Étudier les effets des changements climatiques sur les précipitations et le climat en Alberta.",
      "Étudier les effets des changements climatiques sur les régions naturelles de l’Alberta.",
      "Étudier les effets des changements climatiques sur notre environnement et notre économie."
    ]
  },

  videoIds: [
    "landscape-01b-climate-change"
  ],

  relatedResources: []
};
