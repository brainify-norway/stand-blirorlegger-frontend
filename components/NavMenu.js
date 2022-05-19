import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            src="/logo-blir-rorlegger.svg"
                            alt="Picture of the author"
                            width={70}
                            height={70}
                        />
                    </Navbar.Brand>
<<<<<<< Updated upstream
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Forsiden</Nav.Link>
                            <Nav.Link href="#link">Arbeidsliv</Nav.Link>
                            <Nav.Link href="#link">Kontakt oss</Nav.Link>
                            <Nav.Link href="#link">Våre ambassadører</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
=======
                    <div className="hamburger-dropdown">
                        <div
                            className={open ? "close-btn" : "open-btn"}
                            onClick={() => setOpen(!open)}
                            aria-controls="nav-menu"
                            aria-expanded={open}
                        >
                            <HiOutlineMenuAlt3 className="open-icon" />
                            <GrFormClose className="close-icon" />
                        </div>
                        <Collapse in={open}>
                           <Nav id="nav-menu">
                                <Link href="/">Forsiden</Link>
                                <Link href="/">Arbeidsliv</Link>
                                <Link href="/">Kontakt oss</Link>
                                <Link href="/">
                                    Våre ambassadører
                                </Link>
                            </Nav>
                        </Collapse>
                    </div>
>>>>>>> Stashed changes
                </Container>
            </Navbar>
        </>
    );
};

export default NavMenu;
