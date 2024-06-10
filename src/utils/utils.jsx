import { LogosBootstrap } from "../assets/Svgs/BootStrapIcon";
import { LogosCss3 } from "../assets/Svgs/CssIcon";
import { LogosGitIcon } from "../assets/Svgs/GitIcon";
import { LogosGithubIcon } from "../assets/Svgs/GithubIcon";
import { LogosGoogleGmail } from "../assets/Svgs/EmailIcon";
import { LogosHtml5 } from "../assets/Svgs/HtmlIcon";
import { LogosJavascript } from "../assets/Svgs/JSIcon";
import { LogosLinkedinIcon } from "../assets/Svgs/LinkedInIcon";
import { LogosReact } from "../assets/Svgs/ReactIcon";
import { LogosReactRouter } from "../assets/Svgs/RouterIcon";
import { LogosRedux } from "../assets/Svgs/ReduxIcon";
import { LogosSass } from "../assets/Svgs/SassIcon";
import { LogosWhatsappIcon } from "../assets/Svgs/WhatsappIcon";
import jamMock from "../assets/Images/jamMock.png";
import pawMock from "../assets/Images/pawMock.png";
import pawResp from "../assets/Images/pawResp.png";
import readMock from "../assets/Images/readMock.png";
import readResp from "../assets/Images/readResp.png";

export function renderMockup(image) {
	switch (image) {
		case "jamMock":
			return (
				<img
					src={jamMock}
					alt="jam"
				/>
			);
		case "pawMock":
			return (
				<img
					src={pawMock}
					alt="paw"
				/>
			);
		case "readMock":
			return (
				<img
					src={readMock}
					alt="read"
				/>
			);
		case "pawResp":
			return (
				<img
					src={pawResp}
					alt="paw"
				/>
			);
		case "readResp":
			return (
				<img
					src={readResp}
					alt="read"
				/>
			);
		default:
			return null;
	}
}
export function renderSkillLogo(icon, ...props) {
	switch (icon) {
		case "bootstrap":
			return <LogosBootstrap {...props} />;
		case "css":
			return <LogosCss3 {...props} />;
		case "github":
			return <LogosGithubIcon {...props} />;
		case "git":
			return <LogosGitIcon {...props} />;
		case "html":
			return <LogosHtml5 {...props} />;
		case "javascript":
			return <LogosJavascript {...props} />;
		case "react":
			return <LogosReact {...props} />;
		case "redux":
			return <LogosRedux {...props} />;
		case "router":
			return <LogosReactRouter {...props} />;
		case "sass":
			return <LogosSass {...props} />;
		default:
			return null;
	}
}

export function renderSocialLogo(platform, ...props) {
	switch (platform) {
		case "email":
			return <LogosGoogleGmail {...props} />;
		case "whatsapp":
			return <LogosWhatsappIcon {...props} />;
		case "github":
			return <LogosGithubIcon {...props} />;
		case "linkedin":
			return <LogosLinkedinIcon {...props} />;

		default:
			return null;
	}
}

export function createProjectSections(project) {
	return [
		{
			title: "Description",
			content: <p>{project.description}</p>,
		},
		{
			title: "Features",
			content: (
				<ul>
					{project.features.map((feature, index) => (
						<li key={index}>{feature}</li>
					))}
				</ul>
			),
		},
		{
			title: "Technologies",
			content: (
				<ul>
					{project.technologies.map((tech, index) => (
						<li key={index}>{tech}</li>
					))}
				</ul>
			),
		},
	];
}

export function createPersonalLists(lists) {
	return lists.map((list) => ({
		title: list.title,
		content: (
			<ul>
				{list.items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		),
	}));
}
