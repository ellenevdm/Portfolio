// hangmanReducer.js
export const initialState = {
  word: "",
  guesses: [],
  incorrectGuesses: 0,
  incorrectLetters: [],
  disabledButtons: [],
  maskedWord: "",
  gameOver: false,
  result: null,
};

export const hangmanReducer = (state, action) => {
  switch (action.type) {
    case "SETUP_GAME":
      return {
        ...initialState,
        word: action.payload.word,
        maskedWord: action.payload.word.replace(/./g, "_"),
      };
    case "MAKE_GUESS":
      const { letter } = action.payload;
      const newGuesses = [...state.guesses, letter];
      const isCorrect = state.word.includes(letter);
      const newIncorrectGuesses = isCorrect
        ? state.incorrectGuesses
        : state.incorrectGuesses + 1;
      const newMaskedWord = state.word
        .split("")
        .map((l) => (newGuesses.includes(l) ? l : "_"))
        .join("");

      return {
        ...state,
        guesses: newGuesses,
        incorrectGuesses: newIncorrectGuesses,
        incorrectLetters: isCorrect
          ? state.incorrectLetters
          : [...state.incorrectLetters, letter],
        disabledButtons: [...state.disabledButtons, letter],
        maskedWord: newMaskedWord,
        gameOver: newIncorrectGuesses >= 6 || !newMaskedWord.includes("_"),
        result:
          newIncorrectGuesses >= 6
            ? "lost"
            : !newMaskedWord.includes("_")
            ? "won"
            : null,
      };
    default:
      return state;
  }
};
