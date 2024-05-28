import "./contact-section.scss";

import { useRef, useState } from "react";

import CVDownload from "../UI/CVDownload";
import ContactForm from "./ContactForm";
import Modal from "../UI/Modal";
import { SOCIALS } from "../../data/data";
import SocialItem from "./SocialItem";

export default function ContactModal({ isOpen, hideModal }) {
	const [copiedState, setCopiedState] = useState({
		email: false,
		whatsapp: false,
		linkedin: false,
		github: false,
	});
	const textRef = useRef(null);

	const copyToClipboard = (text, contactKey) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setCopiedState((prevState) => ({
					...prevState,
					[contactKey]: true,
				}));
				setTimeout(() => {
					setCopiedState((prevState) => ({
						...prevState,
						[contactKey]: false,
					}));
				}, 3000);
			})
			.catch((error) => {
				console.error("Error copying text: ", error);
			});
	};

	return (
		<Modal
			open={isOpen}
			className="contact-modal"
			closeModal={hideModal}>
			<div className="contact-modal-content">
				<div className="contact-section">
					<h1>Get in Touch</h1>

					<p>
						Connect via socials, download my CV <CVDownload> here </CVDownload>,
						or send a message using the contact form
					</p>

					<div className="contact-socials">
						{SOCIALS.map((social) => (
							<SocialItem
								key={social.id}
								link={social.link}
								platform={social.platform}
								text={social.info}
								copied={copiedState[social.platform]}
								label={social.label}
								onClickCopy={() =>
									copyToClipboard(social.info, social.platform)
								}
							/>
						))}
					</div>
					<span className="instructions info-text">
						* Click on the icons to directly access corresponding platforms or
						use the copy buttons to copy relevant contact information.
					</span>
				</div>
				<div className="contact-form-section">
					<ContactForm />
				</div>
			</div>
		</Modal>
	);
}
