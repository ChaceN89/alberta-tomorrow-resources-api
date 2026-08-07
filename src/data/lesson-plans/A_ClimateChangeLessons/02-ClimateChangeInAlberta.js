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
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const climateChangeInAlbertaLessonPlan = {
  id: "climate-02a-scenarios",

  themeId: LessonTheme.CLIMATE_CHANGE.id,

  title: {
    en: "Climate Change in Alberta",
    fr: "N/A"
  },

  description: {
    en: "Students will use the Alberta Tomorrow simulator to investigate different climate change scenarios and see the consequences of different futures and the benefits of using beneficial management practices.",
    fr: "N/A"
  },

  approximateTime: {
    en: "N/A",
    fr: "N/A"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Climate Change in Alberta: Investigating Mild, Medium and Hot Climate Scenarios: Lesson Plan",
        description: "",
        url: null
      },
      {
        id: "science-6-lesson-plan",
        title: "Science 6 Climate Change in Alberta - Lesson Plan",
        description: "",
        url: null
      },
      {
        id: "student-worksheet",
        title: "Climate Change in Alberta - Student Worksheet",
        description: "",
        url: null
      },
      {
        id: "energy-resources-student-worksheet",
        title: "Energy Resources and Climate Change in Alberta - Student Worksheet",
        description: "",
        url: null
      },
      {
        id: "climate-truth-and-misconceptions-slides",
        title: "Climate Change: Truth and Misconceptions - Presentation Slides",
        description: "",
        url: null
      }
    ],

    fr: [
      {
        id: "lesson-plan",
        title: "N/A",
        description: "",
        url: null
      },
      {
        id: "science-6-lesson-plan",
        title: "N/A",
        description: "",
        url: null
      },
      {
        id: "student-worksheet",
        title: "N/A",
        description: "",
        url: null
      },
      {
        id: "energy-resources-student-worksheet",
        title: "N/A",
        description: "",
        url: null
      },
      {
        id: "climate-truth-and-misconceptions-slides",
        title: "N/A",
        description: "",
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
    fr: []
  },

  learningOutcomes: {
    en: [
      "Investigate the impact of climate change on Alberta's precipitation, climate",
      "Investigate the impact of climate change on Alberta's natural regions",
      "Investigate the impact of climate change on our environment and economy"
    ],
    fr: []
  },

  videoIds: [
    "landscape-01b-climate-change"
  ],

  relatedResources: {
    en: [],
    fr: []
  }
};
