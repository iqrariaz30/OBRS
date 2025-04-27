import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { StarFill, StarHalf, PersonCircle } from 'react-bootstrap-icons';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frequent Traveler",
      rating: 5,
      comment: "The booking process was incredibly smooth and I got the exact seats I wanted. Highly recommend!",
      featured: true
    },
    {
      name: "Michael Chen",
      role: "Business Traveler",
      rating: 4.5,
      comment: "Reliable service with comfortable buses. The mobile tickets make everything so convenient."
    },
    {
      name: "David Rodriguez",
      role: "Student",
      rating: 5,
      comment: "Affordable prices and great discounts for students. My go-to platform for bus travel."
    },
    {
      name: "Emily Wilson",
      role: "Family Traveler",
      rating: 4,
      comment: "Traveling with kids was easier thanks to the family-friendly booking options."
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarFill key={`full-${i}`} className="text-teal" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="text-teal" />);
    }
    
    return stars;
  };

  return (
    <Container className="my-5 py-5">
      <h2 className="text-center mb-5 fw-bold text-purple">What Our Travelers Say</h2>
      
      <Carousel indicators={true} className="pb-4">
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Card className={`border-0 shadow-sm ${testimonial.featured ? 'border-top border-teal border-3' : ''}`}>
                  <Card.Body className="p-4 p-md-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-3">
                        <PersonCircle size={48} className="text-purple" />
                      </div>
                      <div>
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                      <div className="ms-auto">
                        <div className="d-flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <blockquote className="mb-0">
                      <p className="lead font-italic">"{testimonial.comment}"</p>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="text-center mt-4">
        <button className="btn btn-teal px-4">
          Share Your Experience
        </button>
      </div>
    </Container>
  );
};

export default TestimonialsPage;