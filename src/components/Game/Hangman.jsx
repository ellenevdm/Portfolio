import "./hangman.scss";

import { useEffect, useState } from "react";

import Button from "../UI/Button";
import Figure from "./Figure";
import { HANGMANDATA } from "../../data/data";

export default function Hangman({ className = "" }) {
	const [word, setWord] = useState("");
	const [guesses, setGuesses] = useState([]);
	const [incorrectGuesses, setIncorrectGuesses] = useState(0);
	const [incorrectLetters, setIncorrectLetters] = useState([]);
	const [disabledButtons, setDisabledButtons] = useState([]);
	const [maskedWord, setMaskedWord] = useState();

	const [gameOver, setGameOver] = useState(false);
	const [gameState, setGameState] = useState(null);

	const maxGuesses = 6;
	useEffect(() => {
		let word =
			HANGMANDATA.WORDS[Math.floor(Math.random() * HANGMANDATA.WORDS.length)];
		setWord(word);

		let masked = word
			.split("")
			.map((letter) => (guesses.includes(letter) ? letter : "_"))
			.join(" ");

		setMaskedWord(masked);
	}, []);

	useEffect(() => {
		if (incorrectGuesses === maxGuesses) {
			setGameOver(true);
			setGameState("lost");
		} else if (!(maskedWord?.includes("_") ?? true)) {
			setGameOver(true);
			setGameState("won");
		}
	}, [incorrectGuesses, maskedWord]);

	const makeGuess = (alphabet) => {
		let newGuesses = [...guesses, alphabet];

		setGuesses(newGuesses);
		if (!word.includes(alphabet)) {
			setIncorrectGuesses(incorrectGuesses + 1);
			setIncorrectLetters([...incorrectLetters, alphabet]);
		}
		setDisabledButtons((prevDisabledButtons) => [
			...prevDisabledButtons,
			alphabet,
		]);
		let masked = word
			.split("")
			.map((letter) => (newGuesses.includes(letter) ? letter : "_"))
			.join(" ");

		setMaskedWord(masked);
	};
	useEffect(() => {
		const handleKeyPress = (event) => {
			if (gameOver || incorrectGuesses === maxGuesses) {
				return;
			} else {
				const key = event.key.toUpperCase();
				if (/^[A-Z]$/.test(key) && !guesses.includes(key)) {
					makeGuess(key);
				}
			}
		};
		document.addEventListener("keypress", handleKeyPress);
		return () => {
			document.removeEventListener("keypress", handleKeyPress);
		};
	}, [gameOver, incorrectGuesses, guesses, makeGuess, maxGuesses]);

	const handleButtonClick = (alphabet) => {
		makeGuess(alphabet);
	};
	function newGame() {
		let word =
			HANGMANDATA.WORDS[Math.floor(Math.random() * HANGMANDATA.WORDS.length)];
		setGuesses([]);
		setIncorrectLetters([]);
		setIncorrectGuesses(0);
		setDisabledButtons([]);
		setGameOver(false);
		setGameState(null);
		setWord(word);

		let masked = word
			.split("")
			.map((letter) => "_")
			.join(" ");

		setMaskedWord(masked);
	}

	return (
		<div className={`game ${className}`}>
			<h1>Hangman Game</h1>

			<div className="game-container">
				<Figure
					className="figure-container"
					incorrectGuesses={incorrectGuesses}
				/>
				<div className="left-section">
					<div className="guesses-section">
						<h3>{gameOver ? word : maskedWord}</h3>
					</div>
					<div className="game-state">
						{gameOver && (
							<div className="game-over">
								{gameState === "won" && (
									<span className="result won">Congratulations! You won!</span>
								)}
								{gameState === "lost" && (
									<span className="result lost">
										Game Over ! Sorry, you lost!
									</span>
								)}

								<Button
									className="new-game-button"
									onClick={newGame}
									text="New Game"
									primary
								/>
							</div>
						)}

						<div className="incorrect-section">
							<h4>Incorrect Letters:</h4>
							<span>
								{incorrectGuesses} / {maxGuesses}
							</span>
							<ul className="incorrect-letters">
								{incorrectLetters.map((letter, index) => (
									<div
										className="incorrect-letter"
										key={index}
									>
										{letter}
									</div>
								))}
							</ul>
						</div>
					</div>

					{!gameOver && (
						<div className="alphabet">
							{HANGMANDATA.ALPHABET.map((alphabet, index) => (
								<Button
									className="letter"
									key={index}
									onClick={() => handleButtonClick(alphabet)}
									disabled={disabledButtons.includes(alphabet) || gameOver}
									text={alphabet}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
