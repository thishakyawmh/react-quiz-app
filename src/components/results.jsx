import { calculateScore } from "../utils/quiz";

function Results({ userAnswers, questionBank, restartQuiz }) {
  const score = calculateScore(userAnswers, questionBank);

  return (
    <section aria-labelledby="results-title">
      <h2 id="results-title">Quiz Completed!</h2>
      <p>
        Your Score: {score}/{questionBank.length}
      </p>
      <p>
        {score === questionBank.length
          ? "Excellent work! You answered every question correctly."
          : "Good effort. Review the answers and try again."}
      </p>
      <button type="button" className="restart-button" onClick={restartQuiz}>
        Retake Quiz
      </button>
    </section>
  );
}

export default Results;
