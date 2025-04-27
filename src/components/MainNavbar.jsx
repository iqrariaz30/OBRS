import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BusFront, Person, Phone } from 'react-bootstrap-icons';

const MainNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex align-items-center">
            <BusFront size={32} className="text-teal me-2" />
            <span className="fw-bold text-purple">BusTicket</span>
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/book-tickets">
              <Nav.Link>Book Tickets</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/services">
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/features">
              <Nav.Link>KeyFeatures</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/routes">
              <Nav.Link>PopularRoutes</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/offers">
              <Nav.Link>SpecialOffers</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/testimonials">
              <Nav.Link>Testimonials</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/faq">
              <Nav.Link>FAQ</Nav.Link>
            </LinkContainer>
          </Nav>
          
          <div className="d-flex">
            <Button variant="teal" className="me-2 d-flex align-items-center">
              <Person className="me-1" />
              <span>Signup</span>
            </Button>
            <Button variant="teal" className="d-flex align-items-center">
              <Person className="me-1" />
              <span>Login</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;