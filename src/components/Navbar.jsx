import { Nav, Navbar, Container } from 'react-bootstrap'

export default function Navigation() {
    // const navItems = [
    //   {
    //     name: 'About',
    //     href: '#about',
    //   },
    //   {
    //     name: 'Education',
    //     href: '#education',
    //   },
    //   {
    //     name: 'Experience',
    //     href: '#experience',
    //   },
    //   {
    //     name: 'Skills',
    //     href: '#skills',
    //   },
    //   {
    //     name: 'Projects',
    //     href: '#projects',
    //   },
    //   {
    //     name: 'Achievements',
    //     href: '#achievements',
    //   },
    //   {
    //     name: 'Contact',
    //     href: '#contact',
    //   },
    // ]

    return (
        <Navbar className="nav-style" collapseOnSelect sticky="top" expand='sm'>
            <Container>
                <Navbar.Brand href="#home" className="logo">JY</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
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