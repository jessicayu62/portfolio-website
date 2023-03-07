import React from "react"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import atlassian from "../assets/atlassian.png";
import dispatch from "../assets/dispatch.webp";
import mercari from "../assets/mercari.png";

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
            subtitle: 'Software Engineer Intern',
            desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
        },
        {
            icon: dispatchIcon,
            date: 'Jan - May 2023',
            title: 'Dispatch Technologies',
            subtitle: 'Software Engineer Co-op',
            desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
        },
        {
            icon: mercariIcon,
            date: 'Jan - Aug 2022',
            title: 'Mercari',
            subtitle: 'Software Engineer Co-op',
            desc: 'User Experience, Visual Design',
        },
    ];

    return (
        <div id='experience'>
            <div class='section-container'>
                <h4>Experience</h4>
                <VerticalTimeline lineColor='rgb(236, 206, 150)'>
                    {timeline.map((t, i) => {
                        const contentStyle = { background: '#85b0ce25', color: 'black' }
                        const arrowStyle = { borderRight: '7px solid #85b0ce25' }

                        return (
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.date}
                                {...t.icon}
                            >
                                {t.title ? (
                                    <React.Fragment>
                                        <h3 className="vertical-timeline-element-title">{t.title}</h3>
                                        {t.subtitle && (
                                            <h7 className="vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h7>
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