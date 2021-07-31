import React from "react";
import project1 from "./project1.png";
import project2 from "./project2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <Container>
        <Row>
          <Col>
            <div className="projectOne">
              <h5>Javascript Weather Project</h5>
              <a
                href="https://vibrant-lovelace-115a07.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={project1} width="300" alt="yes" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="projectTwo">
              <h5>React Weather Project</h5>
              <a
                href="https://distracted-heyrovsky-8e212e.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={project2} width="300" alt="yes" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
