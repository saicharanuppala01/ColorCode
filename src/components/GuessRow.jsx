import Feedback from "./Feedback";

function GuessRow({ guess, feedback, attemptNumber }) {
  return (
    <div className="guess-row">

      <span className="attempt-number">
        {attemptNumber}
      </span>

      <div className="guess-colors">
        {guess.map((color) => (
          <div
            key={color.name}
            className={`history-color ${color.className}`}
          ></div>
        ))}
      </div>

      <Feedback feedback={feedback} />

    </div>
  );
}

export default GuessRow;