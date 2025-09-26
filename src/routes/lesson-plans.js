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
  const { theme, subject, grade, tool } = req.query;

  console.log("➡️ Incoming request to /api/lessons");
  console.log("Theme Filter:", theme);
  console.log("Subject Filter:", subject);
  console.log("Grade Filter:", grade);
  console.log("Tool Filter:", tool);

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

  console.log("✅ Returning lessons:", filteredLessons.length);

  res.set('Access-Control-Allow-Origin', '*'); // Allow CORS in development
  res.json(filteredLessons);
});

/** * GET /api/lessons/:id
 * Returns a single lesson plan by its unique ID.
 *
 * @param {express.Request} req - Express request object, with URL parameter:
 *   @param {string} id - Unique identifier of the lesson to retrieve.
 * @param {express.Response} res - Express response object.
 * @returns {Object} Lesson object if found, or 404 error if not found.
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
