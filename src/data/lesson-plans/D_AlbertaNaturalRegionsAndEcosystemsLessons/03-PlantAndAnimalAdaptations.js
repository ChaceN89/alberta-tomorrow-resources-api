/**
 * @file 03-PlantAndAnimalAdaptations.js
 * @module Data/LessonPlans/AlbertaNaturalRegions
 * @desc Contains localized metadata and lesson plan information for the Plant and Animal Adaptations lesson.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const plantAndAnimalAdaptationsLessonPlan = {
  id: "abregions-03d-plant-animal-adaptations",

  themeId: LessonTheme.ALBERTA_NATURAL_REGIONS.id,

  title: {
    en: "Plant and Animal Adaptations - Using the 360 Virtual Field Trips",
    fr: "Adaptations des plantes et des animaux – visites virtuelles à 360 degrés"
  },

  description: {
    en: "In this lesson students will explore the plants and animals in all 6 ecoregions within Alberta, learn how they are specially adapted to living there, what human activities affect their survival and which species are at risk in each ecoregion.",
    fr: "Au cours de cette leçon, les élèves étudieront les plantes et les animaux dans les six écorégions en Alberta; ils apprendront comment ils sont spécialement adaptés pour vivre à cet endroit, les activités humaines qui nuisent à leur survie et les espèces qui sont en péril dans chaque écorégion."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Grade 9 Science Adaptations and the 360 Virtual Field Trips",
        url: "https://drive.google.com/file/d/1oqRU9sDWebD92xmGi3RYhN-Ae00ACP_j/view?usp=drive_link"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "Grade 9 Plant and Animal Adaptations Student Worksheet - Fillable Google Slides",
        url: "https://docs.google.com/presentation/d/1b_EosZ3fXr638ZeakaiqvjUYDMXGrXiwV7Yw3o04w8E"
      }
    ],
    fr: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "9e année, Sciences : Adaptations et visites virtuelles à 360 degrés",
        url: "https://docs.google.com/document/d/1IKLGOqi9ukqXGjawklTxjrAGOEzbS6wg/edit"
      },
      {
        fileType: FileType.STUDENT_WORKSHEET,
        title: "9e année, Adaptations des plantes et des animaux – feuille de travail de l’élève – diapositives Google à remplir",
        url: null
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_9.id
  ],

  subjectIds: [
    Subject.SCIENCE.id
  ],

  searchTerms: {
    en: [
      "adaptations",
      "plants",
      "animals",
      "ecoregions",
      "alberta",
      "species at risk"
    ],
    fr: [
      "adaptations",
      "plantes",
      "animaux",
      "écorégions",
      "alberta",
      "espèces en péril"
    ]
  },

  learningOutcomes: {
    en: [
      "Students will describe how plants and animals are adapted to life in each natural ecoregion of Alberta.",
      "Students will identify risks to species survival in each ecoregion.",
      "Students will identify species at risk in each region."
    ],
    fr: [
      "Les élèves décriront comment les plantes et les animaux se sont adaptés à la vie dans chacune des écorégions de l’Alberta.",
      "Les élèves identifieront les risques pour la survie des espèces dans chaque écorégion.",
      "Les élèves identifieront les espèces en péril dans chaque région."
    ]
  },

  videoIds: [],

  relatedResources: []
};
