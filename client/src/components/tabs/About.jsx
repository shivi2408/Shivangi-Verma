import React from "react";

import '../../styles/Home.css';

const About = () => (
    <div className="section">
        <div className="blur-background"></div>
        <div className="section-header">
            <span className="line"></span>
            <span className="title">About Me</span>
            <span className="line"></span>
        </div>
        <div className="glow-container">
            <article className="glow-card">
        <div className="glows"></div>
        <p>This is the about section content...</p>
        </article>
        </div>
    </div>
);
export default About;
