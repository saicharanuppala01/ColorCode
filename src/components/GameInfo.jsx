function GameInfo({ attempts, maxAttempts }) {
  return (
    <section className="game-info">
      <div className="info-card">
        <span>Attempts</span>
        <strong>
          {attempts} / {maxAttempts}
        </strong>
      </div>
    </section>
  );
}

export default GameInfo;