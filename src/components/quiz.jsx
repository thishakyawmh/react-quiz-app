import { useState } from "react";
import Results from "./results";
import { createInitialAnswers } from "../utils/quiz";

const QUESTION_BANK = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
];

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(() => createInitialAnswers(QUESTION_BANK.length));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const question = QUESTION_BANK[currentQuestion];
  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectOption(option) {
    setUserAnswers((answers) => {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestion] = option;
      return updatedAnswers;
    });
  }

  function goToNext() {
    if (!selectedAnswer) return;

    if (currentQuestion === QUESTION_BANK.length - 1) {
      setIsQuizFinished(true);
      return;
    }

    setCurrentQuestion((index) => Math.min(index + 1, QUESTION_BANK.length - 1));
  }

  function goToPrevious() {
    setCurrentQuestion((index) => Math.max(index - 1, 0));
  }

  function restartQuiz() {
    setUserAnswers(createInitialAnswers(QUESTION_BANK.length));
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    return (
      <Results
        userAnswers={userAnswers}
        questionBank={QUESTION_BANK}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <section aria-labelledby="question-title">
      <p aria-live="polite">
        Question {currentQuestion + 1} of {QUESTION_BANK.length}
      </p>
      <progress
        value={currentQuestion + 1}
        max={QUESTION_BANK.length}
        aria-label="Quiz progress"
      />
      <h2 id="question-title">{question.question}</h2>

      <div role="group" aria-label="Answer options">
        {question.options.map((option) => (
          <button
            type="button"
            className={"option" + (selectedAnswer === option ? " selected" : "")}
            onClick={() => handleSelectOption(option)}
            aria-pressed={selectedAnswer === option}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>

      <p aria-live="polite">Selected option: {selectedAnswer ?? "None"}</p>

      <div className="nav-buttons">
        <button type="button" onClick={goToPrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button type="button" onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === QUESTION_BANK.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </section>
  );
}

export default Quiz;
