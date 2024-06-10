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
					<button onClick={() => toggleSection(section.title)}>
						{section.title}
					</button>
					{activeSection === section.title && (
						<div className="accordion-content">{section.content}</div>
					)}
				</div>
			))}
		</div>
	);
}
