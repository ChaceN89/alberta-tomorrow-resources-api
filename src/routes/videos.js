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
 * @swagger
 * components:
 *   schemas:
 *     Video:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the video
 *         title:
 *           type: string
 *           description: Video title
 *         description:
 *           type: string
 *           description: Video description
 *         category:
 *           type: string
 *           description: Video category
 *         subtype:
 *           type: string
 *           description: Video subtype/category
 *         tools:
 *           type: array
 *           items:
 *             type: string
 *           description: Associated tools
 *         media:
 *           type: object
 *           properties:
 *             url:
 *               type: string
 *               description: Video URL
 *             thumbUrl:
 *               type: string
 *               description: Thumbnail URL
 *             is360:
 *               type: boolean
 *               description: Whether the video is 360-degree
 */

/**
 * @swagger
 * /api/videos:
 *   get:
 *     summary: Get all videos
 *     description: Retrieve all videos with optional filtering by category or tool, and optional pagination
 *     tags: [Videos]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by video category/subtype
 *       - in: query
 *         name: tool
 *         schema:
 *           type: string
 *         description: Filter by associated tool
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number (starts at 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         description: Number of items per page (omit for all results)
 *     responses:
 *       200:
 *         description: List of videos with pagination metadata
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Video'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     hasNext:
 *                       type: boolean
 *                     hasPrev:
 *                       type: boolean
 */


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
  const { category, tool, page, limit } = req.query;

  console.log("➡️ Incoming request to /api/videos");
  console.log("Category Filter:", category);
  console.log("Tool Filter:", tool);
  console.log("Pagination - Page:", page, "Limit:", limit);

  let filteredVideos = allVideos;

  // Filter by category
  if (category) {
    filteredVideos = filteredVideos.filter(
      (video) => {
        const videoCategory = video.category;
        return videoCategory?.toLowerCase() === category.toLowerCase();
      }
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

  const totalVideos = filteredVideos.length;

  // Pagination logic
  if (limit) {
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    
    const paginatedVideos = filteredVideos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(totalVideos / limitNum);

    console.log(`✅ Returning paginated videos: ${paginatedVideos.length} of ${totalVideos} (Page ${pageNum}/${totalPages})`);

    res.set('Access-Control-Allow-Origin', '*');
    res.json({
      data: paginatedVideos,
      meta: {
        total: totalVideos,
        page: pageNum,
        limit: limitNum,
        totalPages: totalPages,
        hasNext: pageNum < totalPages,
        hasPrev: pageNum > 1
      }
    });
  } else {
    // Return all videos without pagination
    console.log("✅ Returning all videos:", totalVideos);
    
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
      data: filteredVideos,
      meta: {
        total: totalVideos,
        page: null,
        limit: null,
        totalPages: null,
        hasNext: false,
        hasPrev: false
      }
    });
  }
});

/**
 * @swagger
 * /api/videos/{id}:
 *   get:
 *     summary: Get a video by ID
 *     description: Retrieve a single video by its unique identifier
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Video ID
 *     responses:
 *       200:
 *         description: Video found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       404:
 *         description: Video not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
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
