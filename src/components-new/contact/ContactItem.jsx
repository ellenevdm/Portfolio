import "./contactItem.scss";

import Button from "../UI/Button";
import SocialItem from "../UI/SocialItem";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ContactItem({
  link,
  platform,
  label,
  text,
  copied,
  onClickCopy,
}) {
  return (
    <div className="contact-item">
      {" "}
      <SocialItem link={link} platform={platform} />
      <div className="copy-info">
        <span className="label">{label}</span>
        <span className="text">{text}</span>
        <button onClick={onClickCopy} className="copy-btn">
          <Icon
            icon={copied ? "ic:baseline-check" : "ic:baseline-content-copy"}
          />
        </button>
      </div>
    </div>
  );
}
