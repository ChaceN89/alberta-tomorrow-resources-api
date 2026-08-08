/**
 * @file 02-ExploringCollectiveRights.js
 * @module Data/LessonPlans/IndigenousVoices
 * @desc Contains localized metadata and lesson plan information for the Exploring Collective Rights lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const exploringCollectiveRightsLessonPlan = {
  id: "indigenous-02e-exploring-collective-rights",

  themeId: LessonTheme.INDIGENOUS_VOICES.id,

  title: {
    en: "Exploring Collective Rights Using the Indigenous Voices Module in Alberta Tomorrow",
    fr: "Étudier les droits collectifs à l’aide du module Voix autochtones dans Alberta Tomorrow."
  },

  description: {
    en: "A lesson plan where students learn about Indigenous Rights and Treaty 7, and explore the geography of Indigenous peoples in Alberta through the Alberta Tomorrow Indigenous Voices Module.",
    fr: "Un plan de leçon dans lequel les élèves apprennent les droits des Autochtones en vertu du Traité 7, et étudient la géographie des peuples autochtones en Alberta avec le module Voix autochtones d’Alberta Tomorrow."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Exploring Collective Rights: Lesson Plan",
        url: "https://docs.google.com/document/d/1nMh2BVY6ZRFW0c8RjIShGn6t2QYi_ZvF/edit?usp=drive_link&ouid=107808106052250146136&rtpof=true&sd=true"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Exploring Collective Rights: Student Worksheet",
        url: "https://docs.google.com/document/d/10cCzISaKfH5wrf7O8CoBdIYfNG0V9sF4/edit?usp=drive_link&ouid=107808106052250146136&rtpof=true&sd=true"
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Étudier les droits collectifs : plan de leçon",
        url: "https://docs.google.com/document/d/1MmE7sHJaMq5gmPgNpxGjXOjK7UFx2LBy/edit"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Étudier les droits collectifs : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1CL4u8LjHDWtwxPSM3EQ_4ilHDKVF0qgr/edit"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_9.id
  ],

  subjectIds: [
    Subject.SOCIAL_STUDIES.id
  ],

  searchTerms: {
    en: [
      "collective rights",
      "treaty 7",
      "indigenous rights",
      "alberta"
    ],
    fr: [
      "droits collectifs",
      "traité 7",
      "droits des autochtones",
      "alberta"
    ]
  },

  learningOutcomes: {
    en: [
      "Students will explore the geography of Indigenous peoples in Alberta and learn about the relationship between the Canadian Charter of Rights and Freedoms and Indigenous Rights.",
      "Students will critically assess how collective rights have impacted Indigenous communities and whether treaty rights are being honored."
    ],
    fr: [
      "Les élèves étudient la géographie des peuples autochtones en Alberta et apprennent la relation entre la Charte canadienne des droits et libertés et les droits des Autochtones.",
      "Les élèves explorent d’un œil critique l’effet qu’ont eu les droits collectifs sur les communautés autochtones et ils évaluent si les droits issus de traités sont respectés."
    ]
  },

  videoIds: [],

  relatedResources: []
};
