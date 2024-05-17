import Button from "../UI/Button";
import { LogosGithubIcon } from "../SVGComponents/GithubIcon";
import { LogosGoogleGmail } from "../SVGComponents/EmailIcon";
import { LogosLinkedinIcon } from "../SVGComponents/LinkedInIcon";
import { LogosWhatsappIcon } from "../SVGComponents/WhatsappIcon";

const renderSocialSvg = (platform) => {
	switch (platform) {
		case "github":
			return <LogosGithubIcon className="contact-icon-modal" />;
		case "linkedin":
			return <LogosLinkedinIcon className="contact-icon-modal" />;
		case "whatsapp":
			return <LogosWhatsappIcon className="contact-icon-modal" />;
		case "email":
			return <LogosGoogleGmail className="contact-icon-modal" />;
		default:
			return null;
	}
};
export default function SocialItem({
	copied,
	label,
	link,
	text,
	onClickCopy,
	platform,
}) {
	return (
		<div className="social-item">
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="contact-icon"
			>
				{renderSocialSvg(platform)}
			</a>

			<div className="contact-info">
				<span className="contact-label">{label}</span>
				<span className="contact-text">{text}</span>
				<Button
					className="copy-btn"
					onClick={onClickCopy}
					icon={copied ? "ic:baseline-check" : "ic:baseline-content-copy"}
				/>
			</div>
		</div>
	);
}
