import assert from "node:assert/strict";
import { test } from "node:test";
import {
  normalizeVideoTitle,
  videoDurationsMatch,
  videoTitlesMatch,
} from "../src/data/scripts/auditResourceLinks.js";

test("normalizes punctuation, case, accents, and whitespace in video titles", () => {
  assert.equal(
    normalizeVideoTitle("  Un aperçu: d’AT & fonctions  "),
    "un apercu d at and fonctions",
  );
});

test("accepts exact and branded-prefix matches but rejects different video titles", () => {
  assert.equal(videoTitlesMatch("Registering for an Account", "User Tutorial: Registering for an Account"), true);
  assert.equal(videoTitlesMatch("Climate Change", "CLIMATE CHANGE"), true);
  assert.equal(videoTitlesMatch("Climate Change", "A Different Future for Alberta"), false);
});

test("compares video durations within the configured tolerance", () => {
  assert.equal(videoDurationsMatch(98, 97.570249), true);
  assert.equal(videoDurationsMatch(98, 95, 2), false);
  assert.equal(videoDurationsMatch(Number.NaN, 95), false);
});
