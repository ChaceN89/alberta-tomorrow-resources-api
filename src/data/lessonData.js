/**
 * @file lessonData.js
 * @module Data/lesson-plans/lessonData
 * @desc Contains lesson plan data for the Alberta Tomorrow application. 
 *
 * @author Chace Nielson
 * @created Apr 10, 2025
 * @updated July 14, 2025
 */


import { ClimateLessons } from "./lessonCategories/a-climateChangeLessons";
import { GlaciersAndWatershedsLessons } from "./lessonCategories/b-glaciersAndWatershedsLessons";
import { LandUseLessons } from "./lessonCategories/c-landUseLessons";
import { IndigenousVoicesLessons } from "./lessonCategories/d-indigenousVoicesLessons";
import { BowRiverWatershedLessons } from "./lessonCategories/e-bowRiverWatershedLessons";
import { AlbertNaturalRegions } from "./lessonCategories/f-albertaNaturalRegions"; // previously named NaturalRegions360Lessons
import { EnergyLessons } from "./lessonCategories/g-energyLessons";

// ======= Aggregated lessons =======
export const allLessons = [
  ...GlaciersAndWatershedsLessons, // 5 lesssons
  ...AlbertNaturalRegions, // 6 lessons
  ...ClimateLessons, // 3 lessons
  ...IndigenousVoicesLessons, // 2 lessons
  ...LandUseLessons, // 9 lessons
  ...BowRiverWatershedLessons, // 11 lessons
  ...EnergyLessons, // 2 lessons


  // 36 lessons total
];