/**
 * @file videos.js
 * @module Routes/Videos
 * @desc Express routes for fetching video data. Supports optional filtering by category or associated tool.
 *
 * @author Chace Nielson
 * @created Sep 26, 2025
 * @updated Sep 26, 2025
 */

import express from 'express';
import { allVideos } from '../data/videoData.js';

const router = express.Router();


/**
 * GET /api/videos
 * Returns a list of all videos. Supports optional filtering by category and tool via query parameters.
 *
 * @param {express.Request} req - Express request object, with optional query parameters:
 *   @param {string} [category] - Filter videos by category (subtype).
 *   @param {string} [tool] - Filter videos by associated tool.
 * @param {express.Response} res - Express response object.
 * @returns {Object[]} Array of video objects matching the filters (if any).
 */
router.get('/', (req, res) => {
  const { category, tool } = req.query;

  console.log("➡️ Incoming request to /api/videos");
  console.log("Category Filter:", category);
  console.log("Tool Filter:", tool);

  let filteredVideos = allVideos;

  // Filter by category
  if (category) {
    filteredVideos = filteredVideos.filter(
      (video) => video.subtype?.toLowerCase() === category.toLowerCase()
    );
    console.log("Filtered by category:", filteredVideos.length);
  }

  // Filter by tool
  if (tool) {
    filteredVideos = filteredVideos.filter(
      (video) =>
        video.tools &&
        video.tools.some((t) => t.toLowerCase() === tool.toLowerCase())
    );
    console.log("Filtered by tool:", filteredVideos.length);
  }

  console.log("✅ Returning videos:", filteredVideos.length);

  res.set('Access-Control-Allow-Origin', '*'); // Allow CORS in development
  res.json(filteredVideos);
});


/** * GET /api/videos/:id
 * Returns a single video by its unique ID.
 *
 * @param {express.Request} req - Express request object, with URL parameter:
 *   @param {string} id - Unique identifier of the video to retrieve.
 * @param {express.Response} res - Express response object.
 * @returns {Object} Video object if found, or 404 error if not found.
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;

  console.log("➡️ Fetching video by ID:", id);

  const video = allVideos.find((v) => String(v.id) === String(id));

  if (!video) {
    console.warn("❌ Video not found:", id);
    return res.status(404).json({
      error: `Video with ID ${id} not found`
    });
  }

  console.log("✅ Found video:", video.title);
  res.json(video);
});

export default router;
