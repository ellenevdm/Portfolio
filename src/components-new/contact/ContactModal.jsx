import "./contactModal.scss";

import CVDownload from "../UI/CVDownload";
import ContactForm from "./ContactForm";
import ContactSection from "./ContactSection";
import Modal from "../UI/Modal";
import { useModal } from "../../context/ModalContext";

export default function ContactModal() {
	const { contactModalOpen, closeContactModal } = useModal();

	return (
		<Modal
			open={contactModalOpen}
			closeModal={closeContactModal}>
			<h1>Get in Touch</h1>

			<p>
				Connect via socials, download my CV <CVDownload> here </CVDownload>, or
				send a message using the contact form
			</p>

			<ContactSection />
			<ContactForm />
		</Modal>
	);
}
