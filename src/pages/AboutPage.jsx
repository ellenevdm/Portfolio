import "./aboutPage.scss";

import CVDownload from "../components-new/UI/CVDownload";
import CourseList from "../components-new/about/CourseList";
import SkillList from "../components-new/about/SkillList";
import PersonalSection from "../components-new/about/PersonalSection";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
export default function AboutPage() {
  // const { scrollYProgress } = useScroll();
  const scrollPage = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollPage });
  function onNavigateClick(path) {
    document.getElementById(path).scrollIntoView();
  }
  const temporaryx = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 30,
  });
  const left = useTransform(temporaryx, [0, 0.5, 1], ["-22%", "0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.97, 1]);
  const translateY = "-50%";
  const translateX = "0%";
  return (
    <div className="page">
      <motion.div
        className="circle"
        style={{ left, scale, translateY, translateX }}
      ></motion.div>

      <div className="about-page" ref={scrollPage}>
        <div className="single-page" id="section1">
          <div className="section1-content">
            {" "}
            <h1 className="page-header">About Me</h1>
            <p>NEED TO REWRITE</p>
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
            <section>
              {" "}
              <span>
                <h2>Personally</h2> <p> NEED TO COMPLETE</p>
              </span>
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
