import React from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaLinkedinIn } from "react-icons/fa";
import SkillsSection from "../components/SkillsSection";

export default function Skills() {
    const languages = [
        {
            text: "Java",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Python",
            logo: <FaLinkedinIn />,
        },
        {
            text: "SQL",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Go",
            logo: <FaLinkedinIn />,
        },
        {
            text: "HTML",
            logo: <FaLinkedinIn />,
        },
        {
            text: "CSS",
            logo: <FaLinkedinIn />,
        },
        {
            text: "JavaScript",
            logo: <FaLinkedinIn />,
        },
        {
            text: "TypeScript",
            logo: <FaLinkedinIn />,
        },
    ];

    const libraries_frameworks = [
        {
            text: "Bootstrap",
            logo: <FaLinkedinIn />,
        },
        {
            text: "React",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Redux",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Jest",
            logo: <FaLinkedinIn />,
        },
        {
            text: "JUnit",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Pandas",
            logo: <FaLinkedinIn />,
        },
        {
            text: "NumPy",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Matplotlib",
            logo: <FaLinkedinIn />,
        },
    ];

    const platforms_tools = [
        {
            text: "Google Cloud Platform",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Docker",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Kubernetes",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Postman",
            logo: <FaLinkedinIn />,
        },
        {
            text: "PostgreSQL",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Apache Airflow",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Spinnaker",
            logo: <FaLinkedinIn />,
        },
        {
            text: "Braze",
            logo: <FaLinkedinIn />,
        },
    ];

    return (
        <div id='skills'>
            <div class="section-container">
                <h4>Skills</h4>
                <div class="tabs-container">
                <Tabs
                    defaultActiveKey="languages"
                    id="justify-tab-example"
                    className="mb-3"
                    // fill
                    justify
                >
                    <Tab eventKey="languages" title="Languages" tabClassName='tab'>
                        <SkillsSection content={languages} />
                    </Tab>
                    <Tab eventKey="libraries" title="Libraries + Frameworks" tabClassName='tab'>
                        <SkillsSection content={libraries_frameworks} />
                    </Tab>
                    <Tab eventKey="platforms" title="Platforms + Tools" tabClassName='tab'>
                        <SkillsSection content={platforms_tools} />
                    </Tab>
                </Tabs>
                </div>
            </div>
        </div>
    )
}