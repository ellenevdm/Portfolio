import "./skills.scss";

import { LogosBootstrap } from "../SVGComponents/BootStrapIcon";
import { LogosCss3 } from "../SVGComponents/CssIcon";
import { LogosGitIcon } from "../SVGComponents/GitIcon";
import { LogosGithubIcon } from "../SVGComponents/GithubIcon";
import { LogosHtml5 } from "../SVGComponents/HtmlIcon";
import { LogosJavascript } from "../SVGComponents/JSIcon";
import { LogosReact } from "../SVGComponents/ReactIcon";
import { LogosReactRouter } from "../SVGComponents/RouterIcon";
import { LogosRedux } from "../SVGComponents/ReduxIcon";
import { LogosSass } from "../SVGComponents/SassIcon";
import { SKILLS } from "../../data/data";

function renderSkillSvg(skill) {
	switch (skill.icon) {
		case "html-5-icon":
			return <LogosHtml5 className="skill-logo" />;
		case "css":
			return <LogosCss3 className="skill-logo" />;
		case "git":
			return <LogosGitIcon className="skill-logo" />;
		case "github":
			return <LogosGithubIcon className="skill-logo" />;
		case "react":
			return <LogosReact className="skill-logo" />;
		case "redux":
			return <LogosRedux className="skill-logo" />;
		case "react-router":
			return <LogosReactRouter className="skill-logo" />;
		case "javascript":
			return <LogosJavascript className="skill-logo" />;
		case "bootstrap":
			return <LogosBootstrap className="skill-logo" />;
		case "sass":
			return <LogosSass className="skill-logo" />;
		default:
			return null;
	}
}

export default function Skills({ className = "" }) {
	return (
		<div className={`skills-container ${className}`}>
			<div className="skills">
				{SKILLS.map((skill) => (
					<div
						className="skill"
						key={skill.id}
					>
						{renderSkillSvg(skill)}

						<small className="skill-name tooltip">{skill.name}</small>
					</div>
				))}
			</div>
		</div>
	);
}
