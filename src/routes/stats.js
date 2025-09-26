/**
 * @file stats.js
 * @module Routes/Stats
 * @desc Express routes for fetching statistical information about videos and lesson plans.
 *
 * @author Chace Nielson
 * @created Sep 26, 2025
 * @updated Sep 26, 2025
 */

import express from 'express';
import { allVideos } from '../data/videoData.js';
import { allLessons } from '../data/lessonData.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Stats:
 *       type: object
 *       properties:
 *         videos:
 *           type: object
 *           properties:
 *             total:
 *               type: integer
 *               description: Total number of videos
 *             byCategory:
 *               type: object
 *               description: Video counts by category
 *             byTool:
 *               type: object
 *               description: Video counts by associated tool
 *         lessons:
 *           type: object
 *           properties:
 *             total:
 *               type: integer
 *               description: Total number of lesson plans
 *             byTheme:
 *               type: object
 *               description: Lesson counts by theme
 *             byGrade:
 *               type: object
 *               description: Lesson counts by grade level
 *             bySubject:
 *               type: object
 *               description: Lesson counts by subject
 *             byTool:
 *               type: object
 *               description: Lesson counts by associated tool
 *         overview:
 *           type: object
 *           properties:
 *             totalResources:
 *               type: integer
 *               description: Total videos and lessons combined
 *             lastUpdated:
 *               type: string
 *               description: Timestamp when stats were generated
 */

/**
 * @swagger
 * /api/stats:
 *   get:
 *     summary: Get API statistics
 *     description: Retrieve comprehensive statistics about videos and lesson plans in the database
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: API statistics
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Stats'
 */
router.get('/', (req, res) => {
  console.log("➡️ Incoming request to /api/stats");

  // Video statistics
  const videoStats = {
    total: allVideos.length,
    byCategory: {},
    byTool: {}
  };

  // Count videos by category/subtype
  allVideos.forEach(video => {
    const category = video.subtype || video.category || 'Unknown';
    videoStats.byCategory[category] = (videoStats.byCategory[category] || 0) + 1;
  });

  // Count videos by tool
  allVideos.forEach(video => {
    if (video.tools && Array.isArray(video.tools)) {
      video.tools.forEach(tool => {
        videoStats.byTool[tool] = (videoStats.byTool[tool] || 0) + 1;
      });
    }
  });

  // Lesson statistics
  const lessonStats = {
    total: allLessons.length,
    byTheme: {},
    byGrade: {},
    bySubject: {},
    byTool: {}
  };

  // Count lessons by theme
  allLessons.forEach(lesson => {
    const theme = lesson.theme || 'Unknown';
    lessonStats.byTheme[theme] = (lessonStats.byTheme[theme] || 0) + 1;
  });

  // Count lessons by grade
  allLessons.forEach(lesson => {
    if (lesson.grades && Array.isArray(lesson.grades)) {
      lesson.grades.forEach(grade => {
        lessonStats.byGrade[grade] = (lessonStats.byGrade[grade] || 0) + 1;
      });
    }
  });

  // Count lessons by subject
  allLessons.forEach(lesson => {
    if (lesson.subjects && Array.isArray(lesson.subjects)) {
      lesson.subjects.forEach(subject => {
        lessonStats.bySubject[subject] = (lessonStats.bySubject[subject] || 0) + 1;
      });
    }
  });

  // Count lessons by tool
  allLessons.forEach(lesson => {
    if (lesson.tools && Array.isArray(lesson.tools)) {
      lesson.tools.forEach(tool => {
        lessonStats.byTool[tool] = (lessonStats.byTool[tool] || 0) + 1;
      });
    }
  });

  const stats = {
    videos: videoStats,
    lessons: lessonStats,
    overview: {
      totalResources: allVideos.length + allLessons.length,
      lastUpdated: new Date().toISOString()
    }
  };

  console.log("✅ Returning stats - Videos:", videoStats.total, "Lessons:", lessonStats.total);

  res.set('Access-Control-Allow-Origin', '*');
  res.json(stats);
});

/**
 * @swagger
 * /api/stats/videos:
 *   get:
 *     summary: Get video statistics only
 *     description: Retrieve statistics about videos only
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: Video statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                 byCategory:
 *                   type: object
 *                 byTool:
 *                   type: object
 */
router.get('/videos', (req, res) => {
  console.log("➡️ Incoming request to /api/stats/videos");

  const videoStats = {
    total: allVideos.length,
    byCategory: {},
    byTool: {}
  };

  // Count videos by category/subtype
  allVideos.forEach(video => {
    const category = video.subtype || video.category || 'Unknown';
    videoStats.byCategory[category] = (videoStats.byCategory[category] || 0) + 1;
  });

  // Count videos by tool
  allVideos.forEach(video => {
    if (video.tools && Array.isArray(video.tools)) {
      video.tools.forEach(tool => {
        videoStats.byTool[tool] = (videoStats.byTool[tool] || 0) + 1;
      });
    }
  });

  console.log("✅ Returning video stats - Total:", videoStats.total);

  res.set('Access-Control-Allow-Origin', '*');
  res.json(videoStats);
});

/**
 * @swagger
 * /api/stats/lessons:
 *   get:
 *     summary: Get lesson plan statistics only
 *     description: Retrieve statistics about lesson plans only
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: Lesson plan statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                 byTheme:
 *                   type: object
 *                 byGrade:
 *                   type: object
 *                 bySubject:
 *                   type: object
 *                 byTool:
 *                   type: object
 */
router.get('/lessons', (req, res) => {
  console.log("➡️ Incoming request to /api/stats/lessons");

  const lessonStats = {
    total: allLessons.length,
    byTheme: {},
    byGrade: {},
    bySubject: {},
    byTool: {}
  };

  // Count lessons by theme
  allLessons.forEach(lesson => {
    const theme = lesson.theme || 'Unknown';
    lessonStats.byTheme[theme] = (lessonStats.byTheme[theme] || 0) + 1;
  });

  // Count lessons by grade
  allLessons.forEach(lesson => {
    if (lesson.grades && Array.isArray(lesson.grades)) {
      lesson.grades.forEach(grade => {
        lessonStats.byGrade[grade] = (lessonStats.byGrade[grade] || 0) + 1;
      });
    }
  });

  // Count lessons by subject
  allLessons.forEach(lesson => {
    if (lesson.subjects && Array.isArray(lesson.subjects)) {
      lesson.subjects.forEach(subject => {
        lessonStats.bySubject[subject] = (lessonStats.bySubject[subject] || 0) + 1;
      });
    }
  });

  // Count lessons by tool
  allLessons.forEach(lesson => {
    if (lesson.tools && Array.isArray(lesson.tools)) {
      lesson.tools.forEach(tool => {
        lessonStats.byTool[tool] = (lessonStats.byTool[tool] || 0) + 1;
      });
    }
  });

  console.log("✅ Returning lesson stats - Total:", lessonStats.total);

  res.set('Access-Control-Allow-Origin', '*');
  res.json(lessonStats);
});

/**
 * @swagger
 * /api/stats/filters:
 *   get:
 *     summary: Get available filter options
 *     description: Retrieve all available filter values for videos and lessons to help with frontend dropdown menus
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: Available filter options
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 videos:
 *                   type: object
 *                   properties:
 *                     categories:
 *                       type: array
 *                       items:
 *                         type: string
 *                     tools:
 *                       type: array
 *                       items:
 *                         type: string
 *                 lessons:
 *                   type: object
 *                   properties:
 *                     themes:
 *                       type: array
 *                       items:
 *                         type: string
 *                     grades:
 *                       type: array
 *                       items:
 *                         type: string
 *                     subjects:
 *                       type: array
 *                       items:
 *                         type: string
 *                     tools:
 *                       type: array
 *                       items:
 *                         type: string
 */
router.get('/filters', (req, res) => {
  console.log("➡️ Incoming request to /api/stats/filters");

  // Get unique video categories and tools
  const videoCategories = new Set();
  const videoTools = new Set();

  allVideos.forEach(video => {
    if (video.subtype) videoCategories.add(video.subtype);
    if (video.category) videoCategories.add(video.category);
    if (video.tools && Array.isArray(video.tools)) {
      video.tools.forEach(tool => videoTools.add(tool));
    }
  });

  // Get unique lesson themes, grades, subjects, and tools
  const lessonThemes = new Set();
  const lessonGrades = new Set();
  const lessonSubjects = new Set();
  const lessonTools = new Set();

  allLessons.forEach(lesson => {
    if (lesson.theme) lessonThemes.add(lesson.theme);
    if (lesson.grades && Array.isArray(lesson.grades)) {
      lesson.grades.forEach(grade => lessonGrades.add(grade));
    }
    if (lesson.subjects && Array.isArray(lesson.subjects)) {
      lesson.subjects.forEach(subject => lessonSubjects.add(subject));
    }
    if (lesson.tools && Array.isArray(lesson.tools)) {
      lesson.tools.forEach(tool => lessonTools.add(tool));
    }
  });

  const filters = {
    videos: {
      categories: Array.from(videoCategories).sort(),
      tools: Array.from(videoTools).sort()
    },
    lessons: {
      themes: Array.from(lessonThemes).sort(),
      grades: Array.from(lessonGrades).sort(),
      subjects: Array.from(lessonSubjects).sort(),
      tools: Array.from(lessonTools).sort()
    }
  };

  console.log("✅ Returning filter options");

  res.set('Access-Control-Allow-Origin', '*');
  res.json(filters);
});

export default router;