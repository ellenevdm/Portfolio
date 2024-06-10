import "./homePage.scss";

import CVDownload from "../components-new/UI/CVDownload";
import Hangman from "../components-new/home/Hangman";

export default function HomePage() {
	return (
		<>
			<h1>Welcome to my portfolio</h1>
			<p>
				My name is Ellené van der Meijden, an aspiring front-end developer eager
				to learn and grow. My passion lies in creating user-friendly and
				interactive interfaces, utilizing tools and technologies like React.js,
				Redux, React-Router, CSS and Sass. I am always excited to expand this
				list of skills through learning and studying more. Feel free to download
				a copy of my CV below and get in touch.
			</p>
			<CVDownload>
				<button>Download My CV</button>
			</CVDownload>

			<Hangman />
		</>
	);
}
