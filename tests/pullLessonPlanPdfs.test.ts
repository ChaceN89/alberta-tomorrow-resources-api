import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import { downloadPdf, getExportUrl, getPdfFiles, getSections, loadSectionLessons } from "../src/data/scripts/pullLessonPlanPdfs.js";
import { getLessonPlanAssetPaths, getLessonPlanPdfFileNames } from "../src/data/core/assetUrls.js";
import { normalizeFiles } from "../src/data/scripts/generateLessonPlans.js";
import { findTypeScriptFiles } from "../src/data/scripts/utils.js";
import type { GeneratedLessonFile, GeneratedLessonPlan, LessonPlanSource } from "../src/data/core/lessonPlanTypes.js";
import { goingGoingGoingGoneClimateChangeLessonPlan } from "../src/data/resource-metadata/lesson-plans/A_ClimateChangeLessons/01-GoingGoingGoingGoneClimateChange.js";

test("selects exactly six files with localized language prefixes and English title slugs", () => {
  const files = getPdfFiles(goingGoingGoingGoneClimateChangeLessonPlan);
  assert.deepEqual(files.map((file) => file.fileName), [
    "en-lesson_plan-going_going_going_gone_lesson_plan.pdf",
    "en-student_worksheet-going_going_going_gone_student_worksheet.pdf",
    "en-presentation_slides-climate_change_truth_and_misconceptions_presentation_slides.pdf",
    "fr-lesson_plan-going_going_going_gone_lesson_plan.pdf",
    "fr-student_worksheet-going_going_going_gone_student_worksheet.pdf",
    "fr-presentation_slides-climate_change_truth_and_misconceptions_presentation_slides.pdf",
  ]);
  assert.equal(new Set(files.map((file) => file.url)).size, 6);
});

test("discovers all climate lessons and all localized files, including repeated file types", async () => {
  const lessons = await loadSectionLessons();
  assert.deepEqual(lessons.map((lesson) => lesson.id), [
    "climate-01-going-going-going-gone",
    "climate-02-climate-change-in-alberta-mild-med-hot",
    "web-02y-water-quality-climate-change-and-albertas-glaciers",
    "climate-04-science-6-climate-change-in-alberta",
  ]);
  assert.deepEqual(lessons.map((lesson) => getPdfFiles(lesson).length), [6, 6, 6, 8]);
  assert.ok(getPdfFiles(lessons[2]).some((file) =>
    file.fileName.startsWith("en-other_file_type-")));
  const lastLesson = getPdfFiles(lessons[3]);
  assert.ok(lastLesson.some((file) =>
    file.fileName === "en-presentation_slides-climate_change_truth_and_misconceptions_presentation_slides.pdf"));
  assert.ok(lastLesson.some((file) =>
    file.fileName === "fr-presentation_slides-climate_change_truth_and_misconceptions_presentation_slides.pdf"));
  assert.equal(new Set(lastLesson.map((file) => file.fileName)).size, 8);
  for (const lesson of lessons) {
    for (const file of getPdfFiles(lesson)) assert.match(getExportUrl(file.url), /^https:\/\/docs\.google\.com\//);
  }
});

test("asset paths match extraction filenames and reject invalid file types", () => {
  const lesson = goingGoingGoingGoneClimateChangeLessonPlan;
  const assets = getLessonPlanAssetPaths(lesson.themeId, lesson.id);
  assert.equal(
    assets.file("en-lesson_plan-going_going_going_gone_lesson_plan.pdf"),
    `https://d2qcvmovr4fv.cloudfront.net/lesson-plan-pdfs/A_ClimateChangeLessons/${lesson.id}/en-lesson_plan-going_going_going_gone_lesson_plan.pdf`,
  );
  assert.throws(
    () => getLessonPlanPdfFileNames("en", [{ fileType: "../unsafe", title: "Unsafe" }]),
    /Unsupported lesson file type/,
  );
  assert.throws(() => assets.file("../unsafe"));
  assert.throws(() => getLessonPlanAssetPaths("unknown", lesson.id));
});

test("duplicate title slugs within one type receive numeric suffixes", () => {
  const lesson = goingGoingGoingGoneClimateChangeLessonPlan;
  const duplicate = {
    en: [lesson.files.en[0], lesson.files.en[1], lesson.files.en[0], lesson.files.en[0]],
    fr: [lesson.files.fr[0], lesson.files.fr[1], lesson.files.fr[0], lesson.files.fr[0]],
  };
  assert.deepEqual(getPdfFiles({ ...lesson, files: duplicate }).map((file) => file.fileName), [
    "en-lesson_plan-going_going_going_gone_lesson_plan.pdf",
    "en-student_worksheet-going_going_going_gone_student_worksheet.pdf",
    "en-lesson_plan-going_going_going_gone_lesson_plan-2.pdf",
    "en-lesson_plan-going_going_going_gone_lesson_plan-3.pdf",
    "fr-lesson_plan-going_going_going_gone_lesson_plan.pdf",
    "fr-student_worksheet-going_going_going_gone_student_worksheet.pdf",
    "fr-lesson_plan-going_going_going_gone_lesson_plan-2.pdf",
    "fr-lesson_plan-going_going_going_gone_lesson_plan-3.pdf",
  ]);
  const normalized = normalizeFiles(duplicate, lesson.themeId, lesson.id);
  assert.ok(normalized.en[2].pdfUrl.endsWith(
    "/en-lesson_plan-going_going_going_gone_lesson_plan-2.pdf",
  ));
  assert.ok(normalized.en[3].pdfUrl.endsWith(
    "/en-lesson_plan-going_going_going_gone_lesson_plan-3.pdf",
  ));
  assert.ok(normalized.fr[1].pdfUrl.endsWith(
    "/fr-student_worksheet-going_going_going_gone_student_worksheet.pdf",
  ));
  assert.ok(normalized.fr[2].pdfUrl.endsWith(
    "/fr-lesson_plan-going_going_going_gone_lesson_plan-2.pdf",
  ));
  assert.ok(normalized.fr[3].pdfUrl.endsWith(
    "/fr-lesson_plan-going_going_going_gone_lesson_plan-3.pdf",
  ));
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
      const names = getLessonPlanPdfFileNames(
        language,
        lesson.files[language],
        lesson.files.en,
      );
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
    getExportUrl("https://drive.google.com/file/d/abc_123/view?resourcekey=key"),
    "https://drive.google.com/uc?export=download&id=abc_123&resourcekey=key",
  );
  assert.equal(
    getExportUrl("https://docs.google.com/presentation/d/abc_123"),
    "https://docs.google.com/presentation/d/abc_123/export?format=pdf",
  );
  for (const url of ["https://example.com/document/d/abc", "https://docs.google.com/spreadsheets/d/abc", "not a url"]) {
    assert.throws(() => getExportUrl(url));
  }
});

test("CLI lists all sections, selects non-climate lessons, and rejects conflicting selectors", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "lesson-pdf-list-test-"));
  const run = (...args: string[]) => spawnSync(process.execPath, [
    "--import", "tsx", "src/data/scripts/pullLessonPlanPdfs.ts", ...args, "--out-dir", dir,
  ], { encoding: "utf8" });
  try {
    const sections = await getSections();
    assert.equal(sections.length, 7);
    const all = run("--all", "--list");
    assert.equal(all.status, 0, all.stderr);
    assert.equal((all.stdout.match(/\nLesson: /g) ?? []).length, 37);
    assert.equal((all.stdout.match(/\.pdf: missing/g) ?? []).length, 162);
    for (const section of sections) assert.ok(all.stdout.includes(`/${section}/`));
    const section = run("--section", "B_GlaciersAndWatershedsLessons", "--list");
    assert.equal(section.status, 0, section.stderr);
    assert.equal((section.stdout.match(/\nLesson: /g) ?? []).length, 5);
    const lessons = await loadSectionLessons(path.resolve("src/data/resource-metadata/lesson-plans/B_GlaciersAndWatershedsLessons"));
    const single = run(lessons[0].id, "--list");
    assert.equal(single.status, 0, single.stderr);
    assert.equal((single.stdout.match(/\nLesson: /g) ?? []).length, 1);
    for (const args of [
      ["--all", "--section", "A_ClimateChangeLessons"],
      ["--all", lessons[0].id],
      ["--section", "../escape"],
      ["--all", "--list", "--override"],
    ]) assert.notEqual(run(...args).status, 0);
    assert.deepEqual(await readdir(dir), []);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test("Drive downloads require PDF bytes even with a generic binary content type", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "lesson-pdf-drive-test-"));
  const file = { fileName: "en-student-worksheet.pdf", url: "https://drive.google.com/file/d/abc" };
  try {
    assert.equal(await downloadPdf(file, dir, false, async () =>
      new Response("%PDF-test", { headers: { "content-type": "application/octet-stream" } })), "saved");
    await assert.rejects(downloadPdf(file, dir, true, async () =>
      new Response("image", { headers: { "content-type": "image/png" } })), /non-PDF Drive files/);
    await assert.rejects(downloadPdf(file, dir, true, async () =>
      new Response("not a PDF", { headers: { "content-type": "application/octet-stream" } })), /not a valid PDF/);
    assert.equal(await readFile(path.join(dir, file.fileName), "utf8"), "%PDF-test");
  } finally {
    await rm(dir, { recursive: true, force: true });
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
