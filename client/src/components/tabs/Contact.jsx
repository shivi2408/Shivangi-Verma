import React from "react";


import { SlSocialGithub,SlSocialFacebook, SlSocialLinkedin,SlSocialGoogle } from "react-icons/sl";

import '../../styles/content.css'
const Contact = () => (
    <div className="section" style={{maxHeight: "40vh",backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
        <div className="section-header">
                <span className="line"></span>
                <span className="title">Contact</span>
                <span className="line"></span>
        </div>
        <div className="grid">
            <div className="contact-block">
                <div className="tile">
                  <h2>Get In Touch!!</h2>
                </div>
                <div className="tile">
                  <h3>Contact me</h3>
                  <div className="social-icons">
                    <SlSocialGithub size={25}/>
                    <SlSocialFacebook size={25}/>
                    <SlSocialLinkedin size={25}/>
                    <SlSocialGoogle size={25}/>
                  </div>
                </div>
            </div>
        </div>
    </div>
);
export default Contact;