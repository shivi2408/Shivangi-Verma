import React from "react";

import '../../styles/Home.css'
import expGif from '../../assets/exp.gif'

const Experience = () => (
    <div className="section colflex">
        <div className="section-header" style={{marginTop:"4vh"}}>
                <span className="line"></span>
                <span className="title">Experience</span>
                <span className="line"></span>
        </div>
        <div className="rowflex" style={{marginLeft:"-10svw",marginTop:"9svh",gap:"3svw"}}>
        <img src={expGif} alt="gif" style={{ width: "38svw", height: "55svh" , alignSelf: "center"}} />
            <div className="exp-card colflex">
                <div className="glow-container">
                    <article className="glow-card">
                        <h4>(Oct 2023 - Present)</h4>
                        <h2>Software Developer</h2>
                        <p>Katalyst Business Solutions, Navi Mumbai</p>
                    </article>
                </div>
                <div className="glow-container">
                    <article className="glow-card">
                        <h4>(June 2021 - July 2021)</h4>
                        <h2>Vocational Training</h2>
                        <p>Hindustan Aeronautics Limited, Lucknow</p>
                    </article>
                </div>
                <div className="glow-container">
                    <article className="glow-card">
                            <h4>(May 2021 - July 2021)</h4>
                            <h2>SDE Intern</h2>
                            <p>Beat the Virus Startup, Lucknow</p>
                        </article>
                </div>
            </div>
        </div>
    </div>
);
export default Experience;