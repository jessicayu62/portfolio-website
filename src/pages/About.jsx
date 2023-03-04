import React from "react"
import profile from "../assets/prof_pic.JPG";

export default function About() {
    return (
        <div id="about">
            <div class="about-container">
                <img src={profile} alt="Jessica Yu" class="rounded-circle prof-pic" />

                <div class="about-content">
                    <h4>About Me</h4>
                    <p>Hey! I'm a third-year at Northeastern University majoring in Computer Science and Mathematics. I
                        am seeking to broaden my technical knowledge by applying my in-class learning to real-life
                        experiences.
                        I love discovering how programming languages differ and what each is capable of.
                        I especially enjoy seeing my programs come to life as I develop them into visually pleasing,
                        easy-to-use applications.
                    </p>
                    <a href='https://drive.google.com/file/d/126385FcCSCoIQ4JZGJRlJ7vmF4WbN_Qw/view?usp=sharing' target="_blank"
                        rel="noopener noreferrer" class="resume-button">Download Resume</a>
                </div>

            </div>
        </div>
    )
}