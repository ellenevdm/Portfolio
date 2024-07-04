import "./aboutPage.scss";

import CVDownload from "../components-new/UI/CVDownload";
import CourseList from "../components-new/about/CourseList";
import SkillList from "../components-new/about/SkillList";
import PersonalSection from "../components-new/about/PersonalSection";

export default function AboutPage() {
  return (
    <div className="page">
      <h1>AboutPage</h1>
      <p>
        "Exploring the intersection of code and creativity, I'm a Front-End
        Developer specializing in React.js. Fueled by a love for learning, I've
        embarked on a journey of skill refinement through rigorous coursework.
        With a keen eye for detail and a passion for crafting seamless user
        experiences, I'm dedicated to pushing boundaries in web development.
        Join me as I strive for innovation and excellence in every project."
      </p>
      <h2>Professional Section</h2>
      <CVDownload>Click here</CVDownload> to download my CV for more information
      regarding work experience and other qualifications.
      <CourseList />
      <SkillList />
      <h2>Personal Section</h2>
      <PersonalSection />
    </div>
  );
}
