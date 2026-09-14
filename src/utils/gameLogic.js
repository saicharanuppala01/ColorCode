export const COLORS = [
  {
    name: "Red",
    className: "red",
  },
  {
    name: "Blue",
    className: "blue",
  },
  {
    name: "Green",
    className: "green",
  },
  {
    name: "Yellow",
    className: "yellow",
  },
  {
    name: "Purple",
    className: "purple",
  },
];

export const SEQUENCE_LENGTH = 4;
export const MAX_ATTEMPTS = 10;

export function generateSecret() {
  const shuffled = [...COLORS].sort(
    () => Math.random() - 0.5
  );

  return shuffled.slice(0, SEQUENCE_LENGTH);
}

export function calculateFeedback(secret, guess) {
  const feedback = [];
  const matchedSecret = new Array(secret.length).fill(false);
  const matchedGuess = new Array(guess.length).fill(false);

  for (let i = 0; i < guess.length; i++) {
    if (guess[i].name === secret[i].name) {
      feedback.push({
        type: "exact",
      });

      matchedSecret[i] = true;
      matchedGuess[i] = true;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (matchedGuess[i]) {
      continue;
    }

    for (let j = 0; j < secret.length; j++) {
      if (
        !matchedSecret[j] &&
        guess[i].name === secret[j].name
      ) {
        feedback.push({
          type: "wrong-position",
        });

        matchedSecret[j] = true;
        matchedGuess[i] = true;

        break;
      }
    }
  }

  return feedback;
}

export function isWinningGuess(secret, guess) {
  if (secret.length !== guess.length) {
    return false;
  }

  return secret.every(
    (color, index) =>
      color.name === guess[index].name
  );
}