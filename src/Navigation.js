import React from "react";
import "./Navigation.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
return (
  <Navbar fixed="top" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Amanda Pipich</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
      <Nav.Link href="#pricing">Photography</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>






)

}