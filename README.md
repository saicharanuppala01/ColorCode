# 🎨 Color Master

A React.js browser-based color guessing game inspired by the classic **Mastermind** concept.

The objective is simple: **guess the hidden sequence of four unique colors within 10 attempts**. After every guess, the game provides feedback to help you identify the correct sequence.

---

## 🚀 Live Demo

🔗 **Live Demo:** *Add your deployed project URL here*

---

## 📸 Preview

> Add a screenshot or GIF of your game here.

```text
Color Master

Guess the hidden sequence of colors.

        Secret Sequence
          ● ● ● ●

           Attempts
             3 / 10

          Your Guess
          🔴 🔵 🟣 🟢

        Choose a Color
        🔴 🔵 🟢 🟡 🟣

     [ Submit Guess ] [ New Game ]
```

---

## 🎯 Features

* 🎨 Hidden sequence containing **4 unique colors**
* 🌈 **5-color palette**: Red, Blue, Green, Yellow, and Purple
* 🔟 Maximum of **10 attempts**
* 💡 Instant feedback after every submitted guess
* 🔴 Correct color and correct position feedback
* ⚪ Correct color but wrong position feedback
* 🚫 Prevents duplicate colors in a single guess
* 🔄 New Game / Play Again functionality
* 🌙 Light and Dark mode
* 📱 Responsive design for desktop and mobile devices
* ♿ Accessible interactive controls
* ⚛️ Built using React functional components and Hooks
* 🧩 Modular component-based architecture
* 💻 Completely browser-based
* 🚫 No backend or database required

---

## 🕹️ How to Play

1. The game generates a hidden sequence of **4 unique colors**.
2. Select colors from the available palette.
3. Your selected colors appear under **Your Guess**.
4. You can click a selected color to remove it from your guess.
5. Select exactly **4 different colors**.
6. Click **Submit Guess**.
7. Use the feedback to improve your next guess.
8. You have a maximum of **10 attempts**.
9. Guess the complete sequence correctly to win.

---

## 💡 Feedback System

After submitting a guess, the game provides feedback using two indicators:

| Feedback     | Meaning                                     |
| ------------ | ------------------------------------------- |
| ● Filled dot | Correct color in the correct position       |
| ○ Hollow dot | Correct color but in the wrong position     |
| No dot       | Color is not present in the secret sequence |

The feedback algorithm also handles color matching safely without allowing duplicate colors in a guess.

---

## 🎨 Available Colors

The game currently uses five colors:

* 🔴 Red
* 🔵 Blue
* 🟢 Green
* 🟡 Yellow
* 🟣 Purple

The secret sequence contains **four different colors** selected from this palette.

---

## 🌓 Dark Mode

Color Master includes a light/dark mode toggle.

### Light Mode

Provides a clean, bright interface for normal daytime use.

### Dark Mode

Provides a darker interface designed for comfortable viewing in low-light environments.

The game functionality remains unchanged when switching between themes.

---

## 🛠️ Tech Stack

| Technology | Purpose                                |
| ---------- | -------------------------------------- |
| React.js   | User interface and application logic   |
| JavaScript | Game functionality                     |
| CSS        | Styling, animations, responsive design |
| Vite       | Development environment and build tool |
| HTML5      | Application structure                  |

---

## 📂 Project Structure

```text
color-master/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── ColorPalette.jsx
│   │   ├── Feedback.jsx
│   │   ├── GameControls.jsx
│   │   ├── GameInfo.jsx
│   │   ├── GuessBoard.jsx
│   │   ├── GuessHistory.jsx
│   │   ├── GuessRow.jsx
│   │   ├── Header.jsx
│   │   ├── SecretColors.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── utils/
│   │   └── gameLogic.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## 🧩 Component Architecture

The application is divided into reusable React components.

### `Header`

Displays the game title, description, and dark mode toggle.

### `GameInfo`

Displays the player's current number of attempts.

### `SecretColors`

Displays the hidden sequence and reveals it when the game ends.

### `GuessBoard`

Displays the player's current color selection and allows selected colors to be removed.

### `ColorPalette`

Displays the five available colors and prevents already selected colors from being chosen again.

### `GuessHistory`

Displays all previously submitted guesses.

### `GuessRow`

Represents an individual previous guess and its feedback.

### `Feedback`

Displays the feedback indicators for a submitted guess.

### `GameControls`

Provides the **Submit Guess**, **New Game**, and **Play Again** controls.

### `ThemeToggle`

Controls switching between light and dark mode.

### `gameLogic.js`

Contains the core game functionality including:

* Color definitions
* Secret sequence generation
* Feedback calculation
* Winning condition
* Game constants

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/color-master.git
```

### 2. Navigate into the project

```bash
cd color-master
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Vite will provide a local URL similar to:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🧠 Game Logic

The secret sequence is generated by randomly shuffling the available colors and selecting four unique colors.

When a player submits a guess:

1. The game first checks for colors in the correct position.
2. Remaining colors are then checked for correct colors in incorrect positions.
3. Feedback is generated based on these matches.
4. The guess is added to the guess history.
5. The game checks whether the guess matches the secret sequence.
6. The player wins if all four positions are correct.
7. The game ends after the tenth unsuccessful attempt.

---

## 📱 Responsive Design

The interface is designed to work across different screen sizes.

Supported layouts include:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile

The layout automatically adapts the game controls, color palette, guess history, and game container for smaller screens.

---

## 🔒 Privacy

Color Master does not require:

* User accounts
* Personal information
* A backend server
* A database
* External APIs

The game runs entirely in the browser.

---

## 🔮 Future Improvements

Possible future enhancements include:

* 🎵 Optional sound effects
* 🏆 Score and leaderboard system
* 📊 Game statistics
* ⏱️ Timed game mode
* 🎚️ Multiple difficulty levels
* 💾 Persistent game history
* 🌐 Online multiplayer
* 🏅 Achievements and challenges

---

## 📚 Learning Objectives

This project demonstrates practical usage of:

* React functional components
* React Hooks
* `useState`
* Event handling
* Conditional rendering
* Component communication through props
* Array manipulation
* Game-state management
* Algorithm implementation
* CSS animations
* Responsive web design
* Accessibility practices
* Modular project architecture

---

## 👨‍💻 Author

**Sai Charan Uppala**

GitHub: **https://github.com/saicharanuppala01**

---

## 📄 License

This project is open-source and available for educational and personal use.
