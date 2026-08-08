/**
 * @file 01-VirtualFieldTripsToAlbertasEcoregions.js
 * @module Data/LessonPlans/AlbertaNaturalRegions
 * @desc Contains localized metadata and lesson plan information for the Virtual Field Trips to Alberta's Ecoregions lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const virtualFieldTripsToAlbertasEcoregionsLessonPlan = {
  id: "abregions-01d-virtual-field-trips-ecoregions",

  themeId: LessonTheme.ALBERTA_NATURAL_REGIONS.id,

  title: {
    en: "360 Virtual Field Trips to Alberta's 6 Ecoregions",
    fr: "Visites virtuelles à 360 degrés dans les six écorégions de l’Alberta."
  },

  description: {
    en: "In this scavenger hunt lesson, students will learn what makes each of Alberta's 6 ecoregions unique by identifying icons for geography, geology, soils, landforms, climate, plants, animals, natural resource use, and interesting facts, including species at risk.",
    fr: "Dans le cadre de cette chasse au trésor, les élèves apprendront ce qui rend unique chacune des six écorégions de l’Alberta en repérant les icônes liées à la géographie, à la géologie, aux sols, au relief, au climat, aux plantes, aux animaux, à l’utilisation des ressources naturelles et à des faits intéressants, y compris les espèces en péril."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Alberta's Ecoregions - 360 Virtual Field Trips Lesson Plan",
        url: "https://docs.google.com/document/d/1zMQUusoEZMeOQj_JAk-anB7VGoxBaPeI/edit"
      },
      {
        FileType: FileType.STUDENT_WORKSHEET,
        title: "360 Virtual Tours Scavenger Hunt Student Worksheet",
        url: "https://docs.google.com/document/d/1QA42jXD1KM79HQ-w4QJpMnAu9NCKWIyz/edit"
      },
      {
        FileType: FileType.PRESENTATION_SLIDES,
        title: "360 Virtual Tours Scavenger Hunt - Fillable Google Slides",
        url: "https://docs.google.com/presentation/d/1iz0b3BOVfKQYd-wDOzuWlUTe6eCpalgS/edit?slide=id.p1#slide=id.p1"
      },
      {
        FileType: FileType.STUDENT_WORKSHEET,
        title: "360 Virtual Tours Scavenger Hunt Circle Student Worksheet",
        url: "https://docs.google.com/presentation/d/1AHJmMQBpcaRVFxCR5-Q24Jsk_VSTo_I0/edit?slide=id.p1#slide=id.p1"
      }
    ],
    fr: [
      {
        FileType: FileType.LESSON_PLAN,
        title: "Écorégions de l’Alberta – visites virtuelles à 360 degrés : plan de leçon",
        url: "https://docs.google.com/document/d/1zMQUusoEZMeOQj_JAk-anB7VGoxBaPeI/edit"
      },
      {
        FileType: FileType.STUDENT_WORKSHEET,
        title: "Visites virtuelles à 360 degrés et chasse au trésor : feuille de travail de l’élève",
        url: "https://docs.google.com/document/d/1QA42jXD1KM79HQ-w4QJpMnAu9NCKWIyz/edit"
      },
      {
        FileType: FileType.PRESENTATION_SLIDES,
        title: "Visites virtuelles à 360 degrés et chasse au trésor : diapositives Google à remplir",
        url: "https://docs.google.com/presentation/d/1iz0b3BOVfKQYd-wDOzuWlUTe6eCpalgS/edit?slide=id.p1#slide=id.p1"
      },
      {
        FileType: FileType.STUDENT_WORKSHEET,
        title: "Visites virtuelles à 360 degrés et chasse au trésor : feuille de travail de l’élève (encercler)",
        url: "https://docs.google.com/presentation/d/1AHJmMQBpcaRVFxCR5-Q24Jsk_VSTo_I0/edit?slide=id.p1#slide=id.p1"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_4.id,
    Grade.GRADE_8.id,
    Grade.GRADE_9.id
  ],

  subjectIds: [
    Subject.SOCIAL_STUDIES.id,
    Subject.SCIENCE.id,
    Subject.BIOLOGY.id
  ],

  searchTerms: {
    en: [
      "alberta",
      "ecoregions",
      "virtual field trips",
      "scavenger hunt",
      "species at risk",
      "geography",
      "geology",
      "climate",
      "plants",
      "animals"
    ],
    fr: [
      "alberta",
      "écorégions",
      "visites virtuelles",
      "chasse au trésor",
      "espèces en péril",
      "géographie",
      "géologie",
      "climat",
      "plantes",
      "animaux"
    ]
  },

  learningOutcomes: {
    en: [
      "Demonstrate an understanding and appreciation of how geography, climate, soils, geology, plants, and animals define a natural ecoregion.",
      "Identify species at risk in each ecoregion."
    ],
    fr: [
      "Faire la démonstration de leur compréhension et de leur appréciation de la manière dont la géographie, le climat, les sols, la géologie, les plantes et les animaux définissent une écorégion naturelle.",
      "Identifier les espèces en péril dans chaque écorégion."
    ]
  },

  videoIds: [],

  relatedResources: []
};
