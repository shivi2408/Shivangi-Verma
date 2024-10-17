import React, { useState, useEffect, useRef } from "react";
import Appbar from "../components/Appbar";
import About from "../components/tabs/About";
import Projects from "../components/tabs/Projects";
import Experience from "../components/tabs/Experience";
import Skills from "../components/tabs/Skills";
import Contact from "../components/tabs/Contact";
import Education from "../components/tabs/Education";
import cursor from "../components/cursor";

import "../styles/Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("About");

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
    cursor.init();

    return () => {
    };
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
  });

  return (
    <div className="main-container colflex">
        <div class="cursor-dot-outline"></div>
        <div class="cursor-dot"></div>

        <Appbar onTabChange={handleTabChange} activeTab={activeTab} />

          <section ref={aboutRef} id="about">
            <About />
          </section>
          <section ref={skillsRef} id="skills">
            <Skills />
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
          <section ref={contactRef} id="contact">
            <Contact />
          </section>
      </div>
  );
};

export default Home;
