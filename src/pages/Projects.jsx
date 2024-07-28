import React from "react"
import Card from "../components/Card"
import spinder from "../assets/spinder.png";
import pomodoroTimer from "../assets/pomodoro_timer.png";
import Container from 'react-bootstrap/Container';

export default function Projects() {
    const spinder_desc = () => {
        return (
            <h6>A React web app that uses Spotify's Web API to suggest music recs based on users' top artists + tracks.
                As users listen to 30-second clips of tracks, they can heart them to directly add to their Liked Songs playlist on Spotify.
                Check it out <a href="https://spinder-listen.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}><em>here</em></a> !
            </h6>
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
                        image={spinder}
                        title="Spinder"
                        description={spinder_desc()}
                        link="https://github.com/jessicayu62/spinder" />
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