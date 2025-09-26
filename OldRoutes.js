// next js routes that need to be translateds to this express all - this file will be removed later


/**
 * @file route.js
 * @module API/Videos
 * @desc API endpoint for fetching video data. Supports optional filtering by category or associated tool.
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 1, 2025
 */

import { NextResponse } from "next/server";
import { allVideos } from "./videoData";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");
  const tool = searchParams.get("tool");

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

  return NextResponse.json(filteredVideos, {
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow CORS in development
    },
  });
}




//second file 


/**
 * @file [id]/route.js
 * @module API/Videos/Single
 * @desc API endpoint for fetching a single video by ID.
 *
 * @author Chace Nielson
 * @created Apr 11, 2025
 * @updated Apr 11, 2025
 */

import { NextResponse } from "next/server";
import { allVideos } from "../videoData";

/**
 * GET /api/videos/[id]
 */
export async function GET(req, context) {
  const { id } = await context.params; // ✅ await required in Next 15+



  console.log("➡️ Fetching video by ID:", id);

  const video = allVideos.find((v) => String(v.id) === String(id));

  if (!video) {
    console.warn("❌ Video not found:", id);
    return NextResponse.json(
      { error: `Video with ID ${id} not found` },
      { status: 404 }
    );
  }

  console.log("✅ Found video:", video.title);
  return NextResponse.json(video);
}






//third file

/**
 * @file route.js
 * @module API/Lessons
 * @desc API endpoint for fetching lesson plan data. Supports optional filtering by theme, subject, grade, or associated tool.
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 13, 2025
 */

import { NextResponse } from "next/server";
import { allLessons } from "./lessonData"; // Assumes allLessons is an array of all lesson plans

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const theme = searchParams.get("theme");
  const subject = searchParams.get("subject");
  const grade = searchParams.get("grade");
  const tool = searchParams.get("tool");

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

  return NextResponse.json(filteredLessons, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}




// 4th file

/**
 * @file [id]/route.js
 * @module API/Lessons/Single
 * @desc API endpoint for fetching a single lesson plan by ID.
 *
 * @author Chace Nielson
 * @created Apr 13, 2025
 * @updated Apr 13, 2025
 */

import { NextResponse } from "next/server";
import { allLessons } from "../lessonData";

/**
 * GET /api/lessons/[id]
 */
export async function GET(req, context) {
  const { id } = await context.params; // ✅ await required in Next 15+



  console.log("➡️ Fetching lesson by ID:", id);

  const lesson = allLessons.find((l) => String(l.id) === String(id));

  if (!lesson) {
    console.warn("❌ Lesson not found:", id);
    return NextResponse.json(
      { error: `Lesson with ID ${id} not found` },
      { status: 404 }
    );
  }

  console.log("✅ Found lesson:", lesson.title);
  return NextResponse.json(lesson);
}
