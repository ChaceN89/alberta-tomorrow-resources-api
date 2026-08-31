/**
 * @file 03-WaterQualityClimateChangeAndGlaciers.js
 * @module Data/LessonPlans/ClimateChange
 * @desc Contains localized metadata and lesson plan information for the Water Quality, Climate Change and Alberta's Glaciers lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const waterQualityClimateChangeAndAlbertasGlaciersLessonPlan = {
  id: "climate-03a-water-quality-alberta-glaciers",

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
        fileType: FileType.LESSON_PLAN,
        title: "Water Quality, Climate Change and Alberta's Glaciers",
        url: "https://docs.google.com/document/d/132Q-l-fFcXQTFWDIgiB0j8w76_GhO-QwUxNykI2kivE"
      },
      {
        fileType: FileType.OTHER_FILE_TYPE,
        title: "Webinar Worksheet",
        url: "https://docs.google.com/document/d/1uHjqQk2WEWdBCJVrMcMaCo1O_sB91EZ0_SXHnAokWa0"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Glaciers in Alberta (Google Slides)",
        url: "https://docs.google.com/presentation/d/1rBX6NS-xWfHD3HxAV341q1ZC4wZV5FvNaUdsLi94ptg"
      }
    ],

    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Qualité de l'eau, changements climatiques et glaciers de l'Alberta : plan de leçon",
        url: "https://docs.google.com/document/d/1iD8IG_y0pr7nc08-04pvEwi4IIAU1W1Y"
      },
      {
        fileType: FileType.OTHER_FILE_TYPE,
        title: "Feuille de travail du webinaire",
        url: "https://docs.google.com/document/d/1rTMgLM8H2LJzydtd2v0x_7-ofV3q6scm"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Les glaciers en Alberta (diapositives Google)",
        url: "https://docs.google.com/presentation/d/1rBX6NS-xWfHD3HxAV341q1ZC4wZV5FvNaUdsLi94ptg"
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
    fr: ["eau", "qualité de l’eau", "consommation d’eau", "glaciers", "fonte des glaciers", "changements climatiques", "carottage glaciaire", "feux de forêt", "réglementation des eaux", "produits chimiques persistants", "CFC", "DDT", "albédo"]
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

  relatedResources: [
    {
      title: "Guardians of the Ice",
      url: "https://guardiansoftheice.com/the-columbia-icefield/"
    }
  ],
};
