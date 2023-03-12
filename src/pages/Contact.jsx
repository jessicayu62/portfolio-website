import React from "react";
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin, FaReact, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Contact() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div id="contact">
            <div class="section-container">
                <h4>Contact Me</h4>
                <div class="contact-content">
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
                <div class="arrow-button">
                    <Button onClick={goToTop}>
                        <BsFillArrowUpCircleFill className="up-arrow" />
                    </Button>
                </div>
                <p><span>Made with <FaHeart className='footer-icon' /> using <FaReact className='footer-icon' /></span></p>
                <p>© Jessica Yu 2023</p>
            </div>
        </div>
    )
}