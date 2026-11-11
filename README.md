# Alberta Tomorrow Resources API

A TypeScript/Express API that serves educational videos and lesson plans for the [Alberta Tomorrow](https://www.albertatomorrow.ca) platform. Resources are authored as individually typed TypeScript files, normalized into JSON by the generator, and served through a REST API with Swagger documentation.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Data Authoring](#data-authoring)
- [Generating Data](#generating-data)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Localization](#localization)

---

## Overview

The workflow has three stages:

```
Author TS files  →  npm run generate  →  npm start
(src/data/...)       (builds JSON)        (builds and serves API)
```

1. **Author** — Each video and lesson plan is a single TypeScript file exporting one typed object.
2. **Generate** — A script validates and compiles all files into two JSON files (`videos.json`, `lessonPlans.json`).
3. **Serve** — Express reads the JSON files and serves them via REST endpoints.

---

## Project Structure

```
src/
├── app.ts                        # Express app entry point
├── routes/
│   ├── videos.js                 # GET /api/videos
│   ├── lesson-plans.js           # GET /api/lessons
│   └── stats.js                  # GET /api/stats
└── data/
    ├── sharedTypes.ts            # Types shared by video and lesson-plan data
    ├── videoTypes.ts             # Video source and generated JSON schemas
    ├── lessonPlanTypes.ts        # Lesson-plan source and generated JSON schemas
    ├── videoData.ts               # Loads generated videos for the API
    ├── lessonData.ts              # Loads generated lesson plans for the API
    ├── enums/
    │   ├── gradeIds.js           # Grade level definitions
    │   ├── subjectIds.js         # Subject definitions
    │   ├── LessonThemeIds.js     # Lesson theme definitions
    │   └── videoCategoryIds.js   # Video category definitions
    ├── generated/
    │   ├── videos.json           # ← compiled output (do not edit manually)
    │   └── lessonPlans.json      # ← compiled output (do not edit manually)
    ├── videos/                   # One TS file per video, organised by category
    │   ├── A-TutorialVideos/
    │   ├── B-UnderstandingTheLandscape/
    │   ├── C-EnvironmentalIndicators/
    │   ├── D-SocioeconomicIndicators/
    │   ├── E-IndigenousIndicators/
    │   ├── F-BowRiverWatershed360/
    │   ├── G-GuardiansOfIce/
    │   ├── H-StoneyVideos/
    │   ├── I-BlackfootVideos/
    │   ├── J-PointsOfInterest/
    │   └── Z-OtherVideos/
    ├── lesson-plans/             # One TS file per lesson plan, organised by theme
    │   ├── A_ClimateChangeLessons/
    │   ├── B_GlaciersAndWatershedsLessons/
    │   ├── C_LandUseLessons/
    │   ├── D_AlbertaNaturalRegionsAndEcosystemsLessons/
    │   ├── E_IndigenousVoicesLessons/
    │   ├── F_BowRiverWatershedLessons/
    │   └── G_EnergyLessons/
    └── scripts/
        ├── generate.ts           # Orchestrator — runs both generators
        ├── generateLessonPlans.ts
        ├── generateVideos.ts
        └── utils.ts              # Shared helpers (file discovery, normalisation)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Generate the JSON data files
npm run generate

# Start the development server
npm run dev
```

---

## Data Authoring

### Video file

Each video lives in its own TypeScript file under `src/data/videos/<Category>/`. It exports one object checked against `VideoSource`:

```ts
import { Language } from "../../enums/language.js";
import { VideoCategory } from "../../enums/videoCategoryIds.js";
import type { VideoSource } from "../../videoTypes.js";

export const climateChangeVideo = {
  id: "landscape-01b-climate-change",          // required — must be unique
  supportedLanguages: [Language.EN.id],
  categoryId: VideoCategory.LANDSCAPE.id,

  title: {
    en: "Climate Change",
    fr: "Changements climatiques"
  },

  description: {
    en: "How will Alberta be affected by climate change?",
    fr: "Comment l'Alberta sera-t-elle touchée par les changements climatiques?"
  },

  media: {
    primaryUrl: "N/A",
    youtubeUrl: "https://www.youtube.com/watch?v=Okh7vn60kxg",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/...",
    is360: false
  },

  subtitles: {
    en: "N/A",
    fr: "N/A"
  },

  searchTerms: {
    en: ["climate change", "global warming", "Alberta"],
    fr: ["changements climatiques", "réchauffement climatique", "Alberta"]
  }
} satisfies VideoSource;
```

Use `"N/A"` for subtitle URLs that are not available yet. `primaryUrl` may be omitted until a primary stream is found; the generator writes `"N/A"` for it. `youtubeUrl` is the backup link. `lessonPlanIds` is automatically populated by the generator.

---

### Lesson plan file

Each lesson plan lives in its own TypeScript file under `src/data/lesson-plans/<Theme>/`, with its object checked against `LessonPlanSource`:

```ts
import { LessonTheme } from "../../enums/LessonThemeIds.js";
import { FileType } from "../../enums/fileTypes.js";
import { Grade } from "../../enums/gradeIds.js";
import { Subject } from "../../enums/subjectIds.js";
import type { LessonPlanSource } from "../../lessonPlanTypes.js";

export const goingGoingGoingGoneLessonPlan = {
  id: "climate-01a-going-going-gone",          // required — must be unique
  themeId: LessonTheme.CLIMATE_CHANGE.id,

  title: {
    en: "Going Going Going Gone: Climate Change and the Columbia Icefield",
    fr: "..."
  },

  description: {
    en: "Students explore how climate change has affected Alberta's glaciers.",
    fr: "..."
  },

  approximateTime: {
    en: "60 min",
    fr: "60 min"
  },

  files: {
    en: [
      {
        fileType: FileType.LESSON_PLAN,
        title: "Lesson Plan",
        url: "https://example.com/lesson-plan",
        pdfUrl: "N/A"
      }
    ],
    fr: []
  },

  gradeIds: [Grade.GRADE_6.id],
  subjectIds: [Subject.SCIENCE.id],

  searchTerms: {
    en: ["glaciers", "climate change"],
    fr: ["glaciers", "changements climatiques"]
  },

  learningOutcomes: {
    en: ["Understand the effect of climate change on glacier mass"],
    fr: ["..."]
  },

  videoIds: ["landscape-01b-climate-change"],  // references video IDs
  relatedResources: []
} satisfies LessonPlanSource;
```

---

## Generating Data

After authoring or editing source files, regenerate the JSON:

| Command | Description |
|---|---|
| `npm run generate` | Compile both lesson plans and videos |
| `npm run generate:lessons` | Compile lesson plans only → `lessonPlans.json` |
| `npm run generate:videos` | Compile videos only → `videos.json` |

### Logging flags

Pass flags after `--` to control output verbosity:

| Flag | Description |
|---|---|
| *(none)* | Default — shows only a summary count of skipped files |
| `--verbose` | Lists every skipped file by path (useful for debugging) |
| `--strict` | Fails the build if any files are incomplete (useful for CI / pre-deploy) |

```bash
# Default — quiet summary
npm run generate

# See which files were skipped
npm run generate -- --verbose

# Fail if any files are still incomplete
npm run generate -- --strict
```

**What the generator does:**
- Discovers all `.ts` files recursively under each source directory
- Skips files where the exported object has no `id` (summary shown by default, details with `--verbose`)
- Fills missing localised strings with `"N/A"` and missing arrays with `[]`
- Warns (but continues) when a lesson plan references a video that isn't loaded yet
- Injects `lessonPlanIds` into each video based on which lesson plans reference it
- Throws if any duplicate `id` is found

---

## Running the API

```bash
# Build the TypeScript application
npm run build

# Development (auto-restarts on file changes)
npm run dev

# Production (builds before starting)
npm start
```

`npm start` and `npm run lambda` build JavaScript into `dist/` before running. Run `npm run typecheck` to check the application without emitting build files.

The server starts on `http://localhost:3000` by default. Set a `PORT` environment variable to override.

Interactive API documentation (Swagger UI) is available at:
```
http://localhost:3000/api-docs
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/videos` | All videos |
| GET | `/api/videos?category=<id>` | Videos filtered by category |
| GET | `/api/lessons` | All lesson plans |
| GET | `/api/lessons?theme=<id>` | Lesson plans filtered by theme |
| GET | `/api/lessons?subject=<id>` | Lesson plans filtered by subject |
| GET | `/api/lessons?grade=<id>` | Lesson plans filtered by grade |
| GET | `/api/stats` | Counts of videos and lesson plans |

---

## Localization

All user-facing text fields support English and French:

```json
{
  "title": { "en": "Climate Change", "fr": "Changements climatiques" },
  "description": { "en": "...", "fr": "..." }
}
```

Fields that have not yet been translated are set to `"N/A"` in the generated JSON. Enum IDs (grades, subjects, themes, categories) are language-neutral stable strings and are never translated.
Missing subtitle URLs use `"N/A"` for both English and French until tracks are added. Missing arrays are generated as empty arrays.
