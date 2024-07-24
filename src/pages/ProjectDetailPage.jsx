import "./projectDetailPage.scss";

import Button from "../components-new/UI/Button";
import ProjectDetails from "../components-new/project/ProjectDetails";
import { useNavigate } from "react-router-dom";

export default function ProjectDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <Button
        onClick={() => navigate("/projects")}
        icon="ic:round-arrow-back"
        secondary
      ></Button>
      <div className="inner-page">
        <ProjectDetails />
      </div>
    </div>
  );
}
