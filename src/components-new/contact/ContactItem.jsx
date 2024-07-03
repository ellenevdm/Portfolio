import "./contactItem.scss";

import Button from "../UI/Button";
import SocialItem from "../UI/SocialItem";

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
        <Button
          onClick={onClickCopy}
          icon={copied ? "ic:baseline-check" : "ic:baseline-content-copy"}
          className="copy-btn"
        ></Button>
      </div>
    </div>
  );
}
