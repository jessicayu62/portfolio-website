import { Nav, Navbar, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export default function Navigation() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Navbar className="nav-style" collapseOnSelect sticky="top" expand='sm'>
            <Container>
                <Navbar.Brand>
                    <Button onClick={goToTop} className="logo">
                        JY
                    </Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse className="responsive-navbar-nav justify-content-end">
                    <Nav>
                        <Nav.Link href="#about" className="nav-option">About</Nav.Link>
                        <Nav.Link href="#experience" className="nav-option">Experience</Nav.Link>
                        <Nav.Link href="#projects" className="nav-option">Projects</Nav.Link>
                        <Nav.Link href="#skills" className="nav-option">Skills</Nav.Link>
                        <Nav.Link href="#contact" className="nav-option">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}