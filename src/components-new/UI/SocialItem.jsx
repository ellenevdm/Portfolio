import "./socialItem.scss";

import { renderSocialLogo } from "../../utils/utils";

export default function SocialItem({
	link,
	platform,
	label = "",
	tooltip = false,
}) {
	return (
		<div>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer">
				{renderSocialLogo(platform)}
			</a>
			{tooltip && <div>{label}</div>}
		</div>
	);
}
