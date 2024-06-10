import "./button.scss";

import { Icon } from "@iconify/react/dist/iconify.js";

export default function Button({
	icon = "",
	children,
	className = "",
	primary = false,
	secondary = false,
	...props
}) {
	let classes = `btn ${className} `;
	if (primary) {
		classes += "btn-primary";
	} else if (secondary) {
		classes += "btn-secondary";
	}

	return (
		<button
			className="classes"
			{...props}>
			<span> {children} </span>
			<Icon icon={icon} />
		</button>
	);
}
