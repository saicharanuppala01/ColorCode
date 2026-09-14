function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className={`theme-toggle ${darkMode ? "dark" : ""}`}
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
      aria-pressed={darkMode}
    >
      <span className="toggle-icon">
        {darkMode ? "☀️" : "🌙"}
      </span>

      <span className="toggle-circle"></span>
    </button>
  );
}

export default ThemeToggle;