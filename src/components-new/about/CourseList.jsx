import "./courseList.scss";

import { COURSES } from "../../data/data";
import CourseItem from "./CourseItem";

export default function CourseList() {
	return (
		<div>
			<h3>Courses</h3>
			{COURSES.map((course) => (
				<CourseItem
					key={course.id}
					course={course}
				/>
			))}
		</div>
	);
}
