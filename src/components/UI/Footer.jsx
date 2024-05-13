import "./footer.scss";

import { LogosGithubIcon } from "../SVGComponents/GithubIcon";
import { LogosGoogleGmail } from "../SVGComponents/EmailIcon";
import { LogosLinkedinIcon } from "../SVGComponents/LinkedInIcon";
import { LogosWhatsappIcon } from "../SVGComponents/WhatsappIcon";

export default function Footer() {
	return (
		<div className="footer">
			<ul className="footer-list">
				<li className="icon-content">
					<a
						href="mailto: ellenevdmeijden@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LogosGoogleGmail className="contact-icon" />
					</a>
					<div className="logo-tooltip">Email</div>
				</li>

				<li className="icon-content">
					<a
						aria-label="Chat on WhatsApp"
						href="https://wa.me/27662465655"
						target="_blank"
					>
						<LogosWhatsappIcon className="contact-icon" />
					</a>
					<div className="logo-tooltip">WhatsApp</div>
				</li>
				<li className="icon-content">
					<a
						href="https://github.com/ellenevdm"
						target="_blank"
					>
						<LogosGithubIcon className="contact-icon" />
					</a>
					<div className="logo-tooltip">GitHub</div>
				</li>
				<li className="icon-content">
					<a
						href="https://www.linkedin.com/in/ellene-van-der-meijden/"
						target="_blank"
					>
						<div className="footer-logo">
							<LogosLinkedinIcon className="contact-icon" />
						</div>
					</a>
					<div className="logo-tooltip">LinkedIn</div>
				</li>
			</ul>
		</div>
	);
}
