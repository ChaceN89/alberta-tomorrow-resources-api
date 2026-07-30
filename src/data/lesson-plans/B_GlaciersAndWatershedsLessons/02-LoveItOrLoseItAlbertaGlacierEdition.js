/**
 * @file 02-LoveItOrLoseItAlbertaGlacierEdition.js
 * @module Data/LessonPlans/GlaciersAndWatersheds
 * @desc Contains localized metadata and lesson plan information for the Love It or Lose It: Alberta Glacier Edition lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @dependencies
 * - LessonThemeIds.js
 * - gradeIds.js
 * - subjectIds.js
 *
 * @notes
 * - The ID is a stable API value and should not be changed.
 * - French localization is currently awaiting translation.
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const loveItOrLoseItAlbertaGlacierEditionLessonPlan = {
  id: "glaciers-02b-love-it-or-lose-it",

  themeId: LessonTheme.GLACIERS_AND_WATERSHEDS.id,

  title: {
    en: "Love It or Lose It: Alberta Glacier Edition",
    fr: ""
  },

  description: {
    en: "Students investigate the location of glaciers in Alberta and observe how they have changed over time. Students learn about how climate change is affecting our glaciers and come up with an action plan to help prevent the further loss of our glaciers.",
    fr: ""
  },

  approximateTime: {
    en: "30 min plus project time",
    fr: ""
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Love It or Lose It: Alberta Glacier Edition",
        description: "",
        url: "/pdfs/lesson-plans/glaciersAndWatersheds/Love_it_or_Lose_it__Alberta_Glacier_Edition.pdf"
      }
    ],

    fr: []
  },

  gradeIds: [
    Grade.GRADE_4.id,
    Grade.GRADE_5.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
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
      "A Sense of the Land",
      "Physical Geography of Canada",
      "Wetland Ecosystems",
      "Interactions and Ecosystems",
      "Freshwater and Saltwater Systems",
      "Energy Flow in Global Systems",
      "Energy and Matter Exchange",
      "Grade 10 Science",
      "Biology 20",
      "glaciers",
      "climate change",
      "action plan",
      "personal actions",
      "glacier loss"
    ],

    fr: []
  },

  learningOutcomes: {
    en: [
      "Identify glacier locations in Alberta",
      "Observe changes in glaciers over time",
      "Investigate how climate change is affecting Alberta's glaciers",
      "Develop an action plan to help prevent further loss of glaciers"
    ],

    fr: []
  },

  videoIds: [
    "goi-43g-every-year-its-further-to-get-to-work",
    "goi-14g-where-will-the-glacier-be-in-30-years",
    "goi-24g-growth-and-attrition",
    "goi-13g-where-was-the-glacier-in-1982",
    "goi-12g-where-was-the-athabasca-glacier-in-2006",
    "goi-19g-why-should-we-protect-glaciers",
    "goi-01g-are-people-affecting-the-glaciers",
    "goi-33g-what-can-we-do-to-protect-alberta"
  ],

  relatedResources: {
    en: [
      {
        id: "mountain-legacy-project",
        title: "Mountain Legacy Project",
        url: "http://mountainlegacy.ca/"
      },
      {
        id: "guardians-of-the-ice",
        title: "Guardians of the Ice",
        url: "https://guardiansoftheice.com/the-columbia-icefield/"
      }
    ],

    fr: []
  }
};