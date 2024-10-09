import React from "react";
import StackIcon from "tech-stack-icons";

import '../../styles/Home.css'
import '../../styles/card.css'

const Skills = () => (
    <div className="section"style={{height: "54vh"}}>
        <div className="section-header">
            <span className="line"></span>
            <span className="title">Skills</span>
            <span className="line"></span>
        </div>
        <div className="skill-content">
            <div class="card">
                <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="reactjs" />    
                    <p class="title">React</p>
                </div>
            </div>
            <div class="card">
                <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="typescript" />
                    <p class="title">TypeScript</p> 
                </div>
            </div>
            <div class="card">
            <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="html5" /> 
                    <p class="title">HTML</p>
                </div>
            </div>
            <div class="card">
            <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="css3" />
                    <p class="title">CSS</p> 
                </div>
            </div>
            <div class="card">
            <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="js"/> 
                    <p class="title">JavaScript</p>
                </div>
            </div>
            <div class="card">
                <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="c++" /> 
                    <p class="title">C++</p>
                </div>
            </div>
            <div class="card">
                <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="flutter" /> 
                    <p class="title">Flutter</p>
                </div>
            </div>
            <div class="card">
                <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="nodejs" />
                    <p class="title">NodeJS</p> 
                </div>
            </div>
            <div class="card">
                <div class="card-info colflex">
                <StackIcon className="stack-icon" name="threejs"/>
                    <p class="title">ThreeJS</p>
                </div>
            </div>
            <div class="card">
                <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="electron" /> 
                    <p class="title">Electron</p>
                </div>
            </div>
            <div class="card">
                <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="python" />
                    <p class="title">Python</p> 
                </div>
            </div>
            <div class="card">
                <div class="card-info colflex">
                    <StackIcon className="stack-icon" name="materialui" />
                    <p class="title">MaterialUI</p> 
                </div>
            </div>
        </div>
    </div>
);
export default Skills;