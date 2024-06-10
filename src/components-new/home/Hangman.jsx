import "./hangman.scss";

import { hangmanReducer, initialState } from "./hangmanReducer";
import { useCallback, useEffect, useReducer } from "react";

import { HANGMANDATA } from "../../data/data";
import HangmanFigure from "./HangmanFigure";

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
		<>
			<h2>Hangman Game</h2>
			<HangmanFigure
				className="figure"
				incorrectGuesses={state.incorrectGuesses}
			/>
			<h3>{state.gameOver ? state.word : state.maskedWord}</h3>
			{state.gameOver && (
				<div>
					<span> {state.result === "won" ? "You Won" : "You Lost"} </span>
					<button onClick={initializeGame}>New Game</button>
				</div>
			)}
			<div>
				<h4>Incorrect Letters</h4>
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

			{!state.gameOver && (
				<div>
					{HANGMANDATA.ALPHABET.map((alphabet, index) => (
						<button
							key={index}
							onClick={() => makeGuess(alphabet)}
							disabled={state.disabledButtons.includes(alphabet)}>
							{alphabet}
						</button>
					))}
				</div>
			)}
		</>
	);
}
