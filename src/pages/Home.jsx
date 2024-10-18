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
// import sun from '../assets/sun.svg';
// import moon from '../assets/moon.svg'

const Home = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isChecked, setIsChecked] = useState(false);
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

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', savedTheme === 'dark');
    setIsChecked(savedTheme === 'light');
  }, []);

  const handleToggle = () => {
    const newTheme = isChecked ? 'dark' : 'light';
    document.body.classList.toggle('light-mode', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIsChecked(!isChecked);
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

          <div className="float">
            <label className="toggle" htmlFor="switch">
              <input id="switch" className="input" type="checkbox" checked={isChecked} onChange={handleToggle}/>
              <div className={`icon icon--moon ${isChecked ? 'hidden' : ''}`}>
                <img src={process.env.PUBLIC_URL + '/moon.svg'} alt="moon icon" />
              </div>
              <div className={` icon icon--sun ${isChecked ? '' : 'hidden'}`}>
                <img src={process.env.PUBLIC_URL + '/sun.svg'} alt="sun icon" />
              </div>
            </label>
          </div>
      </div>
  );
};

export default Home;