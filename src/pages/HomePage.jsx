import "./homePage.scss";

import CVDownload from "../components-new/UI/CVDownload";
import Hangman from "../components-new/home/Hangman";
import Button from "../components-new/UI/Button";

export default function HomePage() {
  return (
    <div className="page ">
      <div className="inner-page  home-page">
        <div className="intro home-compnt">
          {" "}
          <h1>
            <span className="outline">Welcome</span> to my {""}
            <span className="gradient">portfolio</span>!
          </h1>
          <div className="intro-section">
            {" "}
            <p>
              My name is Ellené van der Meijden, an aspiring front-end developer
              eager to learn and grow. My passion lies in creating user-friendly
              and interactive interfaces, utilizing tools and technologies like
              React.js, Redux, React-Router, CSS and Sass. I am always excited
              to expand this list of skills through learning and studying more.
              Feel free to download a copy of my CV below and get in touch.
            </p>
            <CVDownload>
              <Button primary className="download-btn">
                Download My CV
              </Button>
            </CVDownload>
          </div>
        </div>
        <Hangman />
      </div>
    </div>
  );
}
