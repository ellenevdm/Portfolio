import "./about.scss";

import Courses from "../components/About/Courses";
import { Icon } from "@iconify/react";
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
			<div className="about-section skills-courses">
				<div className="section c">
					<h3>COURSES</h3>
					<Courses className="content c" />
				</div>
				<div className="section s">
					<h3>SKILLS</h3>
					<Skills className="content s" />
				</div>
			</div>
			<div className="about-section personal-container">
				<h2>Who I am</h2>
				<p>
					Originally from Nelspruit, I moved to Pretoria to study. I have
					obtained a BCom in Business Management, but after starting to play
					around with different coding languages I developed a deep passion for
					front end development
				</p>
				<div className="personal-sections">
					<div className="personal-section hobbies">
						<h3>Interest and Hobbies</h3>

						<ul className="list__hobbies">
							<li>
								<Icon
									className="list-icon"
									icon="material-symbols:nature"
									width="1.5em"
									height="1.5em"
								/>
								Nature
							</li>
							<li>
								<Icon
									className="list-icon"
									icon="material-symbols:pets"
									width="1.5em"
									height="1.5em"
								/>
								Pets
							</li>
							<li>
								<Icon
									className="list-icon"
									icon="material-symbols:travel-explore"
									width="1.5em"
									height="1.5em"
								/>
								Travelling
							</li>
							<li>
								<Icon
									className="list-icon"
									icon="material-symbols:hiking"
									width="1.5em"
									height="1.5em"
								/>
								Hiking
							</li>
						</ul>
					</div>

					<div className="personal-section values">
						<h3>Personal Values</h3>

						<ul className="list__values-list">
							<li>
								<Icon
									className="list-icon"
									icon="material-symbols:handshake-outline"
									width="1.5em"
									height="1.5em"
								/>
								Respect
							</li>
							<li>
								<Icon
									className="list-icon"
									icon="la:balance-scale"
									width="1.5em"
									height="1.5em"
								/>
								Honesty
							</li>

							<li>
								<Icon
									className="list-icon"
									icon="mdi:head-question-outline"
									width="1.5em"
									height="1.5em"
								/>
								Curiosity
							</li>
							<li>
								<Icon
									className="list-icon"
									icon="material-symbols:verified-user-outline"
									width="1.5em"
									height="1.5em"
								/>
								Authenticity
							</li>
							<li>
								<Icon
									className="list-icon"
									icon="mdi:head-lightbulb-outline"
									width="1.5em"
									height="1.5em"
								/>
								Creativity
							</li>
						</ul>
					</div>
					<div className="personal-section goals">
						<h3>Goals</h3>
						<ul className="list__goals">
							<li>
								{" "}
								<Icon
									className="list-icon"
									icon="mdi:target-arrow"
									width="1.5em"
									height="1.5em"
								/>
								Study Vue.js Course
							</li>
							<li>
								{" "}
								<Icon
									className="list-icon"
									icon="mdi:target-arrow"
									width="1.5em"
									height="1.5em"
								/>
								Study React Native Course
							</li>
							<li>
								{" "}
								<Icon
									className="list-icon"
									icon="mdi:target-arrow"
									width="1.5em"
									height="1.5em"
								/>
								Develop current skills
							</li>
							<li>
								{" "}
								<Icon
									className="list-icon"
									icon="mdi:target-arrow"
									width="1.5em"
									height="1.5em"
								/>
								Grow as a front-end developer
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
