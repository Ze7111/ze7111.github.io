import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImPencil2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruvan Kartik </span>
            from <span className="purple"> Dubai, United Arab Emirates.</span>
            <br />I am a freshman pursuing B.S. Computer Science at
            Purdue Fort Wayne.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Having Fun
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Quiters never win and winners never quit"{" "}
          </p>
          <footer className="blockquote-footer">Dhruvan</footer>
          <p style={{ textAlign: "justify" }}>
            The <span className="purple"> Languages </span> I know are!
          </p>
          <ul>

          <li className="about-languages">
              <ImPencil2 /> English
          </li>

          <li className="about-languages">
              <ImPencil2 /> Hindi
          </li>
          <li className="about-languages">
              <ImPencil2 /> Tamil
          </li>
          <li className="about-languages">
              <ImPencil2 /> French
          </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
