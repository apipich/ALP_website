import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <Navbar className="color-nav" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Amanda Pipich</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <LinkContainer to="/Contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Photography">
            <Nav.Link>Photography</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
