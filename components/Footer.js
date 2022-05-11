import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="main-footer">
                <Container>
                    <Row>
                        {/*Column 1*/}
                        <div className="col-md-3 col-sm-6">
                            <div className="icons">
                                <Image
                                    src="/logo-blir-rorlegger.svg"
                                    alt="Picture of the author"
                                    width={70}
                                    height={70}
                                />

                                <Image
                                    src="/rorentreprenor.svg"
                                    alt="Picture of the author"
                                    width={70}
                                    height={70}
                                />

                                <FaSnapchat />
                                <FaInstagram />
                                <FaFacebook />
                            </div>

                            <p className="footer-text">
                                Blirørlegger.no eies og driftes av
                                rørleggerbedriftens bransjeorganisasjon
                                Rørentreprenørene Norge. Bransjens 13
                                tilknyttede opplæringskontor er også viktige
                                bidragsytere.
                            </p>
                        </div>

                        {/*Column 2*/}
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled footer-navigation">
                                <li>Forsiden</li>
                                <li>Utdanning</li>
                                <li>Arbeidsliv</li>
                                <li>Voksenlærling</li>
                                <li>Digital stand</li>
                                <li>Rørambassadører</li>
                                <li>FAQ</li>
                                <li>Kontakt</li>
                            </ul>

                            <ul className="list-unstyled footer-secondary-links">
                                <li>Nyttige Lenker</li>
                                <li>www.utdanning.no</li>
                                <li>www.vilbli.no</li>
                                <li>www.vigo.no</li>
                                <li>www.rornorge.no</li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;
