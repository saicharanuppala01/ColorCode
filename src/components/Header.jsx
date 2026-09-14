import ThemeToggle from "./ThemeToggle";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">

      <div>
        <h1>Color Code</h1>
        <p>Guess the hidden sequence of colors.</p>
      </div>

      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

    </header>
  );
}

export default Header;