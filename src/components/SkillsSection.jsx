export default function SkillsSection({ content }) {
    return (
        <div class='skills-container'>
            <div class='skills-content'>
                {content.map(({ text, logo }) => (
                    <div class='skill'>
                        <div class='skill-icon'>{logo}</div>
                        <div class='skill-text'>{text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}