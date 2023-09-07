import React from 'react';
import { Navbar, Nav, Container, Form, Button, NavDropdown} from 'react-bootstrap';
import './NavbarComp.css'


export const NavbarComp = () => {
  return (
    <Navbar bg="black" variant="dark" className='navbar'>
      <Container>
        <Navbar.Brand href="#home" className='Company'>TIX</Navbar.Brand>
  
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
          <Button variant="outline-success" className='search-button'>Search</Button>
        </Form>

        
        <Nav className="ms-auto underline-on-hover">
          <Nav.Link href="#home">Home</Nav.Link>

          <NavDropdown title="Events" id="basic-nav-dropdown">
            <NavDropdown.Item className="dropdownitem" href="#events-all">All</NavDropdown.Item>
            <NavDropdown.Item className="dropdownitem" href="#events-music">Music</NavDropdown.Item>
            <NavDropdown.Item  className="dropdownitem" href="#events-sports">Sports</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#FAQ">FAQ</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#signup">Sign Up</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
