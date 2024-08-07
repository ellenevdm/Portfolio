import "./contactForm.scss";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Button from "../UI/Button";

export default function ContactForm() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("service_3fmlqsm", "template_93jcr7c", form.current, {
        publicKey: "OAGJuP54NjshM5Ifw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsLoading(false);
          alert("Email sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
          alert("Something went wrong, please try again later");
        }
      );
  };
  return (
    <form
      className="contact-form contact-section"
      ref={form}
      onSubmit={sendEmail}
    >
      <h1>Send me a message</h1>{" "}
      <label>
        Name:
        <input type="text" name="user_name" required />
      </label>
      <label>
        Your Email:
        <input type="email" name="user_email" required />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          placeholder="Write your message here..."
          required
        />
      </label>
      <Button primary type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
