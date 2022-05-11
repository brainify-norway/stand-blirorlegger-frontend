import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const NavMenu = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        {" "}
                        <Image
                            src="/logo-blir-rorlegger.svg"
                            alt="Picture of the author"
                            width={70}
                            height={70}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Forsiden</Nav.Link>
                            <Nav.Link href="#link">Arbeidsliv</Nav.Link>
                            <Nav.Link href="#link">Kontakt oss</Nav.Link>
                            <Nav.Link href="#link">Våre ambassadører</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavMenu;
