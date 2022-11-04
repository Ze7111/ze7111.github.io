import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {SiSnapchat} from "react-icons/si";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">            
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "center" }}>
              I fell in love with programming and I have at least learnt
              something, hopefully… 🤷‍♂️
              <br />
              <br />I am fluent in these languages
              <i>
                <b className="purple"> Python, C++, C, C#, Java, JavaScript, NodeJS, Ruby, Rust, Swift, and Flutter. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Backend Devolopment, Web Technologies, and Data Structures </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning and Game Devolopment.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing applications
              with <b className="purple">C++, Python</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Node.js</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ze7111"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/KartikDhruvan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruvan-kartik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dhruvan_kartik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.snapchat.com/add/dhruvan.k?share_id=YMvRzv6vQO8&locale=en-GB"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <SiSnapchat />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
