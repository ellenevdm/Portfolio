import "./contactDetails.scss";

import { useRef, useState } from "react";

import ContactItem from "./ContactItem";
import { SOCIALS } from "../../data/data";

export default function ContactDetails() {
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
        }, 1000);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  return (
    <div className="contact-details">
      <div className="contact-items">
        {" "}
        {SOCIALS.map((social) => (
          <ContactItem
            key={social.id}
            link={social.link}
            platform={social.platform}
            text={social.info}
            copied={copiedState[social.platform]}
            label={social.label}
            onClickCopy={() => copyToClipboard(social.info, social.platform)}
          />
        ))}
      </div>

      <span className="info">
        * Click on the icons to directly access corresponding platforms or use
        the copy buttons to copy relevant contact information.
      </span>
    </div>
  );
}
