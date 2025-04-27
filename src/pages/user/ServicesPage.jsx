import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  Search, 
  Cursor, 
  CreditCard 
} from 'react-bootstrap-icons';

const ServicesPage = () => {
  const steps = [
    {
      icon: <Search size={48} className="text-purple" />,
      step: "Step 1",
      title: "Search Buses",
      description: "Enter your departure, destination, and travel date"
    },
    {
      icon: <Cursor size={48} className="text-purple" />,
      step: "Step 2",
      title: "Select & Book",
      description: "Choose your preferred bus and seats"
    },
    {
      icon: <CreditCard size={48} className="text-purple" />,
      step: "Step 3",
      title: "Pay & Travel",
      description: "Secure payment and receive e-ticket instantly"
    }
  ];

  return (
    <Container className="my-5 py-5 bg-light rounded-3">
      <h2 className="text-center mb-5 fw-bold text-purple">How Our Bus Booking Works</h2>
      <Row className="g-4">
        {steps.map((item, index) => (
          <Col key={index} md={4}>
            <div className="text-center p-4 h-100">
              <div className="mb-4">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white" 
                     style={{ width: '80px', height: '80px' }}>
                  {item.icon}
                </div>
              </div>
              <span className="d-block text-teal fw-bold mb-2">{item.step}</span>
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-muted mb-0">{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;