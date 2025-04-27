import React from 'react';
import { Container, Accordion, Row, Col } from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';

const FAQPage = () => {
  const faqItems = [
    {
      question: "How do I book a bus ticket?",
      answer: "Simply select your departure and arrival cities, choose your travel date, pick your preferred bus, select seats, and complete the payment process."
    },
    {
      question: "Can I cancel or change my booking?",
      answer: "Yes, you can cancel or modify your booking up to 6 hours before departure. Some operators may have different policies."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards, PayPal, and various regional payment methods. All transactions are secure."
    },
    {
      question: "Is there a discount for students or seniors?",
      answer: "Yes, we offer special discounts for students and seniors. Please have your valid ID ready when booking and during travel."
    },
    {
      question: "How do I get my ticket after booking?",
      answer: "You'll receive an e-ticket via email immediately after booking. You can also access it in your account dashboard."
    }
  ];

  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <QuestionCircle size={48} className="text-purple mb-3" />
          <h2 className="fw-bold text-purple">Frequently Asked Questions</h2>
          <p className="lead text-muted">Find quick answers to common questions about our bus booking service</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={8}>
          <Accordion flush>
            {faqItems.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()} className="mb-3 border rounded-3 overflow-hidden">
                <Accordion.Header className="bg-light">
                  <span className="fw-bold text-purple">{item.question}</span>
                </Accordion.Header>
                <Accordion.Body className="bg-white">
                  <p className="mb-0">{item.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col lg={8} className="text-center">
          <p className="mb-3">Still have questions?</p>
          <button className="btn btn-teal px-4">
            Contact Our Support Team
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQPage;