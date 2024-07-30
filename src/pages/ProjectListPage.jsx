import "./projectListPage.scss";

import ProjectList from "../components-new/project/ProjectList";

export default function ProjectListPage() {
  return (
    <div className="page">
      <div className="inner-page">
        {" "}
        <div>
          {" "}
          <h1>My Project Showcase</h1>
          <ProjectList />
        </div>
      </div>
    </div>
  );
}
