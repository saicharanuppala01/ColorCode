function SecretColors({ secret, gameStatus }) {
  return (
    <section className="game-section">

      <h2>Secret Sequence</h2>

      <div className="color-slots">

        {secret.map((color) => (
          <div
            key={color.name}
            className={`secret-slot ${
              gameStatus !== "playing"
                ? color.className
                : ""
            }`}
          ></div>
        ))}

      </div>

    </section>
  );
}

export default SecretColors;