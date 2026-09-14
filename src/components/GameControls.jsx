function GameControls({
  onSubmit,
  onNewGame,
  gameStatus,
}) {
  return (
    <div className="game-controls">

      {gameStatus === "playing" && (
        <button
          className="submit-button"
          onClick={onSubmit}
        >
          Submit Guess
        </button>
      )}

      <button
        className="new-game-button"
        onClick={onNewGame}
      >
        New Game
      </button>

    </div>
  );
}

export default GameControls;