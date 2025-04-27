import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { GeoAlt, ArrowRight } from 'react-bootstrap-icons';

const PopularRoutesPage = () => {
  const routes = [
    {
      from: "New York",
      to: "Boston",
      price: "$25",
      duration: "4h 30m",
      discount: "10% OFF"
    },
    {
      from: "Los Angeles",
      to: "San Francisco",
      price: "$35",
      duration: "6h 15m",
      discount: "Early Bird"
    },
    {
      from: "Chicago",
      to: "Detroit",
      price: "$28",
      duration: "4h 45m",
      featured: true
    },
    {
      from: "Seattle",
      to: "Portland",
      price: "$22",
      duration: "3h 20m"
    },
    {
      from: "Miami",
      to: "Orlando",
      price: "$18",
      duration: "3h 45m"
    },
    {
      from: "Dallas",
      to: "Austin",
      price: "$20",
      duration: "3h 10m",
      discount: "Weekend Special"
    }
  ];

  return (
    <Container className="my-5 py-4">
      <h2 className="text-center mb-5 fw-bold text-purple">Popular Bus Routes</h2>
      <Row className="g-4">
        {routes.map((route, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className={`h-100 border-0 shadow-sm ${route.featured ? 'border-top border-teal border-3' : ''}`}>
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <GeoAlt size={20} className="text-teal me-2" />
                  <div className="d-flex align-items-center flex-grow-1">
                    <span className="fw-bold">{route.from}</span>
                    <ArrowRight size={16} className="mx-2 text-muted" />
                    <span className="fw-bold">{route.to}</span>
                  </div>
                  {route.discount && (
                    <Badge bg="teal" className="ms-2">
                      {route.discount}
                    </Badge>
                  )}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="text-muted">From</span>
                    <h4 className="text-purple mb-0">{route.price}</h4>
                  </div>
                  <div className="text-end">
                    <span className="text-muted">Duration</span>
                    <p className="mb-0">{route.duration}</p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 py-3">
                <button className="btn btn-outline-teal w-100">
                  View Schedule
                </button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-5">
        <button className="btn btn-teal px-4 py-2">
          View All Routes
        </button>
      </div>
    </Container>
  );
};

export default PopularRoutesPage;