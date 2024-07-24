import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [contactModalOpen, setContactModalOpen] = useState(false);
	const [projectModalOpen, setProjectModalOpen] = useState(false);
	const [project, setProject] = useState(null);

	const openContactModal = () => {
		setContactModalOpen(true);
	};

	const closeContactModal = () => {
		setContactModalOpen(false);
	};

	const openProjectModal = (project) => {
		setProjectModalOpen(true);
		setProject(project);
	};

	const closeProjectModal = () => {
		setProjectModalOpen(false);
		setProject(null);
	};

	return (
		<ModalContext.Provider
			value={{
				contactModalOpen,
				projectModalOpen,
				project,
				openContactModal,
				closeContactModal,
				openProjectModal,
				closeProjectModal,
			}}>
			{children}
		</ModalContext.Provider>
	);
};
export const useModal = () => useContext(ModalContext);
