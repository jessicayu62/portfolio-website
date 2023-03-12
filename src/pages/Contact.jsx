import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin, FaReact, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vsl23ds',
            'template_pidvm1w',
            form.current,
            'lDWYwjV9CFRJOrQ12')
            .then((result) => {
                window.alert("Message sent!")
            }, (error) => {
                window.alert("Message failed to send, please try again.")
            });
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div id="contact">
            <div class="section-container contact-section">
                <h4>Contact</h4>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Let's get in touch!</h2>
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
                <div class="contact-content">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <label className="form-label">Name</label>
                        <input type="text" name="user_name" size={60} placeholder="Enter your name" />
                        <label className="form-label">Email</label>
                        <input type="email" name="user_email" placeholder="Enter your email" />
                        <label className="form-label">Message</label>
                        <textarea name="message" placeholder="Hello!" />
                        <div class="send-button">
                            <input type="submit" value="Send Email" className="button-style" />
                        </div>
                    </form>
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