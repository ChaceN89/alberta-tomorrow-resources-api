/**
 * @file lesson-plans.js
 * @module Routes/LessonPlans
 * @desc Express routes for fetching lesson plan data. Supports optional filtering by theme, subject, grade, or associated tool.
 *
 * @author Chace Nielson
 * @created Sep 26, 2025
 * @updated Sep 26, 2025
 */

import express from 'express';
import { allLessons } from '../data/lessonData.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Lesson:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the lesson
 *         title:
 *           type: string
 *           description: Lesson title
 *         description:
 *           type: string
 *           description: Lesson description
 *         theme:
 *           type: string
 *           description: Lesson theme
 *         subjects:
 *           type: array
 *           items:
 *             type: string
 *           description: Academic subjects covered
 *         grades:
 *           type: array
 *           items:
 *             type: string
 *           description: Grade levels
 *         tools:
 *           type: array
 *           items:
 *             type: string
 *           description: Associated tools
 */

/**
 * @swagger
 * /api/lessons:
 *   get:
 *     summary: Get all lesson plans
 *     description: Retrieve all lesson plans with optional filtering by theme, subject, grade, or tool, and optional pagination
 *     tags: [Lessons]
 *     parameters:
 *       - in: query
 *         name: theme
 *         schema:
 *           type: string
 *         description: Filter by lesson theme
 *       - in: query
 *         name: subject
 *         schema:
 *           type: string
 *         description: Filter by academic subject
 *       - in: query
 *         name: grade
 *         schema:
 *           type: string
 *         description: Filter by grade level
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
 *         description: List of lesson plans with pagination metadata
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Lesson'
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
 * GET /api/lessons
 * Returns a list of all lesson plans. Supports optional filtering by theme, subject, grade, and tool via query parameters.
 *
 * @param {express.Request} req - Express request object, with optional query parameters:
 *   @param {string} [theme] - Filter lessons by theme.
 *   @param {string} [subject] - Filter lessons by subject.
 *   @param {string} [grade] - Filter lessons by grade.
 *   @param {string} [tool] - Filter lessons by associated tool.
 * @param {express.Response} res - Express response object.
 * @returns {Object[]} Array of lesson plan objects matching the filters (if any).
 */
router.get('/', (req, res) => {
  const { theme, subject, grade, tool, page, limit } = req.query;

  console.log("➡️ Incoming request to /api/lessons");
  console.log("Theme Filter:", theme);
  console.log("Subject Filter:", subject);
  console.log("Grade Filter:", grade);
  console.log("Tool Filter:", tool);
  console.log("Pagination - Page:", page, "Limit:", limit);

  let filteredLessons = allLessons;

  // Filter by theme (strict match)
  if (theme) {
    filteredLessons = filteredLessons.filter(
      (lesson) => lesson.theme?.toLowerCase() === theme.toLowerCase()
    );
  }

  // Filter by subject (checks for presence in array)
  if (subject) {
    filteredLessons = filteredLessons.filter(
      (lesson) =>
        lesson.subjects &&
        lesson.subjects.some(
          (s) => s.toLowerCase() === subject.toLowerCase()
        )
    );
  }

  // Filter by grade (checks for presence in array)
  if (grade) {
    filteredLessons = filteredLessons.filter(
      (lesson) =>
        lesson.grades &&
        lesson.grades.some(
          (g) => g.toLowerCase() === grade.toLowerCase()
        )
    );
  }

  // Filter by tool (checks for presence in array)
  if (tool) {
    filteredLessons = filteredLessons.filter(
      (lesson) =>
        lesson.tools &&
        lesson.tools.some(
          (t) => t.toLowerCase() === tool.toLowerCase()
        )
    );
  }

  const totalLessons = filteredLessons.length;

  // Pagination logic
  if (limit) {
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    
    const paginatedLessons = filteredLessons.slice(startIndex, endIndex);
    const totalPages = Math.ceil(totalLessons / limitNum);

    console.log(`✅ Returning paginated lessons: ${paginatedLessons.length} of ${totalLessons} (Page ${pageNum}/${totalPages})`);

    res.set('Access-Control-Allow-Origin', '*');
    res.json({
      data: paginatedLessons,
      meta: {
        total: totalLessons,
        page: pageNum,
        limit: limitNum,
        totalPages: totalPages,
        hasNext: pageNum < totalPages,
        hasPrev: pageNum > 1
      }
    });
  } else {
    // Return all lessons without pagination
    console.log("✅ Returning all lessons:", totalLessons);
    
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
      data: filteredLessons,
      meta: {
        total: totalLessons,
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
 * /api/lessons/{id}:
 *   get:
 *     summary: Get a lesson plan by ID
 *     description: Retrieve a single lesson plan by its unique identifier
 *     tags: [Lessons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Lesson plan ID
 *     responses:
 *       200:
 *         description: Lesson plan found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lesson'
 *       404:
 *         description: Lesson plan not found
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

  console.log("➡️ Fetching lesson by ID:", id);

  const lesson = allLessons.find((l) => String(l.id) === String(id));

  if (!lesson) {
    console.warn("❌ Lesson not found:", id);
    return res.status(404).json({
      error: `Lesson with ID ${id} not found`
    });
  }

  console.log("✅ Found lesson:", lesson.title);
  res.json(lesson);
});

export default router;
