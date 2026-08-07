/**
 * @file 01-RenewableVsNonRenewableResources.js
 * @module Data/LessonPlans/Energy
 * @desc Contains localized metadata and lesson plan information for the Renewable vs Non-Renewable Resources lesson.
 *
 * @author Chace Nielson
 * @created Aug 07, 2026
 * @updated Aug 07, 2026
 */

import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";

export const renewableVsNonRenewableResourcesLessonPlan = {
  id: "energy-01-renewable-vs-nonrenewable",

  themeId: LessonTheme.ENERGY.id,

  title: {
    en: "Renewable vs Non-Renewable Resources",
    fr: "Ressources renouvelables ou non renouvelables"
  },

  description: {
    en: "In this activity, students will compare renewable and non-renewable energy resources, exploring how they are used across Canada and how Alberta relies on both to meet its energy needs.",
    fr: "Dans le cadre de cette activité, les élèves comparent les ressources énergétiques renouvelables et non renouvelables, explorent leur utilisation au Canada et étudient comment l’Alberta dépend de ces deux types de ressources pour répondre à ses besoins en énergie."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        id: "lesson-plan",
        title: "Renewable vs Non-Renewable Resources - Lesson Plan",
        description: "",
        url: "https://docs.google.com/document/d/1QU_kIWDMITb9Zau0XcB3-e3yTgBzn8W9P2qlM1NaDa8/edit?usp=drive_link"
      },
      {
        id: "presentation-slides",
        title: "Renewable and Non-Renewable Sources of Energy - Presentation Slides",
        description: "",
        url: "https://docs.google.com/presentation/d/1ZeVKUKvxdKaTkf24aXG_xr29TvKWb4hX3bKAFThe-Cg/edit?usp=drive_link"
      },
      {
        id: "student-worksheet",
        title: "Renewable vs Non-Renewable Resources - Student Worksheet",
        description: "",
        url: "https://docs.google.com/document/d/1v5XpJO-O9B7I94GstDyZikDhgIzeCuo_pO6LtWPTWCc/edit?usp=drive_link"
      }
    ],
    fr: [
      {
        id: "lesson-plan",
        title: "Ressources renouvelables ou non renouvelables : plan de leçon",
        description: "",
        url: "https://docs.google.com/document/d/16N-5cAv1mheL8ckWzDipWRYr8FlamNP_/edit"
      },
      {
        id: "presentation-slides",
        title: "Sources d’énergie renouvelables et non renouvelables : présentation PowerPoint",
        description: "",
        url: "https://docs.google.com/presentation/d/1kJBQH2n6TLF00_PLb1h--GYlEvwP-gD7/edit?slide=id.p1#slide=id.p1"
      },
      {
        id: "student-worksheet",
        title: "Ressources renouvelables ou non renouvelables : feuille de travail de l’élève",
        description: "",
        url: "https://docs.google.com/document/d/1n1nPmf2z3hZdQk0w3OIrqwTazb7zhvXf/edit"
      }
    ]
  },

  gradeIds: [
    Grade.GRADE_5.id
  ],

  subjectIds: [
    Subject.SCIENCE.id
  ],

  searchTerms: {
    en: [
      "renewable energy",
      "non-renewable resources",
      "energy use",
      "alberta"
    ],
    fr: [
      "énergie renouvelable",
      "ressources non renouvelables",
      "utilisation de l’énergie",
      "alberta"
    ]
  },

  learningOutcomes: {
    en: [
      "Compare renewable and non-renewable energy resources.",
      "Discuss the advantages and disadvantages of different energy sources.",
      "Examine how provinces and territories fulfill energy needs.",
      "Understand Alberta's reliance on both renewable and non-renewable energy resources."
    ],
    fr: [
      "Comparer les ressources énergétiques renouvelables et non renouvelables.",
      "Discuter des avantages et des inconvénients des différentes sources d’énergie.",
      "Examiner comment les provinces et les territoires satisfont leurs besoins en énergie.",
      "Comprendre la dépendance de l’Alberta à la fois aux ressources énergétiques renouvelables et non renouvelables."
    ]
  },

  videoIds: [],

  relatedResources: {
    en: [],
    fr: []
  }
};
