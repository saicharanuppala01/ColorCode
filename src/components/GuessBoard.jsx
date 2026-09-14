function GuessBoard({
  currentGuess,
  onRemoveColor,
  sequenceLength,
}) {
  return (
    <section className="game-section">
      <h2>Your Guess</h2>

      <div className="color-slots">
        {Array.from({ length: sequenceLength }).map(
          (_, index) => {
            const color = currentGuess[index];

            if (color) {
              return (
                <button
                  key={color.name}
                  className={`guess-slot ${color.className}`}
                  aria-label={`Remove ${color.name}`}
                  onClick={() => onRemoveColor(index)}
                ></button>
              );
            }

            return (
              <div
                key={`empty-${index}`}
                className="guess-slot empty-slot"
              ></div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default GuessBoard;