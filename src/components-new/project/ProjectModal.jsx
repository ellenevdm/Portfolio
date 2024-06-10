import "./projectModal.scss";

import Modal from "../UI/Modal";
import { useModal } from "../../context/ModalContext";

export default function ProjectModal() {
	const { projectModalOpen, closeProjectModal, project } = useModal();

	return (
		<Modal
			open={projectModalOpen}
			closeModal={closeProjectModal}>
			{project && (
				<div className="project-modal">
					<h2>{project.name}</h2>
					<iframe src={`${project.link}`}></iframe>
					<button>View Live Site</button>
					<button>Github Repository</button>
				</div>
			)}
		</Modal>
	);
}
