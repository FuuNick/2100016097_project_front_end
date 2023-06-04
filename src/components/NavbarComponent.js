import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import '../style/NavbarComponent.css'; 

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="mx-auto">
          <img
            src="/assets/images/starbucks.png" 
            width="185"
            height="45"
            className="mb-2 zoom-logo"
            alt="Starbucks Logo"
          />
        </Navbar.Brand>
        <br />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
