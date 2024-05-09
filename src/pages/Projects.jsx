import "./project.scss";

import { Link } from "react-router-dom";
import ProjectList from "../components/Projects/ProjectList";
import { useState } from "react";

export default function ProjectsPage() {
	return (
		<div className="projects-page page">
			<h1>Project List</h1>
			<ProjectList />
		</div>
	);
}
