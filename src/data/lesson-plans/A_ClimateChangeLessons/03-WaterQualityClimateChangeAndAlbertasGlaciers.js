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
    fr: "Qualité de l’eau, changements climatiques et glaciers de l’Alberta"
  },

  description: {
    en: "This lesson plan accompanies the webinar recording found under the video section. The webinar was held on May 27, 2020 and features four prominent scientists discussing climate change, glacier melt, water policy, and water quality in Alberta.",
    fr: "Ce plan de leçon accompagne l’enregistrement du webinaire que vous trouverez dans la section Vidéos. Le webinaire a été enregistré le 27 mai 2020 et met en vedette quatre éminents scientifiques qui discutent des changements climatiques, de la fonte des glaciers, de la réglementation des eaux et de la qualité de l’eau en Alberta."
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
        url: null
      },
      {
        id: "webinar-worksheet",
        title: "Webinar Worksheet",
        url: null
      },
      {
        id: "glaciers-in-alberta-slides",
        title: "Glaciers in Alberta (Google Slides)",
        url: null
      }
    ],

    fr: [
      {
        id: "lesson-plan",
        title: "Qualité de l'eau, changements climatiques et glaciers de l'Alberta : plan de leçon",
        url: null
      },
      {
        id: "webinar-worksheet",
        title: "Feuille de travail du webinaire",
        url: null
      },
      {
        id: "glaciers-in-alberta-slides",
        title: "Les glaciers en Alberta (diapositives Google)",
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
    fr: [
      "Apprendre des faits sur la qualité de l’eau en Alberta.",
      "Déterminer près de quel bassin hydrographique l’élève habite.",
      "Comprendre la terminologie de base sur les glaciers.",
      "Décrire l’effet des changements climatiques sur les glaciers de l’Alberta.",
      "Comprendre l’impact des feux de forêt sur les glaciers.",
      "Prendre conscience de l’importance de la réglementation des eaux pour composer avec les effets des changements climatiques.",
      "Examiner l’impact de nos activités sur les changements climatiques et les glaciers de l’Alberta."
    ]
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
