export function Options({ question, answerActions, answer }) {
  const hasAnswered = answer !== null;

  return (
    <>
      <div className="options">
        {question.options.map((option) => (
          <button
            className={`btn btn-option ${option === answer ? "answer" : ""} ${
              hasAnswered
                ? option === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => answerActions.defineAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
