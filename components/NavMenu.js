import {
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Collapse
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="https://www.rornorge.no">
                        <Image
                            src="/logo-blir-rorlegger.svg"
                            alt="Picture of the author"
                            width={110}
                            height={110}
                        />
                    </Navbar.Brand>

                    <div
                        className={
                            open
                                ? "hamburger-dropdown close"
                                : "hamburger-dropdown  open"
                        }
                        onClick={() => setOpen(!open)}
                    ></div>
                    <Collapse className={open ? "show" : "hide"}>
                        <Nav id="nav-menu">
                            <Link
                                className="menu-link"
                                href="https://blirorlegger.no/"
                            >
                                Forsiden
                            </Link>
                            <Link
                                className="menu-link"
                                href="https://blirorlegger.no/arbeidsliv/"
                            >
                                Arbeidsliv
                            </Link>
                            <Link
                                className="menu-link"
                                href="https://blirorlegger.no/kontakt/"
                            >
                                Kontakt oss
                            </Link>
                            <Link
                                className="menu-link"
                                href="https://blirorlegger.no/rorambassadorer/"
                            >
                                Våre ambassadører
                            </Link>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavMenu;
