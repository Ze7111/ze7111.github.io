import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import clock from "../../Assets/Projects/clock.png";
import datafinder from "../../Assets/Projects/DataFinder.png";
import boilerplate from "../../Assets/Projects/Boilerplate.png";
import omnix from "../../Assets/Projects/Omnix.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Minimal Clock"
              description="a very minmal astethic clock made in python and cython, which makes use of a number of winodws elemements such as acrylic to add beatuiful background blur."
              ghLink="https://github.com/Ze7111/Minimal-Clock"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here for the project
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datafinder}
              isBlog={false}
              title="Data Finder"
              description="Simple to use data finder, which is codded in python. The way it works is, it takes an input in a beautiful cli and then searches for the data in the given csv and then returns the related data in a beautiful table."
              ghLink="https://github.com/Ze7111/Data-Finder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boilerplate}
              isBlog={false}
              title="Boilerplate Files Generator"
              description="Make Default Files and Folder Structure, for a python project, with a single click. This is a simple python script which makes a default folder structure for a python project. It also makes a default python file with a default code in it, along with a few usefull tools."
              ghLink="https://github.com/Ze7111/boilerplate-gen"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={omnix}
              isBlog={false}
              title="OMNIX"
              description="Simple log, history free command line, internet search applicaion build in python made for privacy"
              ghLink="https://github.com/Ze7111/OMNIX"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
