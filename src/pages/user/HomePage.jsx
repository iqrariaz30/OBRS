import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className="bg-light" style={{ padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold text-purple mb-3">
              Travel Across the Country with Ease
            </h1>
            <p className="lead text-muted mb-4">
              Book your bus tickets in minutes. Choose from thousands of routes with comfortable seats and affordable prices.
            </p>
            <div className="d-flex align-items-center mb-4">
              <div className="me-4">
                <h3 className="text-teal mb-0">10,000+</h3>
                <small className="text-muted">Daily Departures</small>
              </div>
              <div className="me-4">
                <h3 className="text-teal mb-0">50+</h3>
                <small className="text-muted">Bus Operators</small>
              </div>
              <div>
                <h3 className="text-teal mb-0">1M+</h3>
                <small className="text-muted">Happy Travelers</small>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;