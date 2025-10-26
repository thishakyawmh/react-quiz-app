function Results({ userAnswers, questionBank, restartQuiz }) {
  function getScore() {
    let finalscore = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalscore++;
      }
    });
    return finalscore;
  }

  const score = getScore();

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score}/{questionBank.length}
      </p>
      <button className="restart-button" onClick={restartQuiz}>
        Retake Quiz
      </button>
    </div>
  );
}

export default Results;
