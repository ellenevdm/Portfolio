import CVDownload from "../UI/CVDownload";
import Courses from "./Courses";
import Skills from "./Skills";

export default function ProfessionalSection() {
	return (
		<div>
			<h2>Professionally</h2>
			<CVDownload>Click here</CVDownload> to download my CV for more information
			regarding work experience and other qualifications.
			<div className="about-section skills-courses">
				<div className="section c">
					<h3>COURSES</h3>
					<Courses className="content c" />
				</div>
				<div className="section s">
					<h3>SKILLS</h3>
					<Skills className="content s" />
				</div>
			</div>
		</div>
	);
}
