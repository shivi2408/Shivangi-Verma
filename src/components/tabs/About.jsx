import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation';

import '../../styles/content.css'; 
import profile from '../../assets/profile.png'

function IconButton({ children }) {
  return (
    <button className="Btn">
      <span className="svgContainer">{children}</span>
      <span className="BG"></span>
    </button>
  );
}

const About = () => (
  <div className="section colflex">
    {/* <div className="blur-background"></div> */}

    <div className="arrow arrow--top">
      <svg xmlns="http://www.w3.org/2000/svg" width="270.11" height="649.9" overflow="visible">
        <style>
          {`.geo-arrow { fill: none; stroke: var(--text-white); stroke-width: 2; stroke-miterlimit: 10; }`}
        </style>
        <g className="item-to bounce-1">
          <path className="geo-arrow draw-in" d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z" />
        </g>
        <circle className="geo-arrow item-to bounce-2" cx="194.65" cy="69.54" r="7.96" />
        <circle className="geo-arrow draw-in" cx="194.65" cy="39.5" r="7.96" />
        <circle className="geo-arrow item-to bounce-3" cx="194.65" cy="9.46" r="7.96" />
        <g className="geo-arrow item-to bounce-2">
          <path className="st0 draw-in" d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552" />
        </g>
      </svg>
    </div>

    <div className="arrow arrow--bottom">
      <svg xmlns="http://www.w3.org/2000/svg" width="31.35" height="649.9" overflow="visible">
        <style>
          {`.geo-arrow { fill: none; stroke: var(--text-white); stroke-width: 2; stroke-miterlimit: 10; }`}
        </style>
        <g className="item-to bounce-1">
          <circle className="geo-arrow item-to bounce-3" cx="15.5" cy="580.36" r="7.96" />
          <circle className="geo-arrow draw-in" cx="15.5" cy="610.4" r="7.96" />
          <circle className="geo-arrow item-to bounce-2" cx="15.5" cy="640.44" r="7.96" />
          <g className="item-to bounce-2">
            <path className="geo-arrow draw-in" d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552" />
          </g>
        </g>
      </svg>
    </div>

    <div className="section-header">
      <span className="line"></span>
      <span className="title">About Me</span>
      <span className="line"></span>
    </div>

    <div className="content-block">
      <div className="tile colflex" style={{ border: 0 }}>
        <h1>Hi, It's Shivangi</h1>
        <h2>
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Frontend Developer", 1000,
              "Software Engineer", 1000,
              "Programmer", 1000,
            ]}
            speed={50}
            repeat={Infinity}
            style={{ color: "var(--button-color)" }}
          />
        </h2>

        <div className="social-icons" style={{ marginLeft: "5px" }}>
          <a href="https://github.com/shivi2408" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <VscGithub size={25} />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/shivangi_24_08" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <SiInstagram size={25} />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/shivangi-verma-8966271a4" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <SiLinkedin size={25} />
            </IconButton>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shivangi.24.verma@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <BiLogoGmail size={26} />
            </IconButton>
          </a>
        </div>

        <button class="button">
          <div class="button-overlay"></div>
          <a href="../../Shivangi_Verma.pdf" download="Shivangi_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
            Resume <FiDownload size={20} />
          </a>
        </button>
      </div>

      <div className="tile colflex" style={{ border: 0 }}>
      <img src={profile} alt="gif" style={{ width: "100%", height: "100%" , alignSelf: "center",marginTop:"2vh"}} />
      </div>
    </div>

    <div className="main">
      <div className="main__text-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" className="dotted-circle" width="352" height="352" overflow="visible">
          <circle cx="176" cy="176" r="174" fill="none" stroke="var(--text-white)" strokeWidth="2" strokeMiterlimit="10" strokeDasharray="12.921,11.9271" />
        </svg>
      </div>
    </div>
  </div>
);

export default About;
