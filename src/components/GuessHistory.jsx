import GuessRow from "./GuessRow";

function GuessHistory({ guesses }) {
  if (guesses.length === 0) {
    return null;
  }

  return (
    <section className="game-section">

      <h2>Previous Guesses</h2>

      <div className="guess-history">

        {guesses.map((item, index) => (
          <GuessRow
            key={index}
            guess={item.guess}
            feedback={item.feedback}
            attemptNumber={index + 1}
          />
        ))}

      </div>

    </section>
  );
}

export default GuessHistory;