import React, { useState, useEffect, useRef } from "react";
import Appbar from "../components/Appbar";
import About from "../components/tabs/About";
import Projects from "../components/tabs/Projects";
import Experience from "../components/tabs/Experience";
import Skills from "../components/tabs/Skills";
import Contact from "../components/tabs/Contact";
import Education from "../components/tabs/Education";

import "../styles/Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    About: aboutRef,
    Experience: experienceRef,
    Education: educationRef,
    Projects: projectsRef,
    Skills: skillsRef,
    Contact: contactRef,
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    scrollToTab(tab);
  };

  const scrollToTab = (tab) => {
    sectionRefs[tab]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleSection = Object.keys(sectionRefs).find(
            (key) => sectionRefs[key].current === entry.target
          );
          if (visibleSection) {
            setActiveTab(visibleSection);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="main-container">
      <div
        className="cursor-trail"
        style={{
          top: cursorPosition.y - 20 + "px",
          left: cursorPosition.x - 20 + "px",
        }}
      />

      <Appbar onTabChange={handleTabChange} activeTab={activeTab} />

      <div className="tab-content">
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={experienceRef} id="experience">
          <Experience />
        </section>
        <section ref={educationRef} id="education">
          <Education />
        </section>
        <section ref={projectsRef} id="projects">
          <Projects />
        </section>
        <section ref={skillsRef} id="skills">
          <Skills />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
