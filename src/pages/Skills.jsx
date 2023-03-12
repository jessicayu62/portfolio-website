import React from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SkillsSection from "../components/SkillsSection";
import java from "../assets/icons/java.png";
import python from "../assets/icons/python.webp";
import sql from "../assets/icons/sql.png";
import go from "../assets/icons/go.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import typescript from "../assets/icons/typescript.png";
import bootstrap from "../assets/icons/bootstrap.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import jest from "../assets/icons/jest.png";
import junit from "../assets/icons/junit.png";
import pandas from "../assets/icons/pandas.png";
import numpy from "../assets/icons/numpy.png";
import matplotlib from "../assets/icons/matplotlib.png";
import gcp from "../assets/icons/gcp.png";
import docker from "../assets/icons/docker.png";
import kubernetes from "../assets/icons/kubernetes.png";
import postman from "../assets/icons/postman.png";
import postgresql from "../assets/icons/postgresql.png";
import airflow from "../assets/icons/airflow.png";
import spinnaker from "../assets/icons/spinnaker.png";
import braze from "../assets/icons/braze.png";

export default function Skills() {
    const languages = [
        {
            text: "Java",
            logo: <img src={java} alt='java logo' style={{ height: '80px' }} />,
        },
        {
            text: "Python",
            logo: <img src={python} alt='python logo' style={{ height: '80px' }} />,
        },
        {
            text: "SQL",
            logo: <img src={sql} alt='sql logo' style={{ height: '80px' }} />,
        },
        {
            text: "Go",
            logo: <img src={go} alt='go logo' style={{ height: '80px' }} />,
        },
        {
            text: "HTML",
            logo: <img src={html} alt='html logo' style={{ height: '80px' }} />,
        },
        {
            text: "CSS",
            logo: <img src={css} alt='css logo' style={{ height: '80px' }} />,
        },
        {
            text: "JavaScript",
            logo: <img src={javascript} alt='javascript logo' style={{ height: '80px' }} />,
        },
        {
            text: "TypeScript",
            logo: <img src={typescript} alt='typescript logo' style={{ height: '80px' }} />,
        },
    ];

    const libraries_frameworks = [
        {
            text: "Bootstrap",
            logo: <img src={bootstrap} alt='bootstrap logo' style={{ height: '80px' }} />,
        },
        {
            text: "React",
            logo: <img src={react} alt='react logo' style={{ height: '80px' }} />,
        },
        {
            text: "Redux",
            logo: <img src={redux} alt='redux logo' style={{ height: '80px' }} />,
        },
        {
            text: "Jest",
            logo: <img src={jest} alt='jest logo' style={{ height: '80px' }} />,
        },
        {
            text: "JUnit",
            logo: <img src={junit} alt='junit logo' style={{ height: '80px' }} />,
        },
        {
            text: "Pandas",
            logo: <img src={pandas} alt='pandas logo' style={{ height: '80px' }} />,
        },
        {
            text: "NumPy",
            logo: <img src={numpy} alt='numpy logo' style={{ height: '80px' }} />,
        },
        {
            text: "Matplotlib",
            logo: <img src={matplotlib} alt='matplotlib logo' style={{ height: '80px' }} />,
        },
    ];

    const platforms_tools = [
        {
            text: "Google Cloud Platform",
            logo: <img src={gcp} alt='gcp logo' style={{ height: '80px' }} />,
        },
        {
            text: "Docker",
            logo: <img src={docker} alt='docker logo' style={{ height: '80px' }} />,
        },
        {
            text: "Kubernetes",
            logo: <img src={kubernetes} alt='kubernetes logo' style={{ height: '80px' }} />,
        },
        {
            text: "Postman",
            logo: <img src={postman} alt='postman logo' style={{ height: '80px' }} />,
        },
        {
            text: "PostgreSQL",
            logo: <img src={postgresql} alt='postgresql logo' style={{ height: '80px' }} />,
        },
        {
            text: "Apache Airflow",
            logo: <img src={airflow} alt='airflow logo' style={{ height: '80px' }} />,
        },
        {
            text: "Spinnaker",
            logo: <img src={spinnaker} alt='spinnaker logo' style={{ height: '80px' }} />,
        },
        {
            text: "Braze",
            logo: <img src={braze} alt='braze logo' style={{ height: '80px' }} />,
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