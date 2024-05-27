/* eslint-disable react/no-unescaped-entities */

import "./about.scss";

import PersonalSection from "../components/About/PersonalSection";
import ProfessionalSection from "../components/About/ProfessionalSection";

export default function AboutPage() {
	return (
		<div className="about-page page">
			<div className="about-intro">
				<h1>About</h1>
				<p>
					"Exploring the intersection of code and creativity, I'm a Front-End
					Developer specializing in React.js. Fueled by a love for learning,
					I've embarked on a journey of skill refinement through rigorous
					coursework. With a keen eye for detail and a passion for crafting
					seamless user experiences, I'm dedicated to pushing boundaries in web
					development. Join me as I strive for innovation and excellence in
					every project."
				</p>
			</div>

			<div className="about-containers">
				<ProfessionalSection />

				<PersonalSection />
			</div>
		</div>
	);
}
