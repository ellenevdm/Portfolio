import "./courses.scss";

import Button from "../UI/Button";
import { COURSES } from "../../data/data";
import CodecademyLogo from "../SVGComponents/CodecademyLogo";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import UdemyLogo from "../SVGComponents/UdemyLogo";

function renderLogoSvg(course) {
	switch (course.institute) {
		case "Codecademy":
			return <CodecademyLogo className="institute-logo" />;
		case "Udemy":
			return <UdemyLogo className="institute-logo" />;

		default:
			return null;
	}
}

export default function Courses({ className = "" }) {
	return (
		<div className={`course-container ${className}`}>
			{COURSES.map((course) => (
				<div
					className="course"
					key={course.id}
				>
					<div className="course-institute">{renderLogoSvg(course)}</div>
					<div className="info">
						<span className="course-title">{course.name}</span>

						<span className="year">{course.year}</span>

						<Link
							to={course.certificate}
							target="_blank"
						>
							<Button
								className="certificate-button"
								icon="ic:baseline-workspace-premium"
								text="View Certificate"
							/>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}
