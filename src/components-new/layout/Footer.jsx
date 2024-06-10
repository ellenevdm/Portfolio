import "./footer.scss";

import { SOCIALS } from "../../data/data";
import SocialItem from "../UI/SocialItem";

export default function Footer() {
	return (
		<footer>
			<ul>
				{SOCIALS.map((social) => (
					<SocialItem
						key={social.id}
						link={social.link}
						platform={social.platform}
						label={social.label}
						tooltip={true}
					/>
				))}
			</ul>
		</footer>
	);
}
