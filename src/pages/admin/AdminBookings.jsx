import React, { useState } from 'react';
import { Row, Col, Container, Table, Button, Form, InputGroup, Dropdown, Badge, Modal,Pagination, Card, Alert} from 'react-bootstrap';
import { Search, Ticket, Person, Calendar,Cash, Filter, Printer, FileEarmarkExcel,Eye, Pencil, Trash, ArrowClockwise} from 'react-bootstrap-icons';

const AdminBookings = () => {
  // Sample booking data
  const [bookings, setBookings] = useState([
    {
      id: 'BK1001',
      customer: 'John Doe',
      route: 'New York to Boston',
      date: '2023-06-15',
      departure: '08:00 AM',
      seats: 2,
      amount: '$90',
      status: 'confirmed',
      payment: 'credit_card'
    },
    {
      id: 'BK1002',
      customer: 'Jane Smith',
      route: 'Los Angeles to San Francisco',
      date: '2023-06-16',
      departure: '10:15 AM',
      seats: 1,
      amount: '$35',
      status: 'pending',
      payment: 'paypal'
    },
    {
      id: 'BK1003',
      customer: 'Mike Johnson',
      route: 'Chicago to Detroit',
      date: '2023-06-14',
      departure: '02:30 PM',
      seats: 4,
      amount: '$140',
      status: 'cancelled',
      payment: 'credit_card'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 5;

  // Filter bookings based on search term
  const filteredBookings = bookings.filter(booking => 
    booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);

  const handleDelete = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
    setShowDeleteModal(false);
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'confirmed':
        return <Badge bg="teal">Confirmed</Badge>;
      case 'pending':
        return <Badge bg="warning" text="dark">Pending</Badge>;
      case 'cancelled':
        return <Badge bg="danger">Cancelled</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  const getPaymentBadge = (payment) => {
    switch(payment) {
      case 'credit_card':
        return <Badge bg="purple">Credit Card</Badge>;
      case 'paypal':
        return <Badge bg="info" text="dark">PayPal</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-purple">
        <Ticket className="me-2" />
        Bookings Management
      </h2>

      {/* Search and Filter Bar */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body>
          <Row className="g-3">
            <Col md={6}>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <Search />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Search bookings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={3}>
              <Form.Select>
                <option>Filter by status</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-between">
                  <Filter className="me-2" />
                  Export
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Printer className="me-2" />
                    Print
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <FileEarmarkExcel className="me-2" />
                    Export to Excel
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Bookings Table */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0">
            <thead className="bg-light">
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Route</th>
                <th>Date/Time</th>
                <th>Seats</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.length > 0 ? (
                currentBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.customer}</td>
                    <td>{booking.route}</td>
                    <td>
                      <div>{booking.date}</div>
                      <small className="text-muted">{booking.departure}</small>
                    </td>
                    <td>{booking.seats}</td>
                    <td>{booking.amount}</td>
                    <td>{getStatusBadge(booking.status)}</td>
                    <td>{getPaymentBadge(booking.payment)}</td>
                    <td>
                      <Button variant="outline-purple" size="sm" className="me-2">
                        <Eye size={14} />
                      </Button>
                      <Button variant="outline-teal" size="sm" className="me-2">
                        <Pencil size={14} />
                      </Button>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setShowDeleteModal(true);
                        }}
                      >
                        <Trash size={14} />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    <Alert variant="light">
                      No bookings found matching your search criteria
                    </Alert>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-muted">
            Showing {indexOfFirstBooking + 1} to {Math.min(indexOfLastBooking, filteredBookings.length)} of {filteredBookings.length} bookings
          </div>
          <Pagination>
            <Pagination.Prev 
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage(currentPage - 1)}
            />
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next 
              disabled={currentPage === totalPages} 
              onClick={() => setCurrentPage(currentPage + 1)}
            />
          </Pagination>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-purple">Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete booking <strong>{selectedBooking?.id}</strong> for {selectedBooking?.customer}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={() => handleDelete(selectedBooking?.id)}
          >
            Delete Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminBookings;