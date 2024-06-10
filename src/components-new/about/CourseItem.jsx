import "./courseItem.scss";

import Button from "../UI/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function CourseItem({ course }) {
	const { name, institute, icon, completed, year, certificate } = course;
	return (
		<div>
			<p>{name}</p>
			<Icon icon={icon} />
			<p>{institute}</p>
			<p>{completed ? year : "In Progress"}</p>
			{completed && (
				<Button
					icon={icon}
					onClick={() =>
						window.open(certificate, "_blank", "noopener noreferrer")
					}>
					View Certificate
				</Button>
			)}
		</div>
	);
}
