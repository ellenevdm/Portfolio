import "./courses.scss";

import Button from "../UI/Button";
import { COURSES } from "../../data/data";
import { Link } from "react-router-dom";

export default function Courses({ className = "" }) {
	return (
		<div className={`course-container ${className}`}>
			{COURSES.map((course) => (
				<div
					className="course"
					key={course.id}
				>
					<h4 className="course-title">{course.name}</h4>

					<p className="info">
						<span className="institute-title">{course.institute} </span>
						{course.completed && (
							<small className="year"> || {course.year}</small>
						)}
					</p>
					{course.completed ? (
						<Link
							to={course.certificate}
							target="_blank"
						>
							<Button
								className="certificate-button"
								icon={course.icon}
								text="View Certificate"
							/>
						</Link>
					) : (
						<div className="loader"></div>
					)}
				</div>
			))}
		</div>
	);
}
