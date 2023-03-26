import React from "react"
import SocialIcons from "../components/SocialIcons"
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function Home() {
    return (
        <div id='home'>
            <div class="home-section">
                <div class='home-content'>
                    <h1>Hello, I'm Jessica Yu.</h1>
                    <h2>BS Computer Science and Mathematics</h2>
                    <div>
                        <SocialIcons />
                    </div>
                </div>
                <a href="#about" class='down-arrow'>
                    <BsFillArrowDownCircleFill />
                </a>
            </div>
        </div>
    )
}