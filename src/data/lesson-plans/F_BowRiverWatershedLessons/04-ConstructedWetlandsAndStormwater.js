/**
 * @file 04-ConstructedWetlandsAndStormwater.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Constructed Wetlands and Stormwater lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const constructedWetlandsAndStormwaterLessonPlan = {
  id: "brbc-04f-constructed-wetlands-stormwater",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Constructed Wetlands and Stormwater",
    fr: "Marais artificiels et eau pluviale"
  },

  description: {
    en: "In this activity you will learn about stormwater and how wetlands are constructed to manage it.",
    fr: "Dans le cadre de cette activité, vous apprendrez des faits sur l’eau de pluie et sur la construction de marais artificiels pour la contenir."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Constructed Wetlands and Stormwater - Google Doc",
        description: "",
        url: "https://docs.google.com/document/d/1GrkDcND2Fflt_-S-R6DyNrJL8lwalLG_/"
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "Marais artificiels et eau pluviale – document Google",
        description: "",
        url: "https://docs.google.com/document/d/1GrkDcND2Fflt_-S-R6DyNrJL8lwalLG_/"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.SOCIAL_STUDIES.id
  ],

  searchTerms: {
    en: [
      "wetlands",
      "stormwater",
      "water management"
    ],
    fr: [
      "marais",
      "eau pluviale",
      "gestion de l’eau"
    ]
  },

  learningOutcomes: {
    en: [
      "Examine stormwater functions and the role of wetlands in water management and quality",
      "Investigate the consequences of resource production, urbanization, and economic growth on wetlands and water quality",
      "Examine the negative environmental impact of disruption of the watershed as a result of resource use"
    ],
    fr: [
      "Examiner les fonctions de l’eau pluviale et le rôle des marais dans la gestion et la qualité de l’eau.",
      "Étudier les répercussions de la production des ressources, de l’urbanisation et de la croissance économique sur les marais et la qualité de l’eau.",
      "Examiner les effets négatifs sur l’environnement de la perturbation des bassins hydrographiques à la suite de l’utilisation des ressources."
    ]
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
