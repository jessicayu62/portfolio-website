import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialIcons() {
    return (
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
    )
}