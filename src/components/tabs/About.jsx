import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiInstagram,SiLinkedin} from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import '../../styles/content.css';

const About = () => (
    <div className="section">
        <div className="blur-background"></div>
        <div className="section-header">
            <span className="line"></span>
            <span className="title">About Me</span>
            <span className="line"></span>
        </div>
            <div className="content-block">
                <div className="tile colflex" style={{border:0}}>
                <h1>Hi, It's Shivangi</h1>
                <h2>I'm a Frontend Developer</h2>
                <div className="social-icons" style={{marginLeft:"5px"}}>
                        <a href="https://github.com/shivi2408" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="github" size={25} />
                        </a>
                        <a href="https://www.instagram.com/shivangi_24_08" target="_blank" rel="noopener noreferrer">
                            <SiInstagram id="fb" size={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/shivangi-verma-8966271a4" target="_blank" rel="noopener noreferrer">
                            <SiLinkedin  id="linkedin" size={25} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivangi.24.verma@gmail.com" target="_blank" rel="noopener noreferrer">
                            <BiLogoGmail id="gmail" size={26} />
                        </a>
                </div>
                <button className="button-74">
                      <a href="../../Shivangi_Verma.pdf" download="Shivangi_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Resume <FiDownload size={20}/>
                      </a>
                    </button>
                </div>
                <div className="feature tile colflex"></div>
            </div>
    </div>
);
export default About;
