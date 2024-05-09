// import "./project-detail-page.scss";

import ProjectDetails from "../components/Projects/ProjectDetails";
import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
	const params = useParams();
	const projId = params.projectId;
	return (
		<div className="project-detail-page page">
			<ProjectDetails id={projId} />
		</div>
	);
}
