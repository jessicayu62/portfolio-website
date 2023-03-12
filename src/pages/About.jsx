import React from "react"
import profile from "../assets/prof_pic.JPG";
import Image from 'react-bootstrap/Image'

export default function About() {
    return (
        <div id="about">
            <div class="section-container about-section">
                <Image roundedCircle src={profile} alt="Jessica Yu"
                    className="prof-pic" />
                <div class="about-content">
                    <h4>About Me</h4>
                    <p>Hey! I'm a third-year at Northeastern University majoring in Computer Science and Mathematics. I
                        am seeking to broaden my technical knowledge by applying my in-class learning to real-life
                        experiences.

                        I enjoy seeing my programs come to life as I develop them into visually pleasing,
                        easy-to-use applications.
                    </p>
                    <a href='https://drive.google.com/file/d/126385FcCSCoIQ4JZGJRlJ7vmF4WbN_Qw/view?usp=sharing' target="_blank"
                        rel="noopener noreferrer" class="button-style">Download Resume</a>
                </div>

            </div>
        </div>
    )
}