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
import { Icon } from "@iconify/react/dist/iconify.js";
import { LogosTypescript } from "../assets/Svgs/TypeScriptIcon";
import { LogosTailwindcss } from "../assets/Svgs/TailwindCssIcon";
import { LogosNextjs } from "../assets/Svgs/NextJS";

export function renderMockup(image) {
  switch (image) {
    case "jamMock":
      return <img src={jamMock} alt="jam" />;
    case "pawMock":
      return <img src={pawMock} alt="paw" />;
    case "readMock":
      return <img src={readMock} alt="read" />;
    case "pawResp":
      return <img src={pawResp} alt="paw" />;
    case "readResp":
      return <img src={readResp} alt="read" />;
    default:
      return null;
  }
}
export function renderSkillLogo(icon, className) {
  switch (icon) {
    case "bootstrap":
      return <LogosBootstrap className={className} />;
    case "css":
      return <LogosCss3 className={className} />;
    case "github":
      return <LogosGithubIcon className={className} />;
    case "git":
      return <LogosGitIcon className={className} />;
    case "html":
      return <LogosHtml5 className={className} />;
    case "javascript":
      return <LogosJavascript className={className} />;
    case "react":
      return <LogosReact className={className} />;
    case "redux":
      return <LogosRedux className={className} />;
    case "router":
      return <LogosReactRouter className={className} />;
    case "sass":
      return <LogosSass className={className} />;
    case "typescript":
      return <LogosTypescript className={className} />;
    case "tailwind":
      return <LogosTailwindcss className={className} />;
    case "nextjs":
      return <LogosNextjs className={className} />;
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
    key: list.key,
    title: list.title,
    content: list.content.map((item, index) => (
      <div key={index} style={{ listStyle: "none" }} className="personal-item">
        <span className="list-icon">
          <Icon icon={list.icon} />
        </span>
        <span className="list-text">{item}</span>
      </div>
    )),
    icon: list.icon,
  }));
}
