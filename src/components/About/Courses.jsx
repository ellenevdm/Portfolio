/* eslint-disable react/prop-types */

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
					<p className="course-title">{course.name}</p>
					<div>
						<div className="info">
							<span className="institute-title">{course.institute} </span>
							{course.completed && <span className="year">{course.year}</span>}
						</div>
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
				</div>
			))}
		</div>
	);
}
