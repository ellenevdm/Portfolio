import "./project-detail.scss";

import Button from "../UI/Button";
import { Icon } from "@iconify/react";
import { LogosBootstrap } from "../SVGComponents/BootStrapIcon";
import { LogosCss3 } from "../SVGComponents/CssIcon";
import { LogosHtml5 } from "../SVGComponents/HtmlIcon";
import { LogosReact } from "../SVGComponents/ReactIcon";
import { LogosRedux } from "../SVGComponents/ReduxIcon";
import Modal from "../UI/Modal";
import { PROJECTS } from "../../data/data";
import jammingMockup from "../../assets/Svgs/3.svg";
import ppMockup from "../../assets/Svgs/pawfectly-pampered.svg";
import readitHub from "../../assets/Svgs/readit-hub.svg";
import { useState } from "react";

function renderIconSvg(iconName) {
	switch (iconName) {
		case "HTML5":
			return <LogosHtml5 className="project-skill-logo" />;
		case "CSS":
			return <LogosCss3 className="project-skill-logo" />;
		case "REACT":
			return <LogosReact className="project-skill-logo" />;
		case "REDUX":
			return <LogosRedux className="project-skill-logo" />;
		case "BOOTSTRAP":
			return <LogosBootstrap className="project-skill-logo" />;
		default:
			return null;
	}
}
const renderSvg = (project) => {
	switch (project) {
		case "pawfectlypampered":
			return ppMockup;
		case "jammming":
			return jammingMockup;
		case "readitHub":
			return readitHub;
	}
};

export default function ProjectDetails({ id, ...props }) {
	const [selectedProject, setSelectedProject] = useState();
	const [isResponsive, setIsResponsive] = useState(false);
	const [mobileView, setMobileView] = useState(false);
	const [modalIsOpen, setIsOpen] = useState(false);

	const handleSelectProject = (selectedProject) => {
		setIsOpen(!modalIsOpen);
		setSelectedProject(selectedProject);
		if (selectedProject.responsive) {
			setIsResponsive(true);
		}
	};

	const handleMobileView = () => {
		setMobileView(!mobileView);
	};

	const handleCloseProject = () => {
		setIsOpen(!modalIsOpen);
		setSelectedProject(null);
		setMobileView(false);
	};

	const project = PROJECTS.find((project) => project.id === id);

	return (
		<div {...props}>
			<div className="project-detail-container">
				<div className="project-info">
					<h2>{project.name}</h2>
					<div className="project-description info-section">
						<p>{project.description}</p>
					</div>
					<p>Skills Used:</p>
					<div className="project-skills info-section">
						{project.technologies.map((icon, index) => (
							<div
								key={index}
								className="project-skill"
							>
								{renderIconSvg(icon)}
								<small className="skill-name tooltip">{icon}</small>
							</div>
						))}
					</div>
					<div className="project-buttons info-section">
						<Button
							className="open-website-modal-button"
							onClick={() => handleSelectProject(project)}
							icon="ic:baseline-preview"
							text="Preview"
							extend
						/>

						<Button
							className="open-website-button"
							onClick={() => open(project.link, "target")}
							icon="ic:round-open-in-new"
							text="Visit Website"
							primary
						/>
					</div>
				</div>

				<img
					className="website-mockup"
					src={renderSvg(project.image)}
				/>
			</div>

			{selectedProject && (
				<Modal
					open={modalIsOpen}
					className="project-modal"
					closeModal={handleCloseProject}
				>
					<div className="project-container">
						<iframe
							className={mobileView ? "mobile-view" : "website-view"}
							src={`${selectedProject.link}`}
						></iframe>
					</div>
					<div className="modal-buttons">
						<Button
							className="proj-modal-button open-website-button"
							onClick={() => open(selectedProject.link, "target")}
							icon="ic:round-open-in-new"
							primary
						/>
						{isResponsive && (
							<Button
								className="proj-modal-button mobile-view-button"
								onClick={handleMobileView}
								icon={
									mobileView
										? "ic:baseline-desktop-mac"
										: "ic:baseline-phone-iphone"
								}
								primary
								// text="Visit Website"
								// extend
							/>

							// <button >
							// 	{mobileView && (
							// 		<Icon
							// 			icon="ic:baseline-desktop-mac"
							// 			width="1.5em"
							// 			height="1.5em"
							// 		/>
							// 	)}
							// 	{!mobileView && (
							// 		<Icon

							// 			width="1.5em"
							// 			height="1.5em"
							// 		/>
							// 	)}
							// </button>
						)}
					</div>
				</Modal>
			)}
		</div>
	);
}
