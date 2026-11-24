import test from "node:test";
import assert from "node:assert/strict";
import { calculateScore, createInitialAnswers } from "../src/utils/quiz.js";

const questions = [
  { question: "A", answer: "yes" },
  { question: "B", answer: "no" },
  { question: "C", answer: "maybe" },
];

test("creates an empty answer slot for every question", () => {
  assert.deepEqual(createInitialAnswers(3), [null, null, null]);
});

test("rejects invalid question counts", () => {
  assert.throws(() => createInitialAnswers(-1), TypeError);
  assert.throws(() => createInitialAnswers(1.5), TypeError);
});

test("calculates a full score", () => {
  assert.equal(calculateScore(["yes", "no", "maybe"], questions), 3);
});

test("calculates a partial score and ignores unanswered questions", () => {
  assert.equal(calculateScore(["yes", null, "wrong"], questions), 1);
});

test("returns zero when no answers are correct", () => {
  assert.equal(calculateScore([], questions), 0);
});

test("rejects non-array inputs", () => {
  assert.throws(() => calculateScore(null, questions), TypeError);
});
