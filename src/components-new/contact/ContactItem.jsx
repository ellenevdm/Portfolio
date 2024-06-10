import "./contactItem.scss";

import SocialItem from "../UI/SocialItem";

export default function ContactItem({
	link,
	platform,
	label,
	text,
	copied,
	onClickCopy,
}) {
	return (
		<div>
			<SocialItem
				link={link}
				platform={platform}
			/>
			<span>{label}</span>
			<span>{text}</span>
			<button onClick={onClickCopy}>{copied ? "copied" : "copy"}</button>
		</div>
	);
}
