import React from "react";
import { SiInstagram,SiLinkedin} from "react-icons/si";
import { TbBrandGmail } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { FiDownload } from "react-icons/fi";
import '../../styles/content.css';

const Contact = () => (
    <div className="section" style={{maxHeight: "34vh",backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
        <div className="contact-background"></div>
        <div className="section-header">
            <span className="line"></span>
            <span className="title">Contact</span>
            <span className="line"></span>
        </div>
            <div className="contact-block">
                <div className="tile colflex" style={{ border:0 }}>
                    <h2>Wanna Discuss a New Project?</h2>
                </div>
                <div className="tile colflex">
                    <h2 style={{color:"#eb79b2"}}>Get In Touch!!</h2>
                    
                    <div className="social-icons">
                        <a href="https://github.com/shivi2408" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="github" size={25} />
                        </a>
                        <a href="https://www.instagram.com/shivangi_24_08" target="_blank" rel="noopener noreferrer">
                            <SiInstagram id="ig" size={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/shivangi-verma-8966271a4" target="_blank" rel="noopener noreferrer">
                            <SiLinkedin id="linkedin" size={25} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivangi.24.verma@gmail.com" target="_blank" rel="noopener noreferrer">
                            <TbBrandGmail id="gmail" size={26} />
                        </a>
                    </div>
                    <button className="button-74">
                      <a href="../../Shivangi_Verma.pdf" download="Shivangi_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Resume <FiDownload size={20}/>
                      </a>
                    </button>
                </div>
            </div>
        </div>
);

export default Contact;
