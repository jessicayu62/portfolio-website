import React from "react"
import Card from "../components/Card"
import portfolio from "../assets/portfolio.png";
import pomodoroTimer from "../assets/pomodoro_timer.png";
import Container from 'react-bootstrap/Container';

export default function Projects() {
    return (
        <div id="projects">
            <div class="section-container">
                <h4>Projects</h4>
                <Container className="project-content">
                    <Card
                        image={portfolio}
                        title="Portfolio"
                        description="A portfolio created with HTML, CSS, JS, and jQuery to showcase my projects and information.
						Through Bootstrap, this website is responsive and adapts to various devices and screen sizes. This
						project will continue to be updated as I expand my skill set."
                        link="https://github.com/jessicayu62/jessicayu62.github.io" />
                    <Card
                        image={pomodoroTimer}
                        title="Pomodoro Timer"
                        description="A timer that follows the pomodoro technique, a time management method that increases focus and
						decreases mental exhaustion. Built with Java and JavaFX, users can control the timer
						and add tasks to complete during work sessions."
                        link="https://github.com/jessicayu62/pomodoro-timer" />
                </Container>
            </div>
        </div>
    )
}