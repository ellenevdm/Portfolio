import "./courseList.scss";

import { COURSES } from "../../data/data";
import CourseItem from "./CourseItem";

export default function CourseList() {
  return (
    <div className="courses">
      <h3>Courses</h3>
      <div className="course-list">
        {" "}
        {COURSES.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
