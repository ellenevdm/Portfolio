import "./socialItem.scss";

import { renderSocialLogo } from "../../utils/utils";

export default function SocialItem({
  link,
  platform,
  label = "",
  tooltip = false,
}) {
  return (
    <div className="social-item">
      {" "}
      <a
        className="social-logo"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {renderSocialLogo(platform)}
      </a>
      {tooltip && <span className="label">{label}</span>}
    </div>
  );
}
