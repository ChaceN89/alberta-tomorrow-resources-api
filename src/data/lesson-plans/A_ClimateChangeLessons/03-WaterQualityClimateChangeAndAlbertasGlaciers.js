/**
 * @file 03-WaterQualityClimateChangeAndAlbertasGlaciers.js
 * @module Data/LessonPlans/ClimateChange
 * @desc Contains localized metadata and lesson plan information for the Water Quality, Climate Change and Alberta's Glaciers lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const waterQualityClimateChangeAndAlbertasGlaciersLessonPlan = {
  id: "climate-03a-water-quality-glaciers",

  themeId: LessonTheme.CLIMATE_CHANGE.id,

  title: {
    en: "Water Quality, Climate Change and Alberta's Glaciers",
    fr: "N/A"
  },

  description: {
    en: "This lesson plan accompanies the webinar recording found under the video section. The webinar was held on May 27, 2020 and features four prominent scientists discussing climate change, glacier melt, water policy, and water quality in Alberta.",
    fr: "N/A"
  },

  approximateTime: {
    en: "180 min",
    fr: "180 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Water Quality, Climate Change and Alberta's Glaciers",
        description: "",
        url: null
      },
      {
        id: "webinar-worksheet",
        title: "Webinar Worksheet",
        description: "",
        url: null
      },
      {
        id: "glaciers-in-alberta-slides",
        title: "Glaciers in Alberta (Google Slides)",
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
        id: "webinar-worksheet",
        title: "N/A",
        description: "",
        url: null
      },
      {
        id: "glaciers-in-alberta-slides",
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
    Subject.SCIENCE.id,
    Subject.SOCIAL_STUDIES.id
  ],

  searchTerms: {
    en: [
      "water",
      "water quality",
      "water consumption",
      "glaciers",
      "glacier melt",
      "climate change",
      "ice coring",
      "forest fires",
      "water policy",
      "persistent chemicals",
      "cfcs",
      "ddt",
      "albedo"
    ],
    fr: []
  },

  learningOutcomes: {
    en: [
      "learn about water quality in Alberta",
      "identify what watershed you live within",
      "understand basic glacier terminology",
      "describe the effect of climate change on Alberta's glaciers",
      "be introduced to the impact of forest fires on glaciers",
      "become aware of the importance of water policy in dealing with the effects of climate change",
      "consider the impact of our activities on climate change and Alberta's glaciers"
    ],
    fr: []
  },

  videoIds: [
    "landscape-04b-glaciers-webinar"
  ],

  relatedResources: {
    en: [
      {
        id: "guardians-of-the-ice",
        title: "Guardians of the Ice",
        url: "https://guardiansoftheice.com/the-columbia-icefield/"
      }
    ],
    fr: []
  }
};
