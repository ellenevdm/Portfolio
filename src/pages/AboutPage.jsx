import "./aboutPage.scss";

import CVDownload from "../components-new/UI/CVDownload";
import CourseList from "../components-new/about/CourseList";
import SkillList from "../components-new/about/SkillList";
import PersonalSection from "../components-new/about/PersonalSection";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function AboutPage() {
  // const { scrollYProgress } = useScroll();
  const scrollPage = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollPage });
  function onNavigateClick(path) {
    document.getElementById(path).scrollIntoView();
  }
  const left = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["-25%", "0%", "0%", "25%"]
  );
  return (
    <div className="page">
      <motion.div className="circle" style={{ left }}></motion.div>

      <div className="about-page" ref={scrollPage}>
        <div className="single-page" id="section1">
          <div className="section1-content">
            {" "}
            <h1 className="page-header">About Me</h1>
            <p>
              Exploring the intersection of code and creativity, I'm a Front-End
              Developer specializing in React.js. Fueled by a love for learning,
              I've embarked on a journey of skill refinement through rigorous
              coursework. With a keen eye for detail and a passion for crafting
              seamless user experiences, I'm dedicated to pushing boundaries in
              web development. Join me as I strive for innovation and excellence
              in every project.
            </p>
          </div>
          <a
            onClick={() => onNavigateClick("section2")}
            className="nav-btn scroll-btn"
          >
            <Icon icon="bi:chevron-down" className="arrow" />
            Scroll
          </a>
        </div>
        <div className="single-page" id="section2">
          {" "}
          <h2>Professionally</h2>
          <p>
            <CVDownload>Click here</CVDownload> to download my CV for more
            information regarding work experience and other qualifications.
          </p>
          <CourseList />
          <SkillList />
          <a
            onClick={() => onNavigateClick("section3")}
            className="nav-btn scroll-btn"
          >
            <Icon icon="bi:chevron-down" className="arrow" />
            Scroll
          </a>
        </div>
        <div className="single-page" id="section3">
          {" "}
          <div className="section3-content">
            <h2>Personally</h2>
            <section>
              {" "}
              <p>
                {" "}
                Originally from Nelspruit, I moved to Pretoria to study. I have
                obtained a BCom in Business Management, but after starting to
                play around with different coding languages I developed a deep
                passion for front end development
              </p>
              <PersonalSection />
            </section>
          </div>
          <a
            onClick={() => onNavigateClick("section1")}
            className="nav-btn top-btn"
          >
            <Icon icon="bi:chevron-up" className="arrow" />
            To the Top
          </a>
        </div>
      </div>
    </div>
  );
}
