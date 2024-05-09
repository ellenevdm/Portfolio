import "./project-list.scss";
import "./project-detail.scss";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/data";
import jammingMockup from "../../assets/Svgs/3.svg";
import ppMockup from "../../assets/Svgs/pawfectly-pampered.svg";
import readitHub from "../../assets/Svgs/readit-hub.svg";
import { useState } from "react";

const renderSvg = (project) => {
	switch (project) {
		case "pawfectlypampered":
			return ppMockup;
		case "jammming":
			return jammingMockup;
		case "readitHub":
			return readitHub;
	}
};

export default function ProjectList() {
	return (
		<div className="project-section">
			<div className="project-menu">
				{PROJECTS.map((project) => (
					<Link
						to={project.id}
						key={project.key}
					>
						<div className="project-card">
							<h2>{project.name}</h2>
							{/* <button onClick={() => handleSelectProject(project)}>
							More Info
						</button> */}
							<img src={renderSvg(project.image)} />

							{/* <button
							className="project-card-btn"
							onClick={() => open(project.link, "target")}
						>
						
							View Website
						</button> */}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
