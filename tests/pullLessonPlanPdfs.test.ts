import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { pathToFileURL } from "node:url";
import { downloadPdf, getExportUrl, getPdfFiles, loadSectionLessons } from "../src/data/scripts/pullLessonPlanPdfs.js";
import { getLessonPlanAssetPaths, getLessonPlanPdfFileNames } from "../src/data/core/assetUrls.js";
import { normalizeFiles } from "../src/data/scripts/generateLessonPlans.js";
import { findTypeScriptFiles } from "../src/data/scripts/utils.js";
import type { GeneratedLessonFile, GeneratedLessonPlan, LessonPlanSource } from "../src/data/core/lessonPlanTypes.js";
import { goingGoingGoingGoneClimateChangeLessonPlan } from "../src/data/resource-metadata/lesson-plans/A_ClimateChangeLessons/01-GoingGoingGoingGoneClimateChange.js";

test("selects exactly six files with distinct language and type names", () => {
  const files = getPdfFiles(goingGoingGoingGoneClimateChangeLessonPlan);
  assert.deepEqual(files.map((file) => file.fileName), [
    "en-lesson-plan.pdf", "en-student-worksheet.pdf", "en-presentation-slides.pdf",
    "fr-lesson-plan.pdf", "fr-student-worksheet.pdf", "fr-presentation-slides.pdf",
  ]);
  assert.equal(new Set(files.map((file) => file.url)).size, 6);
});

test("discovers all climate lessons and all localized files, including repeated file types", async () => {
  const lessons = await loadSectionLessons();
  assert.deepEqual(lessons.map((lesson) => lesson.id), [
    "climate-01-going-going-going-gone",
    "climate-02-climate-change-in-alberta-mild-med-hot",
    "climate-03-water-quality-climate-change-and-albertas-glaciers",
    "climate-04-science-6-climate-change-in-alberta",
  ]);
  assert.deepEqual(lessons.map((lesson) => getPdfFiles(lesson).length), [6, 6, 6, 8]);
  assert.ok(getPdfFiles(lessons[2]).some((file) => file.fileName === "en-other-file-type.pdf"));
  const lastLesson = getPdfFiles(lessons[3]);
  assert.ok(lastLesson.some((file) => file.fileName === "en-presentation-slides-2.pdf"));
  assert.ok(lastLesson.some((file) => file.fileName === "fr-presentation-slides-2.pdf"));
  assert.equal(new Set(lastLesson.map((file) => file.fileName)).size, 8);
  for (const lesson of lessons) {
    for (const file of getPdfFiles(lesson)) assert.match(getExportUrl(file.url), /^https:\/\/docs\.google\.com\//);
  }
});

test("asset paths match extraction filenames and reject invalid file types", () => {
  const lesson = goingGoingGoingGoneClimateChangeLessonPlan;
  const assets = getLessonPlanAssetPaths(lesson.themeId, lesson.id);
  assert.equal(assets.file("en-lesson-plan.pdf"), `https://d2qcvmovr4fv.cloudfront.net/lesson-plans/A_ClimateChangeLessons/${lesson.id}/en-lesson-plan.pdf`);
  assert.throws(() => getLessonPlanPdfFileNames("en", [{ fileType: "../unsafe" }]), /Unsupported lesson file type/);
  assert.throws(() => assets.file("../unsafe"));
  assert.throws(() => getLessonPlanAssetPaths("unknown", lesson.id));
});

test("duplicate file types are numbered independently per language and type", () => {
  const lesson = goingGoingGoingGoneClimateChangeLessonPlan;
  const duplicate = { en: [lesson.files.en[0], lesson.files.en[1], lesson.files.en[0], lesson.files.en[0]], fr: [lesson.files.fr[0], lesson.files.fr[0]] };
  assert.deepEqual(getPdfFiles({ ...lesson, files: duplicate }).map((file) => file.fileName), [
    "en-lesson-plan.pdf", "en-student-worksheet.pdf", "en-lesson-plan-2.pdf", "en-lesson-plan-3.pdf",
    "fr-lesson-plan.pdf", "fr-lesson-plan-2.pdf",
  ]);
  const normalized = normalizeFiles(duplicate, lesson.themeId, lesson.id);
  assert.ok(normalized.en[2].pdfUrl.endsWith("/en-lesson-plan-2.pdf"));
  assert.ok(normalized.en[3].pdfUrl.endsWith("/en-lesson-plan-3.pdf"));
  assert.ok(normalized.fr[1].pdfUrl.endsWith("/fr-lesson-plan-2.pdf"));
});

test("generated files and PDF paths agree with every authored lesson", async () => {
  const root = path.resolve("src/data/resource-metadata/lesson-plans");
  const paths = await findTypeScriptFiles(root);
  const generated: GeneratedLessonPlan[] = JSON.parse(await readFile("src/data/generated/lessonPlans.json", "utf8"));
  const byId = new Map(generated.map((lesson) => [lesson.id, lesson]));
  assert.equal(byId.size, paths.length);
  for (const filePath of paths) {
    const exports: Record<string, LessonPlanSource> = await import(pathToFileURL(filePath).href);
    const lesson = Object.values(exports)[0];
    const output = byId.get(lesson.id);
    assert.ok(output, `Missing generated lesson ${lesson.id}`);
    const assets = getLessonPlanAssetPaths(lesson.themeId, lesson.id);
    assert.deepEqual(normalizeFiles(lesson.files, lesson.themeId, lesson.id), output.files);
    const localFiles = getPdfFiles(lesson);
    for (const language of ["en", "fr"] as const) {
      const names = getLessonPlanPdfFileNames(language, lesson.files[language]);
      for (const [index, file] of lesson.files[language].entries()) {
        const name = names[index];
        assert.ok(localFiles.some((local) => local.fileName === name && local.url === file.url));
        const generatedFile: GeneratedLessonFile = output.files[language][index];
        assert.equal(generatedFile.pdfUrl, assets.file(name));
        assert.ok(generatedFile.pdfUrl.endsWith(`/${path.basename(path.dirname(filePath))}/${lesson.id}/${name}`));
        assert.equal("assetName" in generatedFile, false);
      }
    }
  }
});

test("constructs PDF export URLs for Docs and Slides and rejects unsupported URLs", () => {
  assert.equal(
    getExportUrl("https://docs.google.com/document/d/abc-123/edit?usp=sharing"),
    "https://docs.google.com/document/d/abc-123/export?format=pdf",
  );
  assert.equal(
    getExportUrl("https://docs.google.com/presentation/d/abc_123"),
    "https://docs.google.com/presentation/d/abc_123/export?format=pdf",
  );
  for (const url of ["https://example.com/document/d/abc", "https://docs.google.com/spreadsheets/d/abc", "not a url"]) {
    assert.throws(() => getExportUrl(url));
  }
});

test("saves PDFs, preserves existing files, and replaces them only on override", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "lesson-pdf-test-"));
  const file = { fileName: "en-lesson-plan.pdf", url: "https://docs.google.com/document/d/abc/edit" };
  const fetchPdf: typeof fetch = async () => new Response("%PDF-new", { headers: { "content-type": "application/pdf" } });
  try {
    assert.equal(await downloadPdf(file, dir, false, fetchPdf), "saved");
    const output = path.join(dir, file.fileName);
    assert.equal(await readFile(output, "utf8"), "%PDF-new");
    await writeFile(output, "manual");
    assert.equal(await downloadPdf(file, dir, false, async () => { throw new Error("must not fetch"); }), "skipped");
    assert.equal(await readFile(output, "utf8"), "manual");
    assert.equal(await downloadPdf(file, dir, true, fetchPdf), "saved");
    assert.equal(await readFile(output, "utf8"), "%PDF-new");
    assert.deepEqual(await readdir(dir), [file.fileName]);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test("rejects unsuccessful and non-PDF exports without replacing existing files", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "lesson-pdf-test-"));
  const file = { fileName: "en-lesson-plan.pdf", url: "https://docs.google.com/document/d/abc/edit" };
  const output = path.join(dir, file.fileName);
  try {
    await writeFile(output, "manual");
    const responses = [
      new Response("denied", { status: 403 }),
      new Response("<html>sign in</html>", { headers: { "content-type": "text/html" } }),
      new Response("not a pdf", { headers: { "content-type": "application/pdf" } }),
    ];
    for (const response of responses) {
      await assert.rejects(downloadPdf(file, dir, true, async () => response));
      assert.equal(await readFile(output, "utf8"), "manual");
    }
    assert.deepEqual(await readdir(dir), [file.fileName]);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
