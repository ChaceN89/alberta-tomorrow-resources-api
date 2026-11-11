/**
 * @file lessonPlanTypes.ts
 * @module Data/LessonPlanTypes
 * @desc Defines authored lesson plans, their file records, and generated JSON shapes.
 *
 * @author Chace Nielson
 * @created Nov 11, 2026
 * @updated Nov 11, 2026
 */

import type { FileType } from "./enums/fileTypes.js";
import type { Localized } from "./sharedTypes.js";

/** Describes a resource file attached to an authored lesson plan. */
export interface LessonFileSource {
  fileType: (typeof FileType)[keyof typeof FileType];
  title: string;
  url: string;
  pdfUrl: string;
}

/** Describes an external resource referenced by an authored lesson plan. */
export interface RelatedResourceSource {
  id?: string;
  fileType?: string;
  type?: string;
  title: string;
  url: string;
}

/** Describes a lesson-plan object authored in an individual TypeScript file. */
export interface LessonPlanSource {
  id: string;
  themeId: string;
  title: Localized<string>;
  description: Localized<string>;
  approximateTime: Localized<string>;
  files: Localized<LessonFileSource[]>;
  gradeIds: string[];
  subjectIds: string[];
  searchTerms: Localized<string[]>;
  learningOutcomes: Localized<string[]>;
  videoIds: string[];
  relatedResources: RelatedResourceSource[];
}

/** Describes a normalized lesson file written to generated JSON. */
export interface GeneratedLessonFile {
  fileType: string;
  title: string;
  url: string;
  pdfUrl: string;
}

/** Describes a related resource in generated lesson-plan JSON. */
export interface GeneratedRelatedResource {
  id?: string;
  title: string;
  url: string;
}

/** Describes the normalized lesson-plan record written to JSON and served by the API. */
export interface GeneratedLessonPlan {
  id: string;
  themeId: string;
  title: Localized<string>;
  description: Localized<string>;
  approximateTime: Localized<string>;
  files: Localized<GeneratedLessonFile[]>;
  gradeIds: string[];
  subjectIds: string[];
  searchTerms: Localized<string[]>;
  learningOutcomes: Localized<string[]>;
  videoIds: string[];
  relatedResources: GeneratedRelatedResource[];
  tools?: string[];
}
