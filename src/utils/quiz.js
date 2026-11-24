export function createInitialAnswers(questionCount) {
  if (!Number.isInteger(questionCount) || questionCount < 0) {
    throw new TypeError("Question count must be a non-negative integer");
  }
  return Array(questionCount).fill(null);
}

export function calculateScore(answers, questions) {
  if (!Array.isArray(answers) || !Array.isArray(questions)) {
    throw new TypeError("Answers and questions must be arrays");
  }

  return questions.reduce((score, question, index) => (
    answers[index] === question.answer ? score + 1 : score
  ), 0);
}
