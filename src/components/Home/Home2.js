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
              Allow Me to <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body" style={{ textAlign: "center" }}>
              My journey into the realm of programming has been a love affair 
              from the get-go. Every line of code I write teaches me 
              something new, and I thrive on the boundless learning opportunities
              that this field offers. 🚀
              <br />
              <br />I have honed my skills in an array of programming languages including
              <i>
                <b className="purple"> Python, C++, C, C#, Java, JavaScript, and Batch, showcasing my versatility and adaptability. </b>
              </i>
              <br />
              <br />
              I am particularly drawn to
              <i>
                <b className="purple"> Backend Development, Web Technologies, and Data Structures </b>
                , with a burgeoning interest in
                <b className="purple">
                Machine Learning and Game Development.
                </b> These domains present a playground where I can continually challenge myself and hone my skills.
              </i>
              <br />
              <br />
              Whenever the opportunity arises, I relish diving into application development, employing C++ and modern JavaScript libraries and frameworks like React.js and Node.js to create intuitive, user-centric solutions.
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
