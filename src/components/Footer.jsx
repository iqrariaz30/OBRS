import React from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Envelope, 
  Telephone,
  GeoAlt,
  Clock
} from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-teal mb-4">Quick Links</h5>
            <ListGroup variant="flush" className="bg-dark">
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                Home
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                About Us
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                Bus Routes
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                Special Offers
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                Contact
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-teal mb-4">Support</h5>
            <ListGroup variant="flush" className="bg-dark">
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                FAQ
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                Booking Guide
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                Cancellation Policy
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                Privacy Policy
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 ps-0">
                Terms & Conditions
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-teal mb-4">Contact Us</h5>
            <div className="d-flex align-items-center mb-3">
              <GeoAlt size={18} className="text-teal me-3" />
              <span>123 Travel Street, City, Country</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Telephone size={18} className="text-teal me-3" />
              <span>+1 (234) 567-8900</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Envelope size={18} className="text-teal me-3" />
              <span>info@bustickets.com</span>
            </div>
            <div className="d-flex align-items-center">
              <Clock size={18} className="text-teal me-3" />
              <span>24/7 Customer Support</span>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="text-teal mb-4">Newsletter</h5>
            <p className="text-muted">Subscribe for updates and special offers</p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your email address" className="bg-secondary border-0" />
              </Form.Group>
              <Button variant="teal" className="w-100">
                Subscribe
              </Button>
            </Form>
            <div className="mt-4">
              <h6 className="text-teal mb-3">Follow Us</h6>
              <div className="d-flex">
                <a href="#" className="text-white me-3">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white me-3">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white me-3">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="my-4 bg-secondary" />

        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0 text-muted">
              © {new Date().getFullYear()} BusTicket. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;