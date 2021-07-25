import React from "react";
import "./Navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Amanda Pipich</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#photography">Photography</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
