/**
 * @file 01-GoingGoingGoingGoneClimateChange.js
 * @module Data/LessonPlans/ClimateChange
 * @desc Contains localized metadata and lesson plan information for the Going Going Going Gone: Climate Change and the Columbia Icefield lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 31, 2026
 *
 * @dependencies
 * - LessonThemeIds.js
 * - gradeIds.js
 * - subjectIds.js
 *
 * @notes
 * - IDs follow the climate-XX-* convention for the climate change lesson sequence.
 * - English and French resource entries use matching stable file IDs.
 * - Google document URLs omit editing parameters and anchors.
 */

import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const goingGoingGoingGoneClimateChangeLessonPlan = {
  id: "climate-01-going-going-going-gone",

  themeId: LessonTheme.CLIMATE_CHANGE.id,

  title: {
    en: "Going Going Going Gone: Climate Change and the Columbia Icefield",
    fr: "Il recule, il recule, il disparaît – Les changements climatiques et le champ de glace Columbia"
  },

  description: {
    en: "Students will explore how climate change has affected Alberta's glaciers and do some calculations to determine the loss of ice on the Athabasca Glacier.",
    fr: "Les élèves étudieront comment les glaciers de l’Alberta ont été touchés par les changements climatiques et ils feront des calculs pour déterminer la perte de glace sur le glacier Athabasca."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Going Going Going Gone: Lesson Plan",
        url: "https://docs.google.com/document/d/13jaSoGz_ilgV4SVwfopuKanJnysWxGLs7kggEQMHjqM"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Going Going Going Gone: Student Worksheet",
        url: "https://docs.google.com/document/d/1K0zsaIfodtZkpjgmS-KE74Rw1HmC7MJt-z7zfYgZfro"
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
        title: "Il recule, il recule, il disparaît : plan de leçon",
        url: "https://docs.google.com/document/d/1Q7CxkPAjDXu4vO9RBeQQFyfDMxovQbmX"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Il recule, il recule, il disparaît : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/15C4_1VYx-saaj54RKG7KXQ-_-e_O5jJZ"
      },
      {
        fileType: FileType.PRESENTATION_SLIDES,
        title: "Changements climatiques : vérités et idées fausses – présentation PowerPoint",
        url: "https://docs.google.com/presentation/d/17-5R62F8HKHMgR73L6VYdk74aj13nudr"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_2.id,
    Grade.GRADE_3.id,
    Grade.GRADE_5.id,
    Grade.GRADE_6.id,
    Grade.GRADE_7.id,
    Grade.GRADE_8.id,
    Grade.GRADE_10.id
  ],

  subjectIds: [
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id,
    Subject.CTS.id,
    Subject.OUTDOOR_EDUCATION.id
  ],

  searchTerms: {
    en: [
      "glaciers",
      "climate change",
      "math",
      "ice loss",
      "calculations",
      "water",
      "Science 14",
      "Science 20",
      "Biology 20",
      "Energy Flow in Global Systems",
      "Environmental Stewardship",
      "Physical Geography of Canada"
    ],

    fr: [
      "glaciers",
      "changements climatiques",
      "mathématiques",
      "perte de glace",
      "calculs",
      "eau",
      "Sciences 14",
      "Sciences 20",
      "Biologie 20",
      "flux d’énergie dans les systèmes mondiaux",
      "gérance de l’environnement",
      "géographie physique du Canada"
    ]
  },

  learningOutcomes: {
    en: [
      "Understand seasonal variation in glacier mass.",
      "Understand the effect of climate change on glacier mass.",
      "Calculate loss of glacier ice on the Athabasca Glacier over the next 10 years.",
      "Determine the loss of ice volume in Rocky Mountain Glaciers."
    ],

    fr: [
      "Comprendre la variation saisonnière dans la masse des glaciers.",
      "Comprendre l’effet des changements climatiques sur la masse des glaciers.",
      "Calculer la perte de glace sur le glacier Athabasca au cours des 10 prochaines années.",
      "Déterminer la perte de volume de glace dans les glaciers des montagnes Rocheuses."
    ]
  },

  videoIds: [
    "env-06c-greenhouse-gases",
    "landscape-01b-climate-change",
    "goi-35g-why-are-alberta-glaciers-important",
    "goi-22g-forest-fires-and-glaciers",
    "oth-01z-oxygen-isotopes"
  ],

  relatedResources: []
};