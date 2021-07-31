import React from "react";
import ProjectOne from "./ProjectOne.js";
import ProjectTwo from "./ProjectTwo.js";
import ProjectThree from "./ProjectThree.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Projects() {
  return (
    <div className="projects">
      <Container>
        <Row>
          <Col>
            <ProjectOne />
          </Col>
          <Col>
            <ProjectTwo />
          </Col>
          <Col>
            <ProjectThree />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
