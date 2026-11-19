import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { chmod, copyFile, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";

test("Makefile scopes asset uploads and invalidation without calling AWS", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "asset-upload-test-"));
  const videos = "src/data/extracted-data/youtube-extracted-data";
  const pdfs = "src/data/extracted-data/lesson-plan-extracted-data";
  try {
    await copyFile("Makefile", path.join(directory, "Makefile"));
    await writeFile(path.join(directory, ".env"), 'BUCKET_NAME="test-resource-bucket"\nDISTRIBUTION_ID=api-distribution\n');
    const aws = path.join(directory, "aws-stub");
    await writeFile(aws, '#!/usr/bin/env node\nif (process.env.PROFILE && (process.env.AWS_PROFILE !== process.env.PROFILE || ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "AWS_SECURITY_TOKEN"].some(key => process.env[key] !== undefined))) { console.error("Profile did not override environment credentials"); process.exit(1); }\nconsole.log(JSON.stringify(process.argv.slice(2)));\n');
    await chmod(aws, 0o755);
    await mkdir(path.join(directory, videos, "A-TutorialVideos", "tutorial-01a-register-account"), { recursive: true });
    await mkdir(path.join(directory, pdfs, "A_ClimateChangeLessons", "climate-04-science-6-climate-change-in-alberta"), { recursive: true });
    await writeFile(path.join(directory, videos, "A-TutorialVideos", "tutorial-01a-register-account", "thumbnail.jpg"), "image");
    await writeFile(path.join(directory, pdfs, "A_ClimateChangeLessons", "climate-04-science-6-climate-change-in-alberta", "en-presentation-slides-2.pdf"), "%PDF-test");

    const run = (...args: string[]) => spawnSync("make", ["--no-print-directory", `AWS=${aws}`, ...args], {
      cwd: directory,
      encoding: "utf8",
      env: { ...process.env, BUCKET_NAME: "", ASSETS_DISTRIBUTION_ID: "", SECTION: "", ID: "", FILE: "", PROFILE: "", DRY_RUN: "0" },
    });
    const calls = (stdout: string): string[][] => stdout.trim().split("\n").filter((line) => line.startsWith("[")).map((line) => JSON.parse(line));

    const all = run("upload-assets", "DRY_RUN=1");
    assert.equal(all.status, 0, all.stderr);
    const uploads = calls(all.stdout);
    assert.equal(uploads.length, 2);
    assert.deepEqual(uploads[0].slice(0, 4), ["s3", "sync", `${videos}/`, "s3://test-resource-bucket/video-assets/"]);
    assert.deepEqual(uploads[1].slice(0, 4), ["s3", "sync", `${pdfs}/`, "s3://test-resource-bucket/lesson-plan-pdfs/"]);
    for (const args of uploads) {
      assert.ok(args.includes("--dryrun"));
      assert.ok(args.includes("--no-follow-symlinks"));
      assert.equal(args.includes("--delete"), false);
    }
    assert.ok(uploads[1].includes("en-presentation-slides-[0-9]*.pdf"));
    assert.equal(uploads[1].includes("*.pdf"), false);

    const section = run("upload-pdfs", "SECTION=A_ClimateChangeLessons");
    assert.equal(section.status, 0, section.stderr);
    assert.equal(calls(section.stdout)[0][3], "s3://test-resource-bucket/lesson-plan-pdfs/A_ClimateChangeLessons/");

    const single = run("upload-videos", "SECTION=A-TutorialVideos", "ID=tutorial-01a-register-account", "FILE=thumbnail.jpg");
    assert.equal(single.status, 0, single.stderr);
    assert.deepEqual(calls(single.stdout)[0].slice(0, 4), [
      "s3", "cp", `${videos}/A-TutorialVideos/tutorial-01a-register-account/thumbnail.jpg`,
      "s3://test-resource-bucket/video-assets/A-TutorialVideos/tutorial-01a-register-account/thumbnail.jpg",
    ]);

    const pdf = run("upload-pdfs", "SECTION=A_ClimateChangeLessons", "ID=climate-04-science-6-climate-change-in-alberta", "FILE=en-presentation-slides-2.pdf");
    assert.equal(pdf.status, 0, pdf.stderr);
    assert.equal(calls(pdf.stdout)[0][1], "cp");

    await writeFile(path.join(directory, ".env"), "BUCKET_NAME=test-resource-bucket\nAWS_ACCESS_KEY_ID=test-key\nAWS_SECRET_ACCESS_KEY=test-secret\nAWS_SESSION_TOKEN=test-token\nAWS_SECURITY_TOKEN=test-legacy-token\n");
    const profile = run("upload-assets", "PROFILE=test-profile", "DRY_RUN=1");
    assert.equal(profile.status, 0, profile.stderr);
    assert.equal(calls(profile.stdout).length, 2);

    for (const args of [
      ["upload-videos", "ID=missing-section"],
      ["upload-videos", "SECTION=../escape"],
      ["upload-videos", "SECTION=missing"],
      ["upload-assets", "SECTION=A-TutorialVideos"],
      ["upload-videos", "SECTION=A-TutorialVideos", "ID=tutorial-01a-register-account", "FILE=missing.mp4"],
      ["invalidate-assets"],
    ]) {
      const result = run(...args);
      assert.notEqual(result.status, 0, args.join(" "));
      assert.equal(calls(result.stdout).length, 0);
    }

    await writeFile(path.join(directory, ".env"), "BUCKET_NAME=test-resource-bucket\nDISTRIBUTION_ID=api-distribution\nASSETS_DISTRIBUTION_ID=asset-distribution\n");
    const preview = run("invalidate-assets", "DRY_RUN=1");
    assert.equal(preview.status, 0, preview.stderr);
    assert.equal(calls(preview.stdout).length, 0);
    const invalidate = run("invalidate-assets");
    assert.equal(invalidate.status, 0, invalidate.stderr);
    assert.deepEqual(calls(invalidate.stdout)[0], [
      "cloudfront", "create-invalidation", "--distribution-id", "asset-distribution",
      "--paths", "/video-assets/*", "/lesson-plan-pdfs/*",
    ]);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
