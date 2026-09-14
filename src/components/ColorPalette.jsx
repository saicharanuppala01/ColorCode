import { COLORS } from "../utils/gameLogic";

function ColorPalette({
  currentGuess,
  onColorSelect,
}) {
  return (
    <section className="game-section">

      <h2>Choose a Color</h2>

      <div className="color-palette">

        {COLORS.map((color) => {
          const selected = currentGuess.some(
            (selectedColor) =>
              selectedColor.name === color.name
          );

          return (
            <button
              key={color.name}
              className={`color-button ${color.className} ${
                selected ? "selected" : ""
              }`}
              aria-label={`Select ${color.name}`}
              onClick={() => onColorSelect(color)}
              disabled={selected}
            >
            </button>
          );
        })}

      </div>

    </section>
  );
}

export default ColorPalette;