/**
 * @file 10-InvasiveSpeciesAndControl.js
 * @module Data/LessonPlans/BowRiverWatershed
 * @desc Contains localized metadata and lesson plan information for the Invasive Species and Control lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const invasiveSpeciesAndControlLessonPlan = {
  id: "brbc-10f-invasive-species-control",

  themeId: LessonTheme.BOW_RIVER_WATERSHED.id,

  title: {
    en: "Invasive Species and Control",
    fr: "Espèces envahissantes et mesures de contrôle"
  },

  description: {
    en: "In this activity you will learn about invasive species found in Alberta, along with methods to control them.",
    fr: "Dans le cadre de cette activité, vous apprendrez des faits sur les espèces envahissantes présentes en Alberta, ainsi que sur les méthodes visant à les contrôler."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Invasive Species and Control - Google Doc",
        url: "https://docs.google.com/document/d/1qqVuwjHNtqhLvMsjksYxXIQTULxbah9S/"
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "Espèces envahissantes et mesures de contrôle – document Google",
        url: "https://docs.google.com/document/d/1qqVuwjHNtqhLvMsjksYxXIQTULxbah9S/"
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
    Subject.BIOLOGY.id
  ],

  searchTerms: {
    en: [
      "invasive species",
      "control",
      "biodiversity"
    ],
    fr: [
      "espèces envahissantes",
      "contrôle",
      "biodiversité"
    ]
  },

  learningOutcomes: {
    en: [
      "Examine the role of invasive, introduced, and threatened species",
      "Investigate the methods of addressing the management of invasive species",
      "Observe spaces that native and introduced species are seen to examine the role of biodiversity"
    ],
    fr: [
      "Examiner le rôle des espèces envahissantes, introduites et menacées.",
      "Étudier les méthodes employées pour gérer les espèces envahissantes.",
      "Observer les endroits où ont été vues les espèces indigènes et introduites pour étudier le rôle de la biodiversité."
    ]
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
