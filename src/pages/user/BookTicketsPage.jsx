import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, Tab, Tabs } from 'react-bootstrap';
import { 
  GeoAlt, 
  Calendar, 
  Person, 
  ArrowRight,
  Search,
  Clock,
  Ticket
} from 'react-bootstrap-icons';

const BookTicketsPage = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [activeTab, setActiveTab] = useState('one-way');

 
  // Sample available buses data
  const availableBuses = [
    { 
      operator: 'Greyhound', 
      departure: '08:00 AM', 
      arrival: '12:30 PM', 
      price: '$25', 
      seats: 12,
      type: 'Standard'
    },
    { 
      operator: 'Megabus', 
      departure: '10:15 AM', 
      arrival: '02:45 PM', 
      price: '$32', 
      seats: 5,
      type: 'Premium'
    },
    { 
      operator: 'Peter Pan', 
      departure: '02:30 PM', 
      arrival: '07:00 PM', 
      price: '$28', 
      seats: 20,
      type: 'Standard'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would call an API to fetch available buses
    console.log('Searching buses...', { fromCity, toCity, departureDate, returnDate, passengers });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 fw-bold text-purple">
        <Ticket className="me-2" />
        Book Bus Tickets
      </h2>

      {/* Search Form */}
      <Card className="mb-5 shadow-sm border-0">
        <Card.Body className="p-4">
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-4"
          >
            <Tab eventKey="one-way" title="One Way" />
            <Tab eventKey="round-trip" title="Round Trip" />
          </Tabs>

          <Form onSubmit={handleSearch}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="fromCity">
                  <Form.Label className="d-flex align-items-center">
                    <GeoAlt className="me-2 text-teal" /> From
                  </Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Departure city" 
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="toCity">
                  <Form.Label className="d-flex align-items-center">
                    <GeoAlt className="me-2 text-teal" /> To
                  </Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Destination city" 
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={activeTab === 'round-trip' ? 6 : 12}>
                <Form.Group controlId="departureDate">
                  <Form.Label className="d-flex align-items-center">
                    <Calendar className="me-2 text-teal" /> Departure
                  </Form.Label>
                  <Form.Control 
                    type="date" 
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              {activeTab === 'round-trip' && (
                <Col md={6}>
                  <Form.Group controlId="returnDate">
                    <Form.Label className="d-flex align-items-center">
                      <Calendar className="me-2 text-teal" /> Return
                    </Form.Label>
                    <Form.Control 
                      type="date" 
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              )}
              <Col md={6}>
                <Form.Group controlId="passengers">
                  <Form.Label className="d-flex align-items-center">
                    <Person className="me-2 text-teal" /> Passengers
                  </Form.Label>
                  <Form.Select 
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="d-flex align-items-end">
                <Button variant="teal" type="submit" className="w-100 py-2">
                  <Search className="me-2" />
                  Search Buses
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

    </Container>
  );
};

export default BookTicketsPage;