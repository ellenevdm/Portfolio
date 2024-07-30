import "./skillList.scss";
import { SKILLS } from "../../data/data";
import { renderSkillLogo } from "../../utils/utils";

export default function SkillList() {
  return (
    <div className="skill-list">
      <h3>Skill Set</h3>
      <div className="skills-container">
        {SKILLS.map((skill) => (
          <div className="skill-item" key={skill.id}>
            {renderSkillLogo(skill.icon, "skill-icon")}

            <small>{skill.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
