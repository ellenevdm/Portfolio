import "./footer.scss";

import { SOCIALS } from "../../data/data";
import SocialItem from "../UI/SocialItem";

export default function Footer() {
  return (
    <div className="sidebar">
      <ul>
        {SOCIALS.map((social) => (
          <li key={social.id}>
            {" "}
            <SocialItem
              link={social.link}
              platform={social.platform}
              label={social.label}
              tooltip={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
