import React, { useState } from "react";
import '../../styles/Home.css';

import { HiOutlineLink } from "react-icons/hi";

const Projects = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleTerminalClick = (index) => {
        setClickedIndex(clickedIndex === index ? null : index); // Toggle click effect
    };

    return (
        <div className="section colflex">
            <div className="section-header">
                <span className="line"></span>
                <span className="title">Projects</span>
                <span className="line"></span>
            </div>
            <div className="project-block">
                {[{
                    title: 'Qloud Backups',
                    description: 'A comprehensive account backup and restore solution for Quickbooks, enabling real-time change tracking and facilitating precise restoration of entities to specific dates and times.',
                    link: 'https://bytq.azurewebsites.net/home',
                    className: 'bg1',
                }, {
                    title: 'Qloud AI',
                    description: 'An AI-powered application for invoice and receipt processing, bank reconciliation, invoice reminders, and payment scheduling of quickbooks using Azure. Also integrated a chatbot for queries related to quickbooks data.',
                    link: 'http://intuitai.azurewebsites.net/home',
                    className: 'bg2',
                }, {
                    title: 'QBO Electron app',
                    description: 'Developed Electron applications, including a QuickBooks Online app with enhanced features like automated report backups, and a file-sharing/viewing app utilizing GitHub repositories, both prepared for RD Webclient.',
                    link: 'https://shivi2408.github.io/Shivangi-Verma/',
                    className: 'bg3',
                }, {
                    title: 'Portfolio',
                    description: 'This project is to provide a wide range of information about my career in the development world, serving as an extension of my resume.',
                    link: 'https://shivi2408.github.io/Shivangi-Verma/',
                    className: 'bg4',
                }, {
                    title: 'The Wall',
                    description: 'Developed public msg app for ios and android. User can register through email and type at the wall.',
                    link: 'https://github.com/shivi2408/The-Wall',
                    className: 'bg5',
                }, {
                    title: 'RDP *',
                    description: 'Engineered a fast and memory-safe Remote Desktop Protocol (RDP) using Rust, leveraging the Windows API for secure authentication and real-time screen sharing',
                    link: 'https://github.com/shivi2408/The-Wall',
                    className: 'bg6',
                }].map((project, index) => (
                    <div
                        key={index}
                        className={`terminal ${project.className} ${clickedIndex === index ? 'clicked' : ''}`}
                        onClick={() => handleTerminalClick(index)}
                    >
                        <div className="header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                            <div className="header-title">{project.title}</div>
                        </div>
                        <div className="output" style={{ color: "black" }}>
                            <p>{project.description}</p>
                            <a href={project.link} className="live-link" target="_blank" rel="noopener noreferrer">
                                <HiOutlineLink /> Live
                            </a>
                        </div>
                    </div>
                ))}
                <a href="https://github.com/shivi2408?tab=repositories" style={{ textDecoration: "none", fontSize: "20px", justifyContent: "flex-start" }}>+ See More</a>
            </div>
        </div>
    );
};

export default Projects;
