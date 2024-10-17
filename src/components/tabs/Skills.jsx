import React from "react";
import StackIcon from "tech-stack-icons";
import '../../styles/Home.css';
import '../../styles/card.css';

const skillData = [
    { name: "React", icon: "reactjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "js" },
    { name: "C++", icon: "c++" },
    { name: "Flutter", icon: "flutter" },
    { name: "NodeJS", icon: "nodejs" },
    { name: "Electron", icon: "electron" },
    { name: "Python", icon: "python" },
    { name: "Vue.js *", icon: "vuejs" },
    { name: "Tailwindcss*", icon: "tailwindcss" },
];

const Skills = () => (
    <div className="section colflex" style={{ maxHeight: "64svh" }}>
        <div className="section-header">
            <span className="line"></span>
            <span className="title">Skills</span>
            <span className="line"></span>
        </div>
        <div className="skill-content">
            {skillData.map((skill, index) => (
                <div className="card" key={index}>
                    <div className="card-info colflex">
                        <StackIcon className="stack-icon" name={skill.icon} />
                        <p className="title">{skill.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Skills;
