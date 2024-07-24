import "./courseItem.scss";

import Button from "../UI/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function CourseItem({ course }) {
  const { name, institute, icon, completed, year, certificate } = course;
  return (
    <div className="course-card">
      <div className="card-header">
        <Icon icon={icon} className="course-icon" />
        <span className="course-name">{name}</span>
      </div>
      <div className="card-body">
        <span className="institute">{institute}</span>
        <span className="year">{completed ? year : "In Progress"}</span>
        {completed && (
          <Button
            className="certificate-button"
            onClick={() =>
              window.open(certificate, "_blank", "noopener noreferrer")
            }
            secondary
          >
            View Certificate
          </Button>
        )}
      </div>
    </div>
  );
}
