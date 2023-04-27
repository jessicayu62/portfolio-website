import React from "react"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import atlassian from "../assets/icons/atlassian.png";
import dispatch from "../assets/icons/dispatch.webp";
import mercari from "../assets/icons/mercari.png";

export default function Experience() {
    const atlassianIcon = {
        icon: <img src={atlassian} alt='atlassian logo' style={{ height: '100%' }} />,
        iconStyle: { boxShadow: '0 0 0 4px transparent' },
    };

    const dispatchIcon = {
        icon: <img src={dispatch} alt='dispatch logo' style={{ paddingLeft: '4px', height: '100%' }} />,
        iconStyle: { boxShadow: '0 0 0 4px transparent' },
    };

    const mercariIcon = {
        icon: <img src={mercari} alt='mercari logo' style={{ paddingLeft: '9px', height: '100%' }} />,
        iconStyle: { boxShadow: '0 0 0 4px transparent' },
    };

    const timeline = [
        {
            icon: atlassianIcon,
            date: 'May - Aug 2023',
            title: 'Incoming Software Engineer Intern',
            subtitle: 'Atlassian',
            desc1: '• TBD ☺',
        },
        {
            icon: dispatchIcon,
            date: 'Jan - May 2023',
            title: 'Software Engineer Co-op',
            subtitle: 'Dispatch Technologies',
            desc1: '• Developing new web app features using ReactJS and Redux based on provided design specifications',
            desc2: '• Implementing Update operations using GORM library and adding permission restrictions in Golang to ensure API requests are properly authenticated',

        },
        {
            icon: mercariIcon,
            date: 'Jan - Aug 2022',
            title: 'Software Engineer Co-op',
            subtitle: 'Mercari',
            desc1: '• Rotated through various teams including CRM and User Acquisition (UA) Backend Engineering, Machine Learning, and UA Data Engineering',
            desc2: '• Built and refactored ETL pipelines utilized for third-party data ingestion while collaborating closely with business stakeholders',
        },
    ];

    return (
        <div id='experience'>
            <div class='section-container'>
                <h4>Experience</h4>
                <VerticalTimeline lineColor='#E2D1F9'>
                    {timeline.map((t, i) => {
                        const contentStyle = { background: '#E2D1F9', color: '#0e1111' }
                        const arrowStyle = { borderRight: '7px solid #E2D1F9' }

                        return (
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.date}
                                dateClassName="date-styling"
                                {...t.icon}
                            >
                                {t.title ? (
                                    <React.Fragment>
                                        <h7 className="vertical-timeline-element-title">{t.title}</h7>
                                        {t.subtitle && (
                                            <h3 className="vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h3>
                                        )}
                                        {t.desc1 && <p>{t.desc1}</p>}
                                        {t.desc2 && <p>{t.desc2}</p>}
                                    </React.Fragment>
                                ) : undefined}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </div>
    )
}