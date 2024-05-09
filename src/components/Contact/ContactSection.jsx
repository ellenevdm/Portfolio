import "./contact-section.scss";

import { useRef, useState } from "react";

import Button from "../UI/Button";
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react";
import { LogosGithubIcon } from "../SVGComponents/GithubIcon";
import { LogosGoogleGmail } from "../SVGComponents/EmailIcon";
import { LogosLinkedinIcon } from "../SVGComponents/LinkedInIcon";
import { LogosWhatsappIcon } from "../SVGComponents/WhatsappIcon";
import Modal from "../UI/Modal";

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
				}, 3000); // Revert back to copy icon after 4 seconds
			})
			.catch((error) => {
				console.error("Error copying text: ", error);
			});
	};

	return (
		<Modal
			open={isOpen}
			className="contact-modal"
			closeModal={hideModal}
		>
			<div className="contact-modal-content">
				<div className="contact-section">
					<h1>Get in Touch</h1>

					<p>
						I hope to hear from you. Please get in touch through any of the
						following socials:
					</p>
					<div className="contact-socials">
						<div className="social-item">
							<a
								href="mailto: ellenevdmeijden@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="contact-icon"
							>
								<LogosGoogleGmail className="contact-icon-modal" />
							</a>
							<div className="contact-info">
								<span className="contact-label">Email</span>{" "}
								<span className="contact-text">ellene.vdMeijden@gmail.com</span>
								<Button
									className="copy-btn"
									onClick={() =>
										copyToClipboard("ellene.vdMeijden@gmail.com", "email")
									}
									icon={
										copiedState.email
											? "ic:baseline-check"
											: "ic:baseline-content-copy"
									}
									secondary
								/>
							</div>
						</div>

						<div className="social-item">
							<a
								aria-label="Chat on WhatsApp"
								href="https://wa.me/27662465655"
								target="_blank"
								className="contact-icon"
							>
								<LogosWhatsappIcon className="contact-icon-modal" />
							</a>
							<div className="contact-info">
								<span className="contact-label">WhatsApp</span>
								<span className="contact-text">0662465655</span>
								<Button
									className="copy-btn"
									onClick={() => copyToClipboard("0662465655", "whatsapp")}
									icon={
										copiedState.whatsapp
											? "ic:baseline-check"
											: "ic:baseline-content-copy"
									}
									secondary
								/>
							</div>
						</div>
						<div className="social-item">
							<a
								href="https://www.linkedin.com/in/ellene-van-der-meijden/"
								target="_blank"
								className="contact-icon"
							>
								<LogosLinkedinIcon className="contact-icon-modal" />
							</a>
							<div className="contact-info">
								<span className="contact-label">LinkedIn</span>{" "}
								<span className="contact-text">
									www.linkedin.com/in/ellene-van-der-meijden
								</span>
								<Button
									className="copy-btn"
									onClick={() =>
										copyToClipboard(
											"www.linkedin.com/in/ellene-van-der-meijden",
											"linkedin"
										)
									}
									icon={
										copiedState.linkedin
											? "ic:baseline-check"
											: "ic:baseline-content-copy"
									}
									secondary
								/>
							</div>
						</div>
						<div className="social-item">
							<a
								href="https://github.com/ellenevdm"
								target="_blank"
								className="contact-icon"
							>
								<LogosGithubIcon className="contact-icon-modal" />{" "}
							</a>
							<div className="contact-info">
								<span className="contact-label">GitHub</span>{" "}
								<span className="contact-text">www.github.com/ellenevdm</span>
								<Button
									className="copy-btn"
									onClick={() =>
										copyToClipboard("www.github.com/ellenevdm", "github")
									}
									icon={
										copiedState.github
											? "ic:baseline-check"
											: "ic:baseline-content-copy"
									}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="contact-form-section">
					<ContactForm />
				</div>
			</div>
		</Modal>
	);
}
