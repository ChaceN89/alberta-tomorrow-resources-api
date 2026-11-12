/**
 * @file sharedTypes.ts
 * @module Data/Types
 * @desc Defines type contracts shared by video and lesson-plan data.
 *
 * @author Chace Nielson
 * @created Nov 11, 2026
 * @updated Nov 11, 2026
 */

/** Represents a value localized for both supported languages. */
export interface Localized<T> {
  en: T;
  fr: T;
}
