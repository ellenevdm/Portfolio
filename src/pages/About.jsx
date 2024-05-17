import "./about.scss";

import CVDownload from "../components/UI/CVDownload";
import Courses from "../components/About/Courses";
import { Icon } from "@iconify/react";
import PersonalSection from "../components/About/PersonalSection";
import ProfessionalSection from "../components/About/ProfessionalSection";
import Skills from "../components/About/Skills";

export default function AboutPage() {
	return (
		<div className="about-page page">
			<div>
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
			{/* <h2>Professionally</h2>
			<CVDownload>Click here</CVDownload> to download my CV for more information
			regarding work experience and other qualifications.
			<div className="about-section skills-courses">
				<div className="section c">
					<h3>COURSES</h3>
					<Courses className="content c" />
				</div>
				<div className="section s">
					<h3>SKILLS</h3>
					<Skills className="content s" />
				</div>
			</div> */}
			<ProfessionalSection />

			<PersonalSection />
		</div>
	);
}
