import React from "react";

import '../../styles/Home.css'
const Projects = () => (
    <div className="section">
        <div className="section-header">
                <span className="line"></span>
                <span className="title">Projects</span>
                <span className="line"></span>
        </div>
        <div className="project-block">
            <div class="terminal" >
                <div class="header">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                    <div class="header-title">Terminal</div>
                </div>
                <div class="output">
                    <p>shivi@github:~$ echo </p>
                </div>
            </div>
            <div class="terminal" >
                <div class="header">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                    <div class="header-title">Terminal</div>
                </div>
                <div class="output">
                    <p>shivi@github:~$ echo </p>
                </div>
            </div>
            <div class="terminal">
                <div class="header">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                    <div class="header-title">Terminal</div>
                </div>
                <div class="output">
                    <p>shivi@github:~$ echo </p>
                </div>
            </div>
            <div class="terminal" >
                <div class="header">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                    <div class="header-title">Portfolio</div>
                </div>
                <div class="output">
                    <p>shivi@github:~$ echo </p>
                </div>
            </div>
            <div class="terminal">
                <div class="header">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                    <div class="header-title">The Wall</div>
                </div>
                <div class="output">
                    <p>shivi@github:~$ echo </p>
                </div>
            </div>
            <div class="terminal">
                <div class="header">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                    <div class="header-title">Terminal</div>
                </div>
                <div class="output">
                    <p>shivi@github:~$ echo </p>
                </div>
            </div>
            
        </div>
        <a href="https://github.com/shivi2408?tab=repositories" style={{textDecoration:"none",fontSize:"20px",marginTop:"5vh",color:"#eb79b2"}}>+ See More</a>
    </div>
);
export default Projects;