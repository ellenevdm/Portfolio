import "./Button.scss";

import { Icon } from "@iconify/react";

export default function Button({
	icon = "",
	text = "",
	className = "",
	extend = false,
	primary = false,

	...props
}) {
	let classes = `btn ${className}  `;

	if (primary) {
		classes += "btn-primary ";
	} else {
		classes += "btn-secondary ";
	}

	if (extend) {
		classes += "btn-extend ";
	}

	return (
		<button
			className={classes}
			{...props}
		>
			{!extend && (
				<>
					<Icon
						icon={icon}
						className="btn-icon"
					/>

					<div className="btn-text">{text}</div>
				</>
			)}
			{extend && (
				<>
					<Icon
						icon={icon}
						className="btn-icon"
					/>

					<div className="btn-text">{text}</div>
				</>
			)}
		</button>
	);
}
