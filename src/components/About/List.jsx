/* eslint-disable react/prop-types */

import { Icon } from "@iconify/react";

export default function List(props) {
	const { items, title, icon, id } = props;
	// let listClasses = `list `;
	// let sectionClasses = `section `;

	// if (id == "hobbies") {
	// 	listClasses += "hobbies";
	//   sectionClasses += "h-section";
	// } else if (id == "values") {
	// 	listClasses += "values";
	// } else if (id == "goals") {
	// 	listClasses += "list-goals";
	// }
	return (
		<div className={`personal-section ${id}`}>
			<h3>{title}</h3>
			<ul className={`list__${id}`}>
				{items.map((item, index) => (
					<li key={index}>
						<Icon
							className="list-icon"
							icon={icon}
						/>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
