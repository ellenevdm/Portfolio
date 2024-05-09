import "./home.scss";

import Button from "../components/UI/Button";
import Hangman from "../components/Game/Hangman";
import { Icon } from "@iconify/react";
import pdf from "../assets/documents/CV2024.pdf";

export default function HomePage() {
	return (
		<div className="home-page page">
			<div className="home-content">
				<div className="banner home-component">
					<div className="intro-section intro-headers">
						<h1>Hi there!</h1>
						<h1>Welcome to my portfolio!</h1>
					</div>
					<div className="intro-text intro-section">
						<p>
							I'm Ellené van der Meijden, an aspiring
							<span className="key-word"> front-end developer</span> eager to
							learn and grow. My passion lies in creating user-friendly and
							interactive interfaces, utilizing tools and technologies like
							React.js, Redux, React-Router, CSS and Sass. I am always excited
							to expand this list of skills through learning and studying more.
							Feel free to <span className="key-word download">download</span> a
							copy of my CV below and get in touch.
						</p>
						<a
							href={pdf}
							download="MyCVDoc"
							tartget="_blank"
						>
							<Button
								className="download-cv"
								icon="line-md:download-loop"
								text="Download CV"
								primary
							/>
						</a>
					</div>
				</div>

				<Hangman className="hangman home-component" />
			</div>
		</div>
	);
}
