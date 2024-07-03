import "./contactModal.scss";

import CVDownload from "../UI/CVDownload";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import Modal from "../UI/Modal";
import { useModal } from "../../context/ModalContext";

export default function ContactModal() {
  const { contactModalOpen, closeContactModal } = useModal();

  return (
    <Modal open={contactModalOpen} closeModal={closeContactModal}>
      <div className="contact-content">
        <div className="contact-blocks contact-section">
          <h1>Get in Touch</h1>
          <p>
            Connect via socials, download my CV <CVDownload> here </CVDownload>,
            or send a message using the contact form
          </p>
          <ContactDetails />
        </div>{" "}
        <ContactForm />
      </div>
    </Modal>
  );
}
