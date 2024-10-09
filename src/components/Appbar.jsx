import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import '../styles/Appbar.css'
const Appbar = ({ activeTab, onTabChange }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const tabs = ["About", "Experience","Education", "Projects" ,"Skills", "Contact"];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="appbar">
            <div className="app-content">
                <div className="rowflex">
                <h3>/.Shivangi</h3>
                <h3 style={{color:"#7c3aed", marginLeft:0}}>Verma ./</h3>
                </div>
            
            <ul className="tab-list">
                {tabs.map((tab) => (
                    <li
                        key={tab}
                        className={`tab-item ${activeTab === tab ? "active" : ""}`}
                        onClick={() => onTabChange(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>

            {!isSidebarOpen && (
                    <div className="hamburger" onClick={toggleSidebar}>
                        <GiHamburgerMenu />
                    </div>
                )}
            </div>

            <div className="divider-container">
                <div className="divider gradient-left"></div>
                <div className="divider gradient-right"></div>
            </div>


            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="close-icon" onClick={closeSidebar}>
                     <IoClose />
                </div>
                <ul className="sidebar-tabs">
                    {tabs.map((tab) => (
                        <li
                            key={tab}
                            className={`sidebar-item ${activeTab === tab ? "active" : ""}`}
                            onClick={() => {
                                onTabChange(tab);
                                setIsSidebarOpen(false); 
                            }}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
            </div>
            {isSidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar}></div>}
            </div>
    );
};

export default Appbar;

