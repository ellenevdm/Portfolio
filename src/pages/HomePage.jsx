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
              Hi there! My name is Ellené van der Meijden, I am starting out my
              journey as a front-end developer, with my main framework being
              React. Download a copy of my CV below or play the game of hangman
              (hint: it’s all to do with front-end). Otherwise, continue to
              explore my portfolio, and feel free to get in touch.
            </p>
            <CVDownload>
              <Button primary className="download-btn">
                Download CV
              </Button>
            </CVDownload>
          </div>
        </div>
        <Hangman />
      </div>
    </div>
  );
}
