import "./hangman.scss";

import { hangmanReducer, initialState } from "./hangmanReducer";
import { useCallback, useEffect, useReducer } from "react";

import { HANGMANDATA } from "../../data/data";
import HangmanFigure from "./HangmanFigure";
import Button from "../UI/Button";

export default function Hangman() {
  const [state, dispatch] = useReducer(hangmanReducer, initialState);

  const maxGuesses = 6;

  const initializeGame = useCallback(() => {
    const newWord =
      HANGMANDATA.WORDS[Math.floor(Math.random() * HANGMANDATA.WORDS.length)];
    dispatch({ type: "SETUP_GAME", payload: { word: newWord } });
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const makeGuess = useCallback(
    (letter) => {
      if (!state.guesses.includes(letter) && !state.gameOver) {
        dispatch({ type: "MAKE_GUESS", payload: { letter } });
      }
    },
    [state.guesses, state.gameOver]
  );

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        makeGuess(key);
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [makeGuess]);

  return (
    <div className="hangman home-compnt">
      <h2>Hangman Game</h2>

      <div className="game">
        <HangmanFigure
          className="figure"
          incorrectGuesses={state.incorrectGuesses}
        />

        <div className="game-state">
          <h3 className="word">
            {state.gameOver ? state.word : state.maskedWord}
          </h3>
          <h3>Incorrect Letters</h3>
          <span>
            {" "}
            {state.incorrectGuesses} / {maxGuesses}{" "}
          </span>
          <ul>
            {state.incorrectLetters.map((letter, index) => (
              <li key={index}>{letter}</li>
            ))}
          </ul>
        </div>
      </div>
      {state.gameOver && (
        <div className={`game-over ${state.result === "won" ? "won" : "lost"}`}>
          <p className="result">
            {" "}
            Game Over! {state.result === "won" ? "You Won!" : "You Lost!"}{" "}
          </p>
          <Button secondary className="new-game" onClick={initializeGame}>
            New Game
          </Button>
        </div>
      )}

      {!state.gameOver && (
        <div className="alphabet">
          {HANGMANDATA.ALPHABET.map((alphabet, index) => (
            <button
              key={index}
              className="letter"
              onClick={() => makeGuess(alphabet)}
              disabled={state.disabledButtons.includes(alphabet)}
            >
              {alphabet}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
