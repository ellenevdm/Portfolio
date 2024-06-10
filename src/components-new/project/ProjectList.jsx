import "./projectList.scss";

import { Link } from "react-router-dom";
import { renderMockup } from "../../utils/utils";
import { useProject } from "../../context/ProjectContext";

export default function ProjectList() {
	const { projects } = useProject();
	return (
		<div>
			{projects.map((project) => (
				<Link
					to={`/projects/${project.id}`}
					key={project.id}>
					<div className="project-card">
						<h2>{project.name}</h2>
						<div>{project.image}</div>
						{renderMockup(project.imageMock)}
					</div>
				</Link>
			))}
		</div>
	);
}
