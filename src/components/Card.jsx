import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

export default function Card({ image, title, description, link }) {
    return (
        <Container fluid className='project-container'>
            <h5>{title}</h5>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Image fluid src={image} alt="Github project repo"
                    className="project-pic" />
            </a>
            <h6>{description}</h6>
        </Container>
    )
}