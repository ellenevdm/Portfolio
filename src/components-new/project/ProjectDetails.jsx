import "./projectDetails.scss";

import { createProjectSections, renderMockup } from "../../utils/utils";

import Accordion from "../UI/Accordion";
import Button from "../UI/Button";
import { useModal } from "../../context/ModalContext";
import { useParams } from "react-router-dom";
import { useProject } from "../../context/ProjectContext";

export default function ProjectDetails() {
  const { id } = useParams();
  const { openProjectModal } = useModal();
  const { projects } = useProject();
  const project = projects.find((project) => project.id === id);
  // const sections = createProjectSections(project);
  return (
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
            onClick={() => openProjectModal(project)}
          >
            Open Preview
          </Button>
          <Button
            secondary
            icon="ic:round-open-in-new"
            onClick={() =>
              window.open(project.link, "_blank", "noopener noreferrer")
            }
          >
            Visit Live Site
          </Button>
          <Button
            secondary
            icon="simple-icons:github"
            onClick={() =>
              window.open(project.githubRepo, "_blank", "noopener noreferrer")
            }
          >
            Github Repo
          </Button>
        </div>
      </div>
      {renderMockup(project.imageResp)}
    </div>
  );
}
