import "./projectList.scss";

import { Link } from "react-router-dom";
import { renderMockup } from "../../utils/utils";
import { useProject } from "../../context/ProjectContext";

export default function ProjectList() {
  const { projects } = useProject();
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <div className="project-card">
            <h2>{project.name}</h2>
            <div className="list-mockup">{renderMockup(project.imageMock)}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
