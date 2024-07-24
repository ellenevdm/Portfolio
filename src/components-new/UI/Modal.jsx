import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import './modal.scss';
export default function Modal({ closeModal, children, open, className = "" }) {
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;
		if (open) {
			modal.showModal();
		} else {
			modal.close();
		}

		const handleCancel = (event) => {
			event.preventDefault();
			closeModal();
		};

		modal.addEventListener("cancel", handleCancel);

		return () => {
			modal.removeEventListener("cancel", handleCancel);
		};
	}, [open, closeModal]);

	return createPortal(
		<dialog
			ref={dialog}
			className={`modal ${className}`}>
			<button
				className="close-button"
				onClick={closeModal}>
				&times;
			</button>
			{children}
		</dialog>,
		document.getElementById("modal")
	);
}
