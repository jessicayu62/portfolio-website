import React from "react"
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Home() {
    return (
        <div id='home'>
            <h1>Hello, I'm Jessica Yu.</h1>
            <h2>BS Computer Science and Mathematics</h2>
            <div class='social_icons'>
                <a href="https://www.linkedin.com/in/jessicayu62/" target="_blank" rel="noopener noreferrer" class='icon'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/jessicayu62" target="_blank" rel="noopener noreferrer" class='icon'>
                    <FaGithub />
                </a>
                {/* <a href="mailto:jessicayu62@gmail.com" target="_blank" rel="noopener noreferrer" class='icon'>
                    <FaMailBulk />
                </a> */}
            </div>
        </div>
    )
}