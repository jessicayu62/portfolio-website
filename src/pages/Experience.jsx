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
        icon: <img src={mercari} alt='mercari logo' style={{ paddingLeft: '8px', height: '100%' }} />,
        iconStyle: { boxShadow: '0 0 0 4px transparent' },
    };

    const timeline = [
        {
            icon: atlassianIcon,
            date: 'May - Aug 2023',
            title: 'Atlassian',
            subtitle: 'Incoming Software Engineer Intern',
            desc: '• TBD ☺',
        },
        {
            icon: dispatchIcon,
            date: 'Jan - May 2023',
            title: 'Dispatch Technologies',
            subtitle: 'Software Engineer Co-op',
            desc: '• Implementing new web app features on the front-end using ReactJS based on provided design specifications',
        },
        {
            icon: mercariIcon,
            date: 'Jan - Aug 2022',
            title: 'Mercari',
            subtitle: 'Software Engineer Co-op',
            desc: '• Built and operationalized ETL pipelines for third-party data ingestion while collaborating closely with business stakeholders',
        },
    ];

    return (
        <div id='experience'>
            <div class='section-container'>
                <h4>Experience</h4>
                <VerticalTimeline lineColor='#D0E8F2'>
                    {timeline.map((t, i) => {
                        const contentStyle = { background: '#D0E8F2', color: '#0e1111' }
                        const arrowStyle = { borderRight: '7px solid #D0E8F2' }

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
                                        <h2 className="vertical-timeline-element-title">{t.title}</h2>
                                        {t.subtitle && (
                                            <h3 className="vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h3>
                                        )}
                                        {t.desc && <p>{t.desc}</p>}
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