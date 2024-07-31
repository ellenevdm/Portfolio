import "./projectListPage.scss";
import { Link } from "react-router-dom";
import { renderMockup } from "../utils/utils";
import { useProject } from "../context/ProjectContext";
// import ProjectList from "../components-new/project/ProjectList";

export default function ProjectListPage() {
  const { projects } = useProject();
  return (
    <div className="page">
      <div className="inner-page">
        {" "}
        <div>
          {" "}
          <h1>My Project Showcase</h1>
          {/* <ProjectList /> */}
          <div className="project-list">
            {projects.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id}>
                <div className="project-card">
                  <h2>{project.name}</h2>
                  <div className="list-mockup">
                    {renderMockup(project.imageMock)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
