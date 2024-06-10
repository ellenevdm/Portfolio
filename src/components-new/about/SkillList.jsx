import "./skillList.scss";

import { SKILLS } from "../../data/data";
import { renderSkillLogo } from "../../utils/utils";

export default function SkillList() {
	return (
		<div>
			<h3>Skill Set</h3>
			{SKILLS.map((skill) => (
				<div key={skill.id}>
					{renderSkillLogo(skill.icon)}
					<small>{skill.name}</small>
				</div>
			))}
		</div>
	);
}
