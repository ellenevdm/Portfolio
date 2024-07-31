import "./projectDetailPage.scss";

// import ProjectDetails from "../components-new/project/ProjectDetails";
// import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./projectDetailPage.scss";

import { renderMockup } from "../utils/utils";

import Accordion from "../components-new/UI/Accordion";
import Button from "../components-new/UI/Button";
import { useModal } from "../context/ModalContext";
import { useParams, useNavigate } from "react-router-dom";
import { useProject } from "../context/ProjectContext";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { openProjectModal } = useModal();
  const { projects } = useProject();
  const navigate = useNavigate();
  const project = projects.find((project) => project.id === id);
  return (
    <div className="page">
      <button onClick={() => navigate("/projects")} className="nav-back">
        <Icon icon="mdi:arrow-back" className="back-icon" />
        Back
      </button>
      <div className="inner-page">
        {/* <ProjectDetails />
         */}
        <div className="project">
          <div className="project-details">
            <h2>{project.name}</h2>
            <Accordion
              items={project.sections}
              className="project-accordion"
              itemClassName="project-item"
              itemTitleClassName="project-item-title"
            />
            <div className="buttons">
              <Button
                primary
                icon="icon-park-outline:preview-open"
                iconClass="proj-detail-icon"
                onClick={() => openProjectModal(project)}
              >
                Preview
              </Button>
              <Button
                secondary
                icon="ic:round-open-in-new"
                iconClass="proj-detail-icon"
                onClick={() =>
                  window.open(project.link, "_blank", "noopener noreferrer")
                }
              >
                Live
              </Button>
              <Button
                secondary
                icon="simple-icons:github"
                iconClass="proj-detail-icon"
                onClick={() =>
                  window.open(
                    project.githubRepo,
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                Github
              </Button>
            </div>
          </div>
          {renderMockup(project.imageResp)}
        </div>
      </div>
    </div>
  );
}
