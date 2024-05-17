import "./home.scss";

import Button from "../components/UI/Button";
import CVDownload from "../components/UI/CVDownload";
import Hangman from "../components/Game/Hangman";
import { Icon } from "@iconify/react";
import pdf from "../assets/documents/CV2024.pdf";

export default function HomePage() {
	return (
		<div className="home-page page">
			<div className="home-content">
				<div className="banner home-component">
					<div className="intro-section intro-header">
						<h1 className="display-text">
							<span className="outline-text">Welcome</span> to my{" "}
							<span className="gradient-text">portfolio</span>!
						</h1>
					</div>
					<div className="intro-text intro-section">
						<p>
							My name is Ellené van der Meijden, an aspiring front-end developer
							eager to learn and grow. My passion lies in creating user-friendly
							and interactive interfaces, utilizing tools and technologies like
							React.js, Redux, React-Router, CSS and Sass. I am always excited
							to expand this list of skills through learning and studying more.
							Feel free to download a copy of my CV below and get in touch.
						</p>
						<CVDownload>
							<Button
								text="Download My CV"
								icon="line-md:download-loop"
								primary
							/>
						</CVDownload>
					</div>
				</div>

				<Hangman className="hangman home-component" />
			</div>
		</div>
	);
}
