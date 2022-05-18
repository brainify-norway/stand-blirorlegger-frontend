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
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

const NavMenu = () => {
    const [open, setOpen] = useState(false);

    const handleBurger = () => {
        setOpen(!open);
    };

    // useEffect(() => {
    //     if (open) {
    //         document.querySelector("bt-burger").add("menu-open");
    //     } else {
    //         document.querySelector("btn-burger").remove("menu-open");
    //     }
    // });

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            src="/logo-blir-rorlegger.svg"
                            alt="Picture of the author"
                            width={110}
                            height={110}
                        />
                    </Navbar.Brand>
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
                </Container>
            </Navbar>
        </>
    );
};

export default NavMenu;
