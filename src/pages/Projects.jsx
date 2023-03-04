import React from "react"

export default function Projects() {
    return (
        <div id="projects">
            <h3>Projects</h3>
			<div id="project-content">
				<div class="container project-container">
					<h5>Portfolio</h5>
					<a href="https://github.com/jessicayu62/jessicayu62.github.io" target="_blank" rel="noopener noreferrer" >
						{/* <img src="assets/images/portfolioLandingPage.png" alt="Portfolio project landing page"
							class="img-fluid project-pic"/> */}
					</a>
					<h6>A portfolio created with HTML, CSS, JS, and jQuery to showcase my projects and information.
						Through
						Bootstrap, this website is responsive and adapts to various devices and screen sizes. This
						project will continue to be updated as I expand my skill set.
					</h6>
				</div>
				<div class="container project-container">
					<h5>Pomodoro Timer</h5>
					<a href="https://github.com/jessicayu62/pomodoro-timer" target="_blank" rel="noopener noreferrer" >
						{/* <img src="assets/images/pomodoroTimerProject.png" alt="Pomodoro timer landing page"
							class="img-fluid project-pic"/> */}
					</a>
					<h6>A timer that follows the pomodoro technique, a time management method that increases focus and
						decreases
						mental exhaustion. Built with Java and JavaFX, users can control the timer
						and add tasks to complete during work sessions.</h6>
				</div>
			</div>
        </div>
    )
}