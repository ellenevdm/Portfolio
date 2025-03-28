import "./projectListPage.scss";
import { Link } from "react-router-dom";
import { renderMockup } from "../utils/utils";
import { useProject } from "../context/ProjectContext";
import { useState, useEffect } from "react";
// import ProjectList from "../components-new/project/ProjectList";

export default function ProjectListPage() {
  const { projects } = useProject();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = projects.map((project) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = project.imageMock;

        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => setIsLoading(false));
  }, [projects]);
  return (
    <div className="page">
      <div className="inner-page">
        {" "}
        <div>
          {" "}
          <h1>My Project Showcase</h1>
          {isLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
            </div>
          )}
          {isLoading && <p>Loading ... </p>}
          {!isLoading && (
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
          )}
        </div>
      </div>
    </div>
  );
}
