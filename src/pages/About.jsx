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
                    <p>Hey, I'm Jessica! I'm a recent Computer Science and Mathematics graduate from Northeastern University. I
                        am excited to broaden my technical skills as I navigate this industry, while hoping to share my knowledge to those not introducted to tech yet.

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