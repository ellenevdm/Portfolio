import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function Accordion({ sections }) {
	const [activeSection, setActiveSection] = useState(null);
	const toggleSection = (sectionTitle) => {
		setActiveSection(activeSection === sectionTitle ? null : sectionTitle);
	};

	return (
		<div className="accordion">
			{sections.map((section, index) => (
				<div
					className="accordion-item"
					key={index}>
					<div onClick={() => toggleSection(section.title)}>
						{section.title}{" "}
						<span>
							<Icon
								icon={
									activeSection === section.title
										? "ic:baseline-expand-less"
										: "ic:baseline-expand-more"
								}
							/>
						</span>
					</div>
					{activeSection === section.title && (
						<div className="accordion-content">{section.content}</div>
					)}
				</div>
			))}
		</div>
	);
}
