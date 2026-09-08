/**
 * @file 04-ClimateChangeInAlbertaScience6.js
 * @module Data/LessonPlans/ClimateChange
 * @desc Contains localized metadata and lesson plan information for the Science 6 Climate Change in Alberta lesson.
 *
 * @author Chace Nielson
 * @created Sep 08, 2026
 * @updated Sep 08, 2026
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
    en: "In this activity, students will look at climate change and how it is impacting Alberta.",
    fr: "Dans cette activité, les élèves examineront les changements climatiques et la façon dont ils touchent l’Alberta."
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
        url: "https://docs.google.com/document/d/1j1reZMpUG8hr2aTxRFKGKUIrWKubjc6LBPs9YorcJQQ"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Climate Change in Alberta: Student Worksheet",
        url: "https://docs.google.com/document/d/1pL06qekV3WdnjSxIFHvFefVdAmgLEgvRCsrqvzzbaPM"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Energy and Climate Change Presentation Slides (Sc 6)",
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
        url: "https://docs.google.com/document/d/1foXxyndlaQ1SCCIg34hnse3Cmd0o4L0q"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Changements climatiques en Alberta : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1o-ZVm2iDaavBgXvBg0zEArZjEU4npiFq"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Changements climatiques : vérités et idées fausses – présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/1Kpaehlq2ap2n6W_Q0X9lDVAh-t6zChAt"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Mythes et idées fausses sur les changements climatiques : présentation",
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
    "soc-03d-hydrocarbon-production"
  ],

  relatedResources: []
};
