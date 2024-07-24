import "./projectModal.scss";

import Modal from "../UI/Modal";
import { useModal } from "../../context/ModalContext";
import { useState } from "react";
import Button from "../UI/Button";

export default function ProjectModal() {
  const { projectModalOpen, closeProjectModal, project } = useModal();
  const { loading, setLoading } = useState(true);
  return (
    <Modal
      open={projectModalOpen}
      closeModal={closeProjectModal}
      className="project-modal"
    >
      {project && (
        <div className="project-container">
          {project.authenticationReq ? (
            <div className="error-message">
              <h1>Authentication Required</h1>
              <p>{project.errorMessage}</p>
              <div className="error-buttons">
                {" "}
                <Button
                  icon="ic:round-open-in-new"
                  onClick={() =>
                    window.open(project.link, "_blank", "noopener noreferrer")
                  }
                  primary
                >
                  Live Site
                </Button>
                <Button
                  icon="simple-icons:github"
                  onClick={() =>
                    window.open(
                      project.githubRepo,
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                  secondary
                >
                  Github Repo
                </Button>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <iframe
                src={`${project.link}`}
                onLoad={() => setLoading(false)}
              />
              <div className="project-modal-buttons">
                {" "}
                <Button
                  icon="ic:round-open-in-new"
                  onClick={() =>
                    window.open(project.link, "_blank", "noopener noreferrer")
                  }
                  iconClass="proj-modal-icon"
                ></Button>
                <Button
                  icon="simple-icons:github"
                  onClick={() =>
                    window.open(
                      project.githubRepo,
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                  iconClass="proj-modal-icon"
                ></Button>
              </div>
            </>
          )}
        </div>
      )}
    </Modal>
  );
}
