/**
 * @file 05-Aquifers.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Aquifers lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const aquifersLessonPlan = {
  id: "brbc-05f-aquifers",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Aquifers",
    fr: "Aquifères"
  },

  description: {
    en: "In this activity you will learn about the aquifer and groundwater within the Elbow River sub basin.",
    fr: "Dans le cadre de cette activité, vous apprendrez des faits sur l’aquifère et l’eau souterraine dans le sous-bassin de la rivière Elbow."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Aquifers - Google Doc",
        url: "https://docs.google.com/document/d/1GBnAfLDry3L8DEJTw1hqczlE5lSD0r5O/"
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "Aquifères – document Google",
        url: "https://docs.google.com/document/d/1GBnAfLDry3L8DEJTw1hqczlE5lSD0r5O/"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id
  ],

  subjectIds: [
    Subject.SCIENCE.id
  ],

  searchTerms: {
    en: [
      "aquifers",
      "groundwater",
      "elbow river"
    ],
    fr: [
      "aquifères",
      "eau souterraine",
      "rivière elbow"
    ]
  },

  learningOutcomes: {
    en: [
      "Examine the landscape and compare them to what the geology below could look like",
      "Investigate the consequences of resource production, urbanization, and economic growth on aquifers and groundwater"
    ],
    fr: [
      "Examiner le paysage et le comparer à ce à quoi la géologie sous-jacente pourrait ressembler.",
      "Étudier les répercussions de la production des ressources, de l’urbanisation et de la croissance économique sur les aquifères et l’eau souterraine."
    ]
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
