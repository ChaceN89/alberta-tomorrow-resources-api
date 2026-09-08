/**
 * @file 07-LandUseFieldTrip.js
 * @module Data/LessonPlans/LandUse
 * @desc Contains localized metadata and lesson plan information for the Land Use Field Trip lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const landUseFieldTripLessonPlan = {
  id: "landuse-07c-landuse-field-trip",

  themeId: LessonTheme.LAND_USE.id,

  title: {
    en: "Landuse Field Trip",
    fr: "Sortie éducative liée à l’utilisation des terres"
  },

  description: {
    en: "This is a self-led guide for teachers to go on a field trip with their class that investigates at least 2 different areas: one more pristine and one affected by landuse (e.g., a city, golf course). The lesson includes student worksheets and water test procedures. Users must supply their own test kits.",
    fr: "Il s’agit d’un guide pour une sortie éducative autonome pour les enseignants avec leur classe afin d’étudier au moins deux régions différentes : un paysage relativement intact et un autre touché par l’utilisation des terres (p. ex., une ville, un terrain de golf). La leçon comprend les feuilles de travail de l’élève et les procédures d’analyse de l’eau. Les utilisateurs doivent fournir leurs propres trousses d’analyse."
  },

  approximateTime: {
    en: "1/2 day - full day depending on travel time",
    fr: "Une demi-journée à une journée complète selon le déplacement"
  },

  files: {
    en: [
      {
        fileType: FileType.OTHER_FILE_TYPE,
        title: "Landuse Field Trip",
        url: "https://docs.google.com/document/d/1SpC6AztxVAMg5Zf7DmUwN8wQ-Tll5m73"
      }
    ],
    fr: [
      {
        fileType: FileType.OTHER_FILE_TYPE,
        title: "Sortie éducative liée à l’utilisation des terres",
        url: "https://docs.google.com/document/d/188mTIwQakxOh1shXP96viDfY2BZBMfYJ"
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
    Subject.SOCIAL_STUDIES.id,
    Subject.OUTDOOR_EDUCATION.id,
    Subject.CTS.id
  ],

  searchTerms: {
    en: [
      "field trip",
      "water quality",
      "land use",
      "watershed",
      "outdoor learning"
    ],
    fr: [
      "sortie éducative",
      "qualité de l’eau",
      "utilisation des terres",
      "bassin hydrographique"
    ]
  },

  learningOutcomes: {
    en: [
      "Investigate and compare water quality in a relatively pristine area and compare to one that has been affected by landuse"
    ],
    fr: [
      "Examiner et comparer la qualité de l’eau dans un paysage relativement intact et dans un autre qui a été touché par l’utilisation des terres."
    ]
  },

  videoIds: [],

  relatedResources: []
};
