import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { LightningCharge, CalendarCheck, TicketDetailed } from 'react-bootstrap-icons';

const SpecialOffersPage = () => {
  const offers = [
    {
      title: "Flash Sale",
      discount: "30% OFF",
      description: "Limited time offer on all weekend trips",
      icon: <LightningCharge size={32} className="text-teal" />,
      validUntil: "2023-12-15",
      code: "FLASH30"
    },
    {
      title: "Early Bird Special",
      discount: "25% OFF",
      description: "Book 30 days in advance and save",
      icon: <CalendarCheck size={32} className="text-teal" />,
      validUntil: "2024-01-31",
      featured: true
    },
    {
      title: "Student Discount",
      discount: "20% OFF",
      description: "Exclusive offer for students with valid ID",
      icon: <TicketDetailed size={32} className="text-teal" />,
      validUntil: "2024-06-30",
      code: "STUDENT20"
    }
  ];

  return (
    <Container className="my-5 py-5 bg-light rounded-3">
      <h2 className="text-center mb-5 fw-bold text-purple">Special Travel Offers</h2>
      
      <Row className="g-4">
        {offers.map((offer, index) => (
          <Col key={index} md={4}>
            <Card className={`h-100 border-0 shadow-sm ${offer.featured ? 'border-top border-purple border-3' : ''}`}>
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-white p-2 rounded-circle me-3">
                      {offer.icon}
                    </div>
                    <div>
                      <h5 className="mb-0">{offer.title}</h5>
                      <small className="text-muted">Valid until {offer.validUntil}</small>
                    </div>
                  </div>
                  <Badge bg="purple" className="fs-5 px-3 py-2">
                    {offer.discount}
                  </Badge>
                </div>
                
                <p className="mb-4">{offer.description}</p>
                
                {offer.code && (
                  <div className="bg-white p-2 rounded mb-3">
                    <small className="text-muted">Use code:</small>
                    <div className="fw-bold text-teal">{offer.code}</div>
                  </div>
                )}
                
                <button className="btn btn-teal w-100">
                  Book Now & Save
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div className="text-center mt-5">
        <button className="btn btn-outline-purple px-4">
          View All Offers
        </button>
      </div>
    </Container>
  );
};

export default SpecialOffersPage;