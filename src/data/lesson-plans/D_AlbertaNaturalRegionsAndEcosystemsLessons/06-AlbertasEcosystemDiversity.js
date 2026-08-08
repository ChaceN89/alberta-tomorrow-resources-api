/**
 * @file 06-AlbertasEcosystemDiversity.js
 * @module Data/LessonPlans/AlbertaNaturalRegions
 * @desc Contains localized metadata and lesson plan information for the Alberta's Ecosystem Diversity lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const albertasEcosystemDiversityLessonPlan = {
  id: "abregions-06-ecosystem-diversity",

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
        FileType: FileType.LESSON_PLAN,
        title: "Alberta's Ecosystems Scavenger Hunt",
        url: "https://docs.google.com/presentation/d/17NmG5afAwCA12cb5tdobQO7XrcPzGxUSODk_rzsSAbE"
      },
      {
        FileType: FileType.STUDENT_WORKSHEET,
        title: "Ecosystems in Alberta: Lesson Plan",
        url: "https://docs.google.com/document/d/1yQJJ48YHAhWmoKr_TTpnmW4heDOxD31sXAv5ktS8izE"
      }
    ],
    fr: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Chasse au trésor dans les écosystèmes de l’Alberta",
        url: "https://docs.google.com/presentation/d/1iz0b3BOVfKQYd-wDOzuWlUTe6eCpalgS/edit?slide=id.p1#slide=id.p1"
      },
      {
        FileType: FileType.STUDENT_WORKSHEET,
        title: "Écosystèmes en Alberta : plan de leçon",
        url: "https://docs.google.com/document/d/1dgmUyS9EOvTZmjjOuaOaxHk207d3WOe6/edit"
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
};
