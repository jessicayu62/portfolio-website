import React from "react"
import { FaGithub, FaLinkedin, FaReact, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Contact() {
    return (
        <div id="contact">
            <div class="section-container">
                <div id="contact-content">
                    <h4>Contact Me</h4>
                    <div class='social_icons'>
                        <a href="https://www.linkedin.com/in/jessicayu62/" target="_blank" rel="noopener noreferrer" class='icon'>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/jessicayu62" target="_blank" rel="noopener noreferrer" class='icon'>
                            <FaGithub />
                        </a>
                        <a href="mailto:jessicayu62@gmail.com" target="_blank" rel="noopener noreferrer" class='icon'>
                            <MdEmail />
                        </a>
                    </div>
                </div>
            </div>

            <div id="footer-section">
                <div>
                    <a href="#home">
                        <BsFillArrowUpCircleFill className="up-arrow"/>
                    </a>
                </div>
                <p><span>Made with <FaHeart className='footer-icon' /> using <FaReact className='footer-icon' /></span></p>
                <p id="footer-sub">© Jessica Yu 2023</p>
            </div>
        </div>
    )
}