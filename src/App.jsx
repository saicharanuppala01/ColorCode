import { useState } from "react";

import Header from "./components/Header";
import GameInfo from "./components/GameInfo";
import SecretColors from "./components/SecretColors";
import GuessBoard from "./components/GuessBoard";
import GuessHistory from "./components/GuessHistory";
import ColorPalette from "./components/ColorPalette";
import GameControls from "./components/GameControls";

import {
  generateSecret,
  calculateFeedback,
  isWinningGuess,
  SEQUENCE_LENGTH,
  MAX_ATTEMPTS,
} from "./utils/gameLogic";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [secret, setSecret] = useState(
    () => generateSecret()
  );

  const [currentGuess, setCurrentGuess] = useState([]);

  const [guesses, setGuesses] = useState([]);

  const [attempts, setAttempts] = useState(0);

  const [gameStatus, setGameStatus] = useState("playing");

  function handleColorSelect(color) {
    if (gameStatus !== "playing") {
      return;
    }

    if (currentGuess.length >= SEQUENCE_LENGTH) {
      return;
    }

    const alreadySelected = currentGuess.some(
      (selectedColor) =>
        selectedColor.name === color.name
    );

    if (alreadySelected) {
      return;
    }

    setCurrentGuess((previous) => [
      ...previous,
      color,
    ]);
  }

  function handleRemoveColor(index) {
    if (gameStatus !== "playing") {
      return;
    }

    setCurrentGuess((previous) =>
      previous.filter(
        (_, colorIndex) => colorIndex !== index
      )
    );
  }

  function handleSubmit() {
    if (gameStatus !== "playing") {
      return;
    }

    if (currentGuess.length !== SEQUENCE_LENGTH) {
      alert("Please select all 4 colors.");
      return;
    }

    const feedback = calculateFeedback(
      secret,
      currentGuess
    );

    const winningGuess = isWinningGuess(
      secret,
      currentGuess
    );

    const newAttempt = attempts + 1;

    const newGuess = {
      guess: currentGuess,
      feedback,
    };

    setGuesses((previous) => [
      ...previous,
      newGuess,
    ]);

    setAttempts(newAttempt);
    setCurrentGuess([]);

    if (winningGuess) {
      setGameStatus("won");
      return;
    }

    if (newAttempt >= MAX_ATTEMPTS) {
      setGameStatus("lost");
    }
  }

  function handleNewGame() {
    setSecret(generateSecret());
    setCurrentGuess([]);
    setGuesses([]);
    setAttempts(0);
    setGameStatus("playing");
  }

  return (
    <div
      className={`app ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <div className="game-container">

        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <GameInfo
          attempts={attempts}
          maxAttempts={MAX_ATTEMPTS}
        />

        <SecretColors
          secret={secret}
          gameStatus={gameStatus}
        />

        <GuessHistory
          guesses={guesses}
        />

        {gameStatus === "playing" && (
          <GuessBoard
            currentGuess={currentGuess}
            onRemoveColor={handleRemoveColor}
            sequenceLength={SEQUENCE_LENGTH}
          />
        )}

        {gameStatus === "playing" && (
          <ColorPalette
            currentGuess={currentGuess}
            onColorSelect={handleColorSelect}
          />
        )}

        <GameControls
          onSubmit={handleSubmit}
          onNewGame={handleNewGame}
          gameStatus={gameStatus}
        />

        {gameStatus === "won" && (
          <div className="result-message win-message">
            <div className="result-icon">
              🎉
            </div>

            <h2>
              You have guessed correctly!
            </h2>

            <p>
              Great job! You found the secret sequence.
            </p>
          </div>
        )}

        {gameStatus === "lost" && (
          <div className="result-message lose-message">
            <div className="result-icon">
              😔
            </div>

            <h2>Game Over!</h2>

            <p>
              You used all 10 attempts.
            </p>

            <p>
              The correct sequence is shown above.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;