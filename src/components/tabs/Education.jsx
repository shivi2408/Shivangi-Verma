import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineSchool } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";

import '../../styles/content.css'

const Education = () => {

return(
    <div className="section colflex">
        <div className="section-header">
                <span className="line"></span>
                <span className="title">Education</span>
                <span className="line"></span>
        </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentArrowStyle={{ borderRight: '7px solid var(--button-color)' }}
                date="2015 - 2016"
                iconStyle={{ background: 'var(--icon-color)', color: 'var(--text-white)', boxShadow: '0 0 10px rgba(22, 119, 255, 0.5)', width: '60px', height: '60px',borderRadius: '50%' }}
                icon={<LiaSchoolSolid />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"var(--heading)"}}>Secondary (CBSE)</h3>
                <h4 className="vertical-timeline-element-subtitle">Rani Laxmi Bai Memorial School, Chinhat, Lucknow</h4>
                <p> CGPA : 10 </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentArrowStyle={{ borderRight: '7px solid var(--button-color)' }}
                date="2017 - 2018"
                iconStyle={{ background: 'var(--icon-color)', color: 'var(--text-white)', boxShadow: '0 0 10px rgba(22, 119, 255, 0.5)', width: '60px', height: '60px',borderRadius: '50%' }}
                icon={<LiaSchoolSolid />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"var(--heading)"}}>Senior Secondary (CBSE)</h3>
                <h4 className="vertical-timeline-element-subtitle">Rani Laxmi Bai Memorial School, Chinhat, Lucknow</h4>
                <p> Percentage : 91% </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentArrowStyle={{ borderRight: '7px solid var(--button-color)' }}
                date="2019 - 2023"
                iconStyle={{ background: 'var(--icon-color)', color: 'var(--text-white)', boxShadow: '0 0 10px rgba(22, 119, 255, 0.5)', width: '60px', height: '60px',borderRadius: '50%' }}
                icon={<MdOutlineSchool />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"var(--heading)"}}>B.Tech in Information Technology</h3>
                <h4 className="vertical-timeline-element-subtitle">Indian Institute of Information Technology, Allahabad</h4>
                <p> SGPA : 7.63 </p>
            </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
);
};
export default Education;