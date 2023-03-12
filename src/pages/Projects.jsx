import React from "react"
import Card from "../components/Card"
import portfolio from "../assets/portfolio.png";
import pomodoroTimer from "../assets/pomodoro_timer.png";
import Container from 'react-bootstrap/Container';

export default function Projects() {
    const portfolio_desc = () => {
        return (
            <h6>A portfolio created with React and Bootstrap to showcase my experience, projects, and more.
                Click <a href="https://jessicayu62.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}><em>here</em></a> to view my original website before revamping to what you see now!
                This project will continue to be updated as I expand my skill set.</h6>
        )
    };

    const pomodoro_desc = () => {
        return (
            <h6>A timer that follows the pomodoro technique, a time management method that increases focus and
                decreases mental exhaustion. Built with Java and JavaFX, users can control the timer
                and add tasks to complete during work sessions.</h6>
        )
    };

    return (
        <div id="projects">
            <div class="section-container">
                <h4>Projects</h4>
                <Container className="project-content">
                    <Card
                        image={portfolio}
                        title="Portfolio"
                        description={portfolio_desc()}
                        link="https://github.com/jessicayu62/portfolio-website" />
                    <Card
                        image={pomodoroTimer}
                        title="Pomodoro Timer"
                        description={pomodoro_desc()}
                        link="https://github.com/jessicayu62/pomodoro-timer" />
                </Container>
            </div>
        </div>
    )
}