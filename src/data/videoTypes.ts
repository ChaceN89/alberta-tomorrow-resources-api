/**
 * @file videoTypes.ts
 * @module Data/VideoTypes
 * @desc Defines the authored video records and their generated JSON shape.
 *
 * @author Chace Nielson
 * @created Nov 11, 2026
 * @updated Nov 11, 2026
 */

import type { Localized } from "./sharedTypes.js";

/** Describes fields shared by authored videos and generated video records. */
export interface VideoRecordBase {
  id: string;
  supportedLanguages: string[];
  categoryId: string;
  title: Localized<string>;
  description: Localized<string>;
  subtitles: Localized<string>;
  searchTerms: Localized<string[]>;
}

/** Describes media fields shared by authored and generated video records. */
export interface VideoMediaBase {
  youtubeUrl: string;
  thumbnailUrl: string;
  is360: boolean;
}

/** Describes media fields authored in a video source file. */
export interface VideoMediaSource extends VideoMediaBase {
  primaryUrl?: string;
}

/** Describes an optional lesson-plan reference attached to an authored video source. */
export interface VideoLessonPlanReference {
  title?: string;
  link?: string;
}

/** Describes a source video object authored in an individual TypeScript file. */
export interface VideoSource extends VideoRecordBase {
  lessonPlans?: VideoLessonPlanReference[];
  media: VideoMediaSource;
}

/** Describes the normalized media fields written to generated video JSON. */
export interface GeneratedVideoMedia extends VideoMediaBase {
  primaryUrl: string;
}

/** Describes the normalized video record written to JSON and served by the API. */
export interface GeneratedVideo extends VideoRecordBase {
  media: GeneratedVideoMedia;
  lessonPlanIds: string[];
  tools?: string[];
}
