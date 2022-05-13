import {
    Button,
    Card,
    Container,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { HiOutlineMenuAlt3 } from "react-icons/Hi";
import { GrClose } from "react-icons/Gr";
import NavBackground from "./navBackground";

const NavMenu = () => {
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);

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

                    <div className="dropdown">
                        <HiOutlineMenuAlt3
                            className="hamburger"
                            onClick={() => setOpen(!open)}
                            aria-controls="collapse-menu"
                            aria-expanded={open}
                        />

                        <Collapse in={open}>
                            <div id="collapse-menu">
                                <GrClose className="close"
                                    onClick={() => setOpen(!false)}
                                    aria-controls="collapse-menu"
                                    aria-expanded={open}

                                />
                                <Nav>
                                    <Nav.Link href="#home">Forsiden</Nav.Link>
                                    <Nav.Link href="#link">Arbeidsliv</Nav.Link>
                                    <Nav.Link href="#link">
                                        Kontakt oss
                                    </Nav.Link>
                                    <Nav.Link href="#link">
                                        Våre ambassadører
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Collapse>
                    </div>
                </Container>
                <NavBackground/> 

            </Navbar>
           
        </>
    );
};

export default NavMenu;
