import "./contact-form.scss";

import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_3fmlqsm", "template_93jcr7c", form.current, {
				publicKey: "OAGJuP54NjshM5Ifw",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};
	return (
		<form
			className="contact-form"
			ref={form}
			onSubmit={sendEmail}
		>
			<h2>Send Me a Message</h2>
			<label>
				Name:
				<input
					type="text"
					name="user_name"
					placeholder="Jane Doe"
					required
				/>
			</label>
			<label>
				Email:
				<input
					type="email"
					name="user_email"
					placeholder="example@example.com"
					required
				/>
			</label>
			<label>
				Message:
				<textarea
					name="message"
					placeholder="Write your message here..."
					required
				/>
			</label>
			<button
				className="submit"
				type="submit"
			>
				Send
			</button>
		</form>
	);
}
