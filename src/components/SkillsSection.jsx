import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

export default function SkillsSection({ content }) {
    return (
        <div class='skills-container'>
            <div class='skills-content'>
                {content.map(({ text, logo }, index) => (
                    // return (
                    <div class='skill'>
                        <div class='skill-icon'>{logo}</div>
                        <div class='skill-text'>{text}</div>
                    </div>
                )

                )}
            </div>
        </div>
    )
}