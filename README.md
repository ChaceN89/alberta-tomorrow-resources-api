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
    ├── core/
    │   ├── assetUrls.ts          # Asset URL builders and the Alberta Tomorrow provider constant
    │   ├── sharedTypes.ts        # Types shared by video and lesson-plan data
    │   ├── videoTypes.ts         # Video source and generated JSON schemas
    │   ├── lessonPlanTypes.ts    # Lesson-plan source and generated JSON schemas
    │   ├── videoData.ts          # Loads generated videos for the API
    │   └── lessonData.ts         # Loads generated lesson plans for the API
    ├── enums/
    │   ├── gradeIds.js           # Grade level definitions
    │   ├── subjectIds.js         # Subject definitions
    │   ├── LessonThemeIds.js     # Lesson theme definitions
    │   └── videoCategoryIds.js   # Video category definitions
    ├── generated/
    │   ├── videos.json           # ← compiled output (do not edit manually)
    │   └── lessonPlans.json      # ← compiled output (do not edit manually)
    ├── resource-metadata/        # Authored TypeScript metadata, one file per resource
    │   ├── videos/               # One TS file per video, organised by category
    │   │   ├── A-TutorialVideos/
    │   │   ├── B-UnderstandingTheLandscape/
    │   │   ├── C-EnvironmentalIndicators/
    │   │   ├── D-SocioeconomicIndicators/
    │   │   ├── E-IndigenousIndicators/
    │   │   ├── F-BowRiverWatershed360/
    │   │   ├── G-GuardiansOfIce/
    │   │   ├── H-StoneyVideos/
    │   │   ├── I-BlackfootVideos/
    │   │   ├── J-PointsOfInterest/
    │   │   └── Z-OtherVideos/
    │   └── lesson-plans/         # One TS file per lesson plan, organised by theme
    │       ├── A_ClimateChangeLessons/
    │       ├── B_GlaciersAndWatershedsLessons/
    │       ├── C_LandUseLessons/
    │       ├── D_AlbertaNaturalRegionsAndEcosystemsLessons/
    │       ├── E_IndigenousVoicesLessons/
    │       ├── F_BowRiverWatershedLessons/
    │       └── G_EnergyLessons/
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

Each video lives in its own TypeScript file under `src/data/resource-metadata/videos/<Category>/`. It exports one object checked against `VideoSource`:

```ts
import { Language } from "../../enums/language.js";
import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { ALBERTA_TOMORROW_PROVIDER } from "../../core/assetUrls.js";
import type { VideoSource } from "../../core/videoTypes.js";

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
    primaryUrl: null,
    youtubeUrl: "https://www.youtube.com/watch?v=Okh7vn60kxg",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/...",
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER // or the channel URL for videos from other providers
  },

  subtitles: {
    en: "https://d2qcvmovr4fv.cloudfront.net/...",
    fr: null // no French track
  },

  searchTerms: {
    en: ["climate change", "global warming", "Alberta"],
    fr: ["changements climatiques", "réchauffement climatique", "Alberta"]
  }
} satisfies VideoSource;
```

Use `null` in video source files for missing media URLs, including `primaryUrl`. The generator converts null video URL values to `"N/A"` in the generated JSON. `subtitles.en` and `subtitles.fr` are set per language: use a URL when a caption track exists and `null` when it does not (for example, both `null` for a video with no speech). Null subtitles stay `null` in the generated JSON so the frontend can skip loading them, and the `pullyoutube` listing only requires `en.vtt` / `fr.vtt` for languages that have a URL. `youtubeUrl` is the backup link. `is360` and `provider` are required on every video so each record is explicit. Use `ALBERTA_TOMORROW_PROVIDER` (exported from `src/data/core/assetUrls.ts`, and imported alongside `getVideoAssetPaths`) for Alberta Tomorrow's own videos, or the channel/site URL for videos from other providers. `lessonPlanIds` is automatically populated by the generator.

---

### Lesson plan file

Each lesson plan lives in its own TypeScript file under `src/data/resource-metadata/lesson-plans/<Theme>/`, with its object checked against `LessonPlanSource`:

```ts
import { LessonTheme } from "../../../enums/LessonThemeIds.js";
import { FileType } from "../../../enums/fileTypes.js";
import { Grade } from "../../../enums/gradeIds.js";
import { Subject } from "../../../enums/subjectIds.js";
import { GOOGLE_DOCS_BASE_URL } from "../../../core/assetUrls.js";
import type { LessonPlanSource } from "../../../core/lessonPlanTypes.js";

const lessonId = "climate-01a-going-going-gone";

export const goingGoingGoingGoneLessonPlan = {
  id: lessonId,                               // required — must be unique
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
        url: `${GOOGLE_DOCS_BASE_URL}/document/d/example/edit`
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

### Shared asset URLs

`src/data/core/assetUrls.ts` centralizes the Google Docs, video and lesson-plan PDF base URLs,
along with the case-sensitive video category and lesson theme folder mappings. Video records use their internal ID
and the standard filenames `video.mp4`, `thumbnail.jpg`, `en.vtt`, and `fr.vtt`; they
can build asset links with `getVideoAssetPaths(categoryId, videoId).file(fileName)`.
The 12 Bow River 360 videos instead use their existing CloudFront HLS (`.m3u8`)
streams as `primaryUrl`, keeping their YouTube fallback links and asset thumbnails.
Both subtitle languages remain `null`; the Blackfoot video is unchanged.
The generator derives each lesson file's `pdfUrl` from its `fileType` and language.
The generated URLs use the CloudFront base and mirror the local extraction layout:
`lesson-plan-pdfs/<theme-folder>/<lesson-id>/<language>-<fileType>.pdf`.
**These are planned URLs, not proof that the PDF has been uploaded.** They can return
errors until the corresponding files are uploaded to the matching S3 keys and served
by CloudFront.

### Auditing CloudFront resource links

The `audit:resources` command checks the generated links against their upstream content.
For each video, it compares the English metadata title and a two-second duration tolerance
between YouTube and CloudFront. The duration comparison requires both `yt-dlp` and
`ffprobe`; on macOS they can be installed with `brew install yt-dlp ffmpeg`.

For lesson-plan files, the command exports the current Google Docs or Slides PDF and
first compares it byte-for-byte with the CloudFront PDF. If export metadata makes the
bytes differ, it renders both PDFs and compares every page. This requires `pdftoppm`;
on macOS it can be installed with `brew install poppler`. A mismatch after rendering
usually means the uploaded PDF is stale, or that the CloudFront URL points at the
wrong file.

```bash
npm run audit:resources
npm run audit:resources -- --videos-only
npm run audit:resources -- --lessons-only
npm run audit:resources -- --video tutorial-01a-register-account
npm run audit:resources -- --lesson climate-01-going-going-going-gone
npm run audit:resources -- --output ./resource-audit.json
```

Use `--duration-tolerance <seconds>` to change the video tolerance or
`--concurrency <count>` to change how many checks run at once. The command reports
individual failures, writes the full result when `--output` is supplied, and exits
unsuccessfully if any mismatch or check failure is found.

### Pulling lesson-plan PDFs

The `pulllessonpdfs` command exports public Google Docs and Slides files and downloads
public Drive PDFs for individual lessons, one section, or all sections. It reads the source URLs from the lesson
metadata and requires no Google credentials when the documents are publicly accessible.

```bash
npm run pulllessonpdfs -- climate-01-going-going-going-gone
npm run pulllessonpdfs -- climate-01-going-going-going-gone --list
npm run pulllessonpdfs -- --section A_ClimateChangeLessons
npm run pulllessonpdfs -- --section A_ClimateChangeLessons --list
npm run pulllessonpdfs -- --all
npm run pulllessonpdfs -- --all --list
```

The command discovers lesson source files in the section, in source order. The files are
saved in the git-ignored directory
`src/data/extracted-data/lesson-plan-extracted-data/<section-folder>/<lesson-id>/`.
Filenames combine the language and `fileType`, such as `en-lesson-plan.pdf`.
Repeated file types within a language use `-2`, `-3`, and so on, in metadata order.
The generator and downloader use the same naming logic. **Reordering or removing files
of the same type changes which document a numbered filename refers to.** After upload,
keep their order stable, or update the affected S3 files to match. Existing
files are preserved; pass `--override` to replace them or `--out-dir <path>` to use
a different extraction root. Failed exports are reported individually; successful
exports remain available and the command exits unsuccessfully if any fail.

This command does not upload to S3. Google Drive links must point to actual PDFs;
images and other non-PDF files are rejected and must be converted separately.
Inaccessible documents are also reported as failures; the remaining files are still
attempted, and rerunning skips previously downloaded files.
Previously downloaded files with old descriptive names are not
renamed or deleted automatically.

### Pulling YouTube assets

The local `pullyoutube` command looks up a video ID in the generated video data and saves
`video.mp4`, `thumbnail.jpg`, `en.vtt`, and `fr.vtt` under
`src/data/extracted-data/youtube-extracted-data/<category-folder>/<video-id>/`. This directory is
git-ignored. By default, existing files are left untouched and only missing files are
downloaded or copied. This lets you keep a manually replaced thumbnail or asset while
filling gaps in the same export. Interactive terminals show color-coded statuses; set
`NO_COLOR=1` to disable ANSI colors.

The goal is to collect the YouTube video, thumbnail, and English/French caption assets
locally so they can be reviewed and uploaded alongside the video records. Extraction
does not upload anything to AWS. After checking the files, manually upload each
video's extracted files to the matching S3 prefix:

```text
Local: src/data/extracted-data/youtube-extracted-data/<category-folder>/<video-id>/
S3:    s3://<BUCKET_NAME>/video-assets/<category-folder>/<video-id>/
```

Keep the filenames (`video.mp4`, `thumbnail.jpg`, `en.vtt`, `fr.vtt`) unchanged. The
S3 directory mirrors the local extraction directory, so the generated video URLs will
resolve after the files are uploaded.

### Uploading resource assets to S3

The Makefile uploads extracted assets to the **existing** bucket specified by
`BUCKET_NAME` in `.env`. It reads the AWS credentials and region from that file too.
AWS CLI access must allow writing to that bucket. This is separate from API deployment;
it does not build the API, create buckets, or upload generated JSON.

List named AWS profiles with `aws configure list-profiles`. Pass `PROFILE=<name>`
to select one for any Makefile upload or invalidation command. When selected, the
Makefile clears environment access keys and session tokens (including keys from `.env`)
so they cannot override the profile. Without `PROFILE`, existing credential behavior
is unchanged. The region and bucket still come from `.env`.

```bash
make upload-pdfs PROFILE=your-profile DRY_RUN=1
make upload-assets DRY_RUN=1
make upload-assets
make upload-videos SECTION=A-TutorialVideos
make upload-pdfs SECTION=A_ClimateChangeLessons
make upload-pdfs SECTION=A_ClimateChangeLessons ID=climate-04-science-6-climate-change-in-alberta
make upload-videos SECTION=A-TutorialVideos ID=tutorial-01a-register-account FILE=thumbnail.jpg
```

Any upload command accepts `DRY_RUN=1`. Uploads add or update files, **never delete
S3 objects**, and preserve the local section/resource directory layout. The two mappings are:

```text
youtube-extracted-data/     -> s3://<BUCKET_NAME>/video-assets/
lesson-plan-extracted-data/ -> s3://<BUCKET_NAME>/lesson-plan-pdfs/
```

Only standard video filenames and file-type-based PDF names are uploaded. Old
descriptively named PDFs, temporary files and unrelated files are excluded. Directory
uploads use `aws s3 sync`; use `FILE=<filename>` to explicitly replace one file with
`aws s3 cp`, even if its size or timestamp would otherwise cause sync to skip it.

Cache invalidation is optional and separate. Set `ASSETS_DISTRIBUTION_ID` in `.env`
to the distribution serving the resource bucket, **not** the future API distribution's
`DISTRIBUTION_ID`, then run:

```bash
make invalidate-assets DRY_RUN=1
make invalidate-assets
```

This invalidates `/video-assets/*` and `/lesson-plan-pdfs/*` only. Uploads do not
automatically invalidate caches. Bucket creation, CloudFront configuration and API
deployment remain separate operations.

The command uses the YouTube Data API for the thumbnail and `yt-dlp` for subtitle track
discovery and downloads. This avoids the captions download endpoint, which can return a
403 even when a subtitle is published in Studio. Create a Google OAuth Desktop app client
for thumbnail lookup and put its ID and secret in the repository root `.env` file:

```dotenv
YOUTUBE_OAUTH_CLIENT_ID=your-client-id
YOUTUBE_OAUTH_CLIENT_SECRET=your-client-secret
```

For example, use the direct YouTube download path for an authorized video:

```bash
npm run pullyoutube -- tutorial-01a-register-account --video-source youtube
```

List available sections and inspect the files already extracted for a section. Sections with missing required files show a yellow count such as `(3/10 missing files)`; run `--list-section` on that section to see which videos and files are missing:

```bash
npm run pullyoutube -- --list-sections
npm run pullyoutube -- --list-section A-TutorialVideos
npm run pullyoutube -- --list-section B-UnderstandingTheLandscape
npm run pullyoutube -- --list-section C-EnvironmentalIndicators
npm run pullyoutube -- --list-section D-SocioeconomicIndicators
npm run pullyoutube -- --list-section E-IndigenousIndicators
npm run pullyoutube -- --list-section F-BowRiverWatershed360
npm run pullyoutube -- --list-section G-GuardiansOfIce
npm run pullyoutube -- --list-section H-StoneyVideos
npm run pullyoutube -- --list-section I-BlackfootVideos
npm run pullyoutube -- --list-section J-PointsOfInterest
npm run pullyoutube -- --list-section Z-OtherVideos
```

Export or fill missing assets for every video in a section:

```bash
npm run pullyoutube -- --section A-TutorialVideos --video-source youtube
```

To deliberately refresh every asset instead of keeping existing files, add
`--override` (also accepted as `--overwrite`):

```bash
npm run pullyoutube -- --section A-TutorialVideos --video-source youtube --override
```

You can also refresh only thumbnails or only captions for a video or an entire section.
These options replace the selected files while leaving the MP4 and other asset types
untouched:

```bash
# Replace only thumbnail.jpg for every video in the section
npm run pullyoutube -- --section F-BowRiverWatershed360 --refresh-thumbnails

# Replace only en.vtt and fr.vtt for every video in the section
npm run pullyoutube -- --section F-BowRiverWatershed360 --refresh-captions
```

For a single video, replace `--section <category-folder>` with its video ID. Thumbnail
refresh uses YouTube OAuth; caption refresh uses `yt-dlp` and the usual English/French
track preferences.

On the first run, the command opens Google authorization. A refresh token is stored outside the repository in
`~/.config/alberta-tomorrow-resources-api/youtube-oauth.json` (or under
`$XDG_CONFIG_HOME`). Keep the OAuth client secret and token private.

The direct MP4 download option requires `yt-dlp` and FFmpeg. Use the
`--video-source youtube` option shown above only for videos you are authorized to download.

The script does not read browser cookies. Direct video downloads may not be available
for every video; in that case, export the original through YouTube Studio and use `--mp4`.
For captions, it prefers published English subtitle tracks before English auto-captions.
For French, it tries French (Canada) first, then other French regional tracks; it only
requests the selected language codes, avoiding unrelated machine-translated variants.
Both languages are attempted before reporting failures. If no track can be downloaded,
completed assets and any successful captions are kept in the output folder. You can also
export captions from Studio and supply them as WebVTT files:

```bash
npm run pullyoutube -- tutorial-01a-register-account \
  --mp4 src/data/extracted-data/youtube-extracted-data/A-TutorialVideos/tutorial-01a-register-account/video.mp4 \
  --en-vtt ./source/en.vtt \
  --fr-vtt ./source/fr.vtt \
  --overwrite
```

Machine-translated variants are not used as fallback tracks. For one video, run the
command again to fill any missing files; existing files remain unchanged unless you
pass `--override`.

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
