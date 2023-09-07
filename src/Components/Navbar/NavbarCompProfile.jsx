import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import './NavbarComp.css'

export const NavbarCompProfile = () => {
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2 search-input" aria-label="Search"/>
          <Button variant="outline-success" className='search-button'>Search</Button>
        </Form>

        <Navbar.Brand href="#home" className="logo">TIX</Navbar.Brand>
        <Nav className="ms-auto underline-on-hover">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#FAQ">FAQ</Nav.Link>
        </Nav>

        <Nav className="ml-auto">
        <NavDropdown title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#signout">Sign Out</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarCompProfile;
