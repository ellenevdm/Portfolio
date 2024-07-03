import "./projectDetailPage.scss";

import Button from "../components-new/UI/Button";
import ProjectDetails from "../components-new/project/ProjectDetails";
import { useNavigate } from "react-router-dom";

export default function ProjectDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <Button onClick={() => navigate("/projects")}>
        Back To Project Lists
      </Button>
      <ProjectDetails />
    </div>
  );
}
