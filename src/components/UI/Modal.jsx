import "./modal.scss";

import { useEffect, useRef } from "react";

import Button from "./Button";
import { createPortal } from "react-dom";

export default function Modal({ closeModal, children, open, className = "" }) {
	const dialog = useRef();
	useEffect(() => {
		const modal = dialog.current;
		if (open) {
			modal.showModal();
		}
		return () => modal.close();
	}, [open]);
	return createPortal(
		<dialog
			ref={dialog}
			className={`modal ${className}`}
		>
			<Button
				className="close-button"
				onClick={closeModal}
				icon="line-md:close"
			/>

			{children}
		</dialog>,
		document.getElementById("modal")
	);
}
