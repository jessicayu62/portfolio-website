import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function Home() {
    return (
        <div id='home'>
            <div class="home-section">
                <div class='home-content'>
                    <h1>Hello, I'm Jessica Yu.</h1>
                    <h2>BS Computer Science and Mathematics</h2>
                    <div class='social_icons'>
                        <a href="https://www.linkedin.com/in/jessicayu62/" target="_blank" rel="noopener noreferrer" class='icon'>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/jessicayu62" target="_blank" rel="noopener noreferrer" class='icon'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <a href="#about" class='down-arrow'>
                    <BsFillArrowDownCircleFill />
                </a>
            </div>
        </div>
    )
}