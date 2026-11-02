/**
 * @file 04-ClimateChangeInAlbertaScience6.js
 * @module Data/LessonPlans/ClimateChange
 * @desc Contains localized metadata and lesson plan information for the Science 6 Climate Change in Alberta lesson.
 *
 * @author Chace Nielson
 * @created Sep 08, 2026
 * @updated Sep 08, 2026
 * @updated Nov 02, 2026 - updated lesson resource URLs using the V8 mapping
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const science6ClimateChangeInAlbertaLessonPlan = {
  id: "climate-04-science-6-climate-change-in-alberta",

  themeId: LessonTheme.CLIMATE_CHANGE.id,

  title: {
    en: "Sc 6: Climate Change in Alberta",
    fr: "Sc 6 : Changements climatiques en Alberta"
  },

  description: {
    en: "Students explore how climate change is affecting Alberta by analyzing historical temperature and precipitation trends, comparing mild and hot future scenarios, and testing land-use and management choices in the Alberta Tomorrow simulator to evaluate impacts on ecosystems, greenhouse gases, and communities.",
    fr: "Les élèves explorent les effets des changements climatiques en Alberta en analysant les tendances historiques de température et de précipitations, en comparant des scénarios futurs modéré et chaud, et en testant des choix d’aménagement du territoire et de pratiques de gestion dans le simulateur Alberta Tomorrow afin d’évaluer les impacts sur les écosystèmes, les gaz à effet de serre et les communautés."
  },

  approximateTime: {
    en: "3 classes (45 min each)",
    fr: "3 cours (45 min chacun)"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Climate Change in Alberta: Lesson Plan (Sc 6)",
        url: "https://docs.google.com/document/d/1jUo6Qb2Da5G9-8MazsjDmMJKB1Dsk3Suq1RRIYmGt8I/edit"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Climate Change in Alberta: Student Worksheet",
        url: "https://docs.google.com/document/d/1f8ycWF6ZRYud7Sjp61jtPVo97fbmYUaXxLQYntgubRo/edit"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Energy Resources and Climate Change in Alberta - Presentation Slides",
        url: "https://docs.google.com/presentation/d/1RmQYHLOms6XnWvOTz0E0GW3dK6NdT53zE8AfozExhkY"
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
        title: "Changements climatiques en Alberta : plan de leçon (Sc 6)",
        url: "https://docs.google.com/document/d/1ZE2Jt5GIRnOgj3BNx0QRlergxKvyPacAeiiBUqEBxAQ/edit"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Changements climatiques en Alberta : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1ZDUDD3_f3tG7UVtZGH1j8XhUCvn5nfUw12zWLmbvnIE/edit"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Ressources énergétiques et changements climatiques en Alberta – présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/1Kpaehlq2ap2n6W_Q0X9lDVAh-t6zChAt"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Changements climatiques : vérités et idées fausses – présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/17-5R62F8HKHMgR73L6VYdk74aj13nudr"
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
      "science 6",
      "climate change",
      "alberta",
      "energy",
      "future",
      "simulator"
    ],
    fr: [
      "sciences 6",
      "changements climatiques",
      "Alberta",
      "énergie",
      "avenir",
      "simulateur"
    ]
  },

  learningOutcomes: {
    en: [
      "ES 1.1 Students investigate climate, changes in climate and the impact of climate change on Earth.",
      "ES 1.3 Students investigate climate, changes in climate, and the impact of climate change on Earth."
    ],
    fr: [
      "ES 1.1 Les élèves étudient le climat, les changements climatiques et l’effet des changements climatiques sur la Terre.",
      "ES 1.3 Les élèves étudient le climat, les changements climatiques et l’effet des changements climatiques sur la Terre."
    ]
  },

  videoIds: [
    "landscape-01b-climate-change",
    "soc-03d-oil-and-gas-production"
  ],

  relatedResources: []
};
