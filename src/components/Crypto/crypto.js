import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "5px" }}>
                        <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "5px" }}>
                            <h1><strong className="purple">Etherium</strong> Adress</h1>
                        </Col>
                </Row>
                <Col xs={1} md={12} className="crypto-boxes">
                    <h1>
                        0x8E680EC7B09b2B553f6a8cA163B6a710741E6bfa
                    </h1>
                </Col>

                <Row style={{ justifyContent: "center", padding: "5px" }}>
                        <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "5px" }}>
                            <h1><strong className="purple">Bitcoin</strong> Adress</h1>
                        </Col>
                </Row>
                <Col xs={1} md={12} className="crypto-boxes">
                    <h1>
                        bc1qg6lfdtevtuladhu52zzaxfcwqkhcddyf0derlv
                    </h1>
                </Col>

                <Row style={{ justifyContent: "center", padding: "5px" }}>
                        <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "5px" }}>
                            <h1><strong className="purple">Kava</strong> Adress</h1>
                        </Col>
                </Row>
                <Col xs={1} md={12} className="crypto-boxes">
                    <h1>
                        kava163fgmycyw4n0j0xk27ytnn475ka0wyev7ztc9s
                    </h1>
                </Col>
            </Container>
        </Container>
    );
}

export default About;
