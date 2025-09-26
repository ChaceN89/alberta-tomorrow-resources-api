/**
 * @file allVideos.js
 * @module Data/Video/allVideos
 * @desc Aggregates all categorized video data into a single unified list for use in the Alberta Tomorrow application.
 *
 * @features
 * - Imports video entries from all individual category files.
 * - Exports a single array `allVideos` combining all sources.
 * - Allows centralized access to all educational video content.
 * - Can be used across components for filtering, display, or searching.
 *
 * @dependencies
 * - Each file in `/videoCategories` (e.g., `a-tutorialVideos`, `b-understandingTheLandscapeVideos`, etc.)
 *
 * @notes
 * - `guardiansOfTheIceVideos` is currently commented out and not included in `allVideos`.
 *
 * @author Chace Nielson
 * @created Apr 10, 2025
 * @updated Apr 10, 2025
 */
import { tutorialVideos } from "./videoCategories/a-tutorialVideos.js";
import { understandingTheLandscapeVideos } from "./videoCategories/b-understandingTheLandscapeVideos.js";
import { environmentalIndicatorsVideos } from "./videoCategories/c-environmentalIndicatorsVideos.js";
import { socioEconomicIndicatorsVideos } from "./videoCategories/d-socio-economicIndicatorsVideos.js";
import { indigenousIndicatorsVideos } from "./videoCategories/e-indigenousIndicatorsVideos.js";
import { bowRiverWatershed360VideoSeries } from "./videoCategories/f-bowRiverWatershed360VideoSeries.js";
import { guardiansOfTheIceVideos } from "./videoCategories/g-guardiansOfTheIceVideoSeries.js";
import { stoneyVoicesVideos } from "./videoCategories/h-stoneyVoicesVideos.js";
import { blackfootVoicesVideos } from "./videoCategories/i-blackfootVoicesVideos.js";
import { pointsOfInterestVideos } from "./videoCategories/j-pointsOfInterest.js";
import { otherVideos } from "./videoCategories/z-otherVideos.js";

// ======= Aggregated Videos =======
const allVideos = [
  ...tutorialVideos, // 9 videos
  ...understandingTheLandscapeVideos, // 4 videos

  // indcators videos
  ...environmentalIndicatorsVideos, // 6 videos
  ...socioEconomicIndicatorsVideos, // 6 videos
  ...indigenousIndicatorsVideos, // 6 videos

  ...bowRiverWatershed360VideoSeries, //12 videos

  ...guardiansOfTheIceVideos, // 44 videos
 
  // Indigenous Voices
  ...stoneyVoicesVideos, // 28 videos
  ...blackfootVoicesVideos, // 1 video

  ...pointsOfInterestVideos, // 9 videos

  ...otherVideos, // 2 videos

  // 127 videos total
];

export { allVideos };