import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  BusFront, 
  Wallet2, 
  ShieldCheck, 
  Ticket, 
  Star, 
  Phone 
} from 'react-bootstrap-icons';

const KeyFeaturesPage = () => {
  const features = [
    {
      icon: <BusFront size={40} className="text-purple" />,
      title: "10,000+ Daily Departures",
      description: "Wide network across the country"
    },
    {
      icon: <Ticket size={40} className="text-purple" />,
      title: "Easy Seat Selection",
      description: "Choose your preferred seats"
    },
    {
      icon: <Wallet2 size={40} className="text-purple" />,
      title: "Multiple Payment Options",
      description: "Cards, UPI, Net Banking & more"
    },
    {
      icon: <ShieldCheck size={40} className="text-purple" />,
      title: "Secure Booking",
      description: "Your data is always protected"
    },
    {
      icon: <Star size={40} className="text-purple" />,
      title: "Verified Reviews",
      description: "Real feedback from travelers"
    },
    {
      icon: <Phone size={40} className="text-purple" />,
      title: "Mobile Tickets",
      description: "No need to print, show on phone"
    }
  ];

  return (
    <Container className="my-5 py-4">
      <h2 className="text-center mb-5 fw-bold text-purple">Why Choose Our Bus Service?</h2>
      <Row className="g-4">
        {features.map((feature, index) => (
          <Col key={index} md={6} lg={4}>
            <div className="p-4 h-100 border rounded-3 bg-light">
              <div className="mb-3">
                {feature.icon}
              </div>
              <h4 className="text-teal">{feature.title}</h4>
              <p className="text-muted mb-0">{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default KeyFeaturesPage;