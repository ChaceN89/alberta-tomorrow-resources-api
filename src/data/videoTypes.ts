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
  /** Caption URL per language; null means no track exists, so the frontend should not load one. */
  subtitles: Localized<string | null>;
  searchTerms: Localized<string[]>;
}

/** Describes media fields authored in a video source file. */
export interface VideoMediaSource {
  primaryUrl: string | null;
  youtubeUrl: string | null;
  thumbnailUrl: string | null;
  /** Whether the video is a 360-degree video; always stated explicitly. */
  is360: boolean;
  /** Channel or site the video comes from; use ALBERTA_TOMORROW_PROVIDER for our own videos. */
  provider: string;
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
export interface GeneratedVideoMedia {
  primaryUrl: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  is360: boolean;
  provider: string;
}

/** Describes the normalized video record written to JSON and served by the API. */
export interface GeneratedVideo extends VideoRecordBase {
  media: GeneratedVideoMedia;
  lessonPlanIds: string[];
  tools?: string[];
}
