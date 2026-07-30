# Alberta Tomorrow Resources API

A Node.js/Express API that serves educational videos and lesson plans for the [Alberta Tomorrow](https://www.albertatomorrow.ca) platform. Resources are authored as individual JavaScript files, compiled into JSON via a generation script, and served through a REST API with Swagger documentation.

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
Author JS files  →  npm run generate  →  npm start
(src/data/...)       (builds JSON)        (serves API)
```

1. **Author** — Each video and lesson plan is a single JS file exporting one object.
2. **Generate** — A script validates and compiles all files into two JSON files (`videos.json`, `lessonPlans.json`).
3. **Serve** — Express reads the JSON files and serves them via REST endpoints.

---

## Project Structure

```
src/
├── app.js                        # Express app entry point
├── routes/
│   ├── videos.js                 # GET /api/videos
│   ├── lesson-plans.js           # GET /api/lessons
│   └── stats.js                  # GET /api/stats
└── data/
    ├── enums/
    │   ├── gradeIds.js           # Grade level definitions
    │   ├── subjectIds.js         # Subject definitions
    │   ├── LessonThemeIds.js     # Lesson theme definitions
    │   └── videoCategoryIds.js   # Video category definitions
    ├── generated/
    │   ├── videos.json           # ← compiled output (do not edit manually)
    │   └── lessonPlans.json      # ← compiled output (do not edit manually)
    ├── videos/                   # One JS file per video, organised by category
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
    ├── lesson-plans/             # One JS file per lesson plan, organised by theme
    │   ├── A_ClimateChangeLessons/
    │   ├── B_GlaciersAndWatershedsLessons/
    │   ├── C_LandUseLessons/
    │   ├── D_AlbertaNaturalRegionsAndEcosystemsLessons/
    │   ├── E_IndigenousVoicesLessons/
    │   ├── F_BowRiverWatershedLessons/
    │   └── G_EnergyLessons/
    └── scripts/
        ├── generate.js           # Orchestrator — runs both generators
        ├── generateLessonPlans.js
        ├── generateVideos.js
        └── utils.js              # Shared helpers (file discovery, normalisation)
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

Each video lives in its own JS file under `src/data/videos/<Category>/`. It must export exactly **one named object**:

```js
import { VideoCategory } from "../../enums/videoCategoryIds.js";

export const climateChangeVideo = {
  id: "landscape-01b-climate-change",          // required — must be unique
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
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Okh7vn60kxg",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/...",
    is360: false
  },

  searchTerms: {
    en: ["climate change", "global warming", "Alberta"],
    fr: ["changements climatiques", "réchauffement climatique", "Alberta"]
  }
};
```

> `lessonPlanIds` is automatically populated by the generator — do not set it manually.

---

### Lesson plan file

Each lesson plan lives in its own JS file under `src/data/lesson-plans/<Theme>/`. It must export exactly **one named object**:

```js
import { LessonTheme } from "../../enums/LessonThemeIds.js";

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

  provider: {
    name: "Alberta Tomorrow",
    link: "https://www.albertatomorrow.ca"
  },

  approximateTime: "60 min",
  tools: ["Land Use Simulator"],

  grades: [/* Grade enum objects from gradeIds.js */],
  subjects: [/* Subject enum objects from subjectIds.js */],

  tags: {
    en: ["glaciers", "climate change"],
    fr: ["glaciers", "changements climatiques"]
  },

  learningOutcomes: {
    en: ["Understand the effect of climate change on glacier mass"],
    fr: ["..."]
  },

  files: [
    { title: "Lesson Plan PDF", link: "/pdfs/lesson-plans/..." }
  ],

  videoIds: ["landscape-01b-climate-change"],  // references video IDs

  relatedUrls: [
    { title: "Guardians of the Ice", link: "https://guardiansoftheice.com" }
  ]
};
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
- Discovers all `.js` files recursively under each source directory
- Skips files where the exported object has no `id` (summary shown by default, details with `--verbose`)
- Fills missing localised strings with `"N/A"` and missing arrays with `[]`
- Warns (but continues) when a lesson plan references a video that isn't loaded yet
- Injects `lessonPlanIds` into each video based on which lesson plans reference it
- Throws if any duplicate `id` is found

---

## Running the API

```bash
# Development (auto-restarts on file changes)
npm run dev

# Production
npm start
```

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
