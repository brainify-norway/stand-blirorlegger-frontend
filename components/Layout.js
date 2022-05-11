import { Container } from "react-bootstrap";

const Layout = () => {
    return (
        <div className="Layout">
            <Container>
                <div className="wrapper">
                    <video autoPlay style={{ width: "500px", height: "500px" }}>
                        <source src="Odin.mp4" />
                    </video>
                </div>
            </Container>
        </div>
    );
};

export default Layout;
