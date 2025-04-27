import React, { useState } from 'react';
import {Container, Table, Button, Form,InputGroup, Dropdown, Badge, Modal,Pagination, Card, Row, Col, Alert} from 'react-bootstrap';
import {Search, GeoAlt, Plus, ArrowRight,Pencil, Trash, Clock, Cash,Filter, Printer, FileEarmarkExcel} from 'react-bootstrap-icons';

const AdminRoutes = () => {
  // Sample routes data
  const [routes, setRoutes] = useState([
    {
      id: 'RT1001',
      from: 'New York',
      to: 'Boston',
      distance: '215 miles',
      duration: '4h 30m',
      price: '$25-$45',
      status: 'active',
      buses: 8
    },
    {
      id: 'RT1002',
      from: 'Los Angeles',
      to: 'San Francisco',
      distance: '382 miles',
      duration: '6h 15m',
      price: '$35-$60',
      status: 'active',
      buses: 5
    },
    {
      id: 'RT1003',
      from: 'Chicago',
      to: 'Detroit',
      distance: '282 miles',
      duration: '4h 45m',
      price: '$28-$50',
      status: 'maintenance',
      buses: 3
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const routesPerPage = 5;

  // Filter routes based on search term
  const filteredRoutes = routes.filter(route =>
    route.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    route.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastRoute = currentPage * routesPerPage;
  const indexOfFirstRoute = indexOfLastRoute - routesPerPage;
  const currentRoutes = filteredRoutes.slice(indexOfFirstRoute, indexOfLastRoute);
  const totalPages = Math.ceil(filteredRoutes.length / routesPerPage);

  const handleDelete = (id) => {
    setRoutes(routes.filter(route => route.id !== id));
    setShowDeleteModal(false);
  };

  const handleAddRoute = (newRoute) => {
    setRoutes([...routes, newRoute]);
    setShowAddModal(false);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <Badge bg="teal">Active</Badge>;
      case 'maintenance':
        return <Badge bg="warning" text="dark">Maintenance</Badge>;
      case 'inactive':
        return <Badge bg="secondary">Inactive</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-purple">
        <GeoAlt className="me-2" />
        Routes Management
      </h2>

      {/* Search and Action Bar */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body>
          <Row className="g-3 align-items-center">
            <Col md={6}>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <Search />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Search routes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={3}>
              <Form.Select>
                <option>Filter by status</option>
                <option>Active</option>
                <option>Maintenance</option>
                <option>Inactive</option>
              </Form.Select>
            </Col>
            <Col md={3} className="d-flex justify-content-end">
              <Button variant="teal" onClick={() => setShowAddModal(true)}>
                <Plus className="me-2" />
                Add Route
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Routes Table */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0">
            <thead className="bg-light">
              <tr>
                <th>Route ID</th>
                <th>From → To</th>
                <th>Distance</th>
                <th>Duration</th>
                <th>Price Range</th>
                <th>Buses</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRoutes.length > 0 ? (
                currentRoutes.map((route) => (
                  <tr key={route.id}>
                    <td>{route.id}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span>{route.from}</span>
                        <ArrowRight className="mx-2 text-muted" size={14} />
                        <span>{route.to}</span>
                      </div>
                    </td>
                    <td>{route.distance}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Clock className="me-2 text-teal" size={14} />
                        {route.duration}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Cash className="me-2 text-purple" size={14} />
                        {route.price}
                      </div>
                    </td>
                    <td>{route.buses}</td>
                    <td>{getStatusBadge(route.status)}</td>
                    <td>
                      <Button variant="outline-teal" size="sm" className="me-2">
                        <Pencil size={14} />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => {
                          setSelectedRoute(route);
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
                  <td colSpan="8" className="text-center py-4">
                    <Alert variant="light">
                      No routes found matching your search criteria
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
            Showing {indexOfFirstRoute + 1} to {Math.min(indexOfLastRoute, filteredRoutes.length)} of {filteredRoutes.length} routes
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

      {/* Add Route Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-purple">
            <Plus className="me-2" />
            Add New Route
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="fromCity">
                  <Form.Label>From City</Form.Label>
                  <Form.Control type="text" placeholder="Departure city" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="toCity">
                  <Form.Label>To City</Form.Label>
                  <Form.Control type="text" placeholder="Destination city" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="distance">
                  <Form.Label>Distance</Form.Label>
                  <Form.Control type="text" placeholder="e.g. 215 miles" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="duration">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control type="text" placeholder="e.g. 4h 30m" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="price">
                  <Form.Label>Price Range</Form.Label>
                  <Form.Control type="text" placeholder="e.g. $25-$45" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="status">
                  <Form.Label>Status</Form.Label>
                  <Form.Select>
                    <option value="active">Active</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="inactive">Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="buses">
                  <Form.Label>Buses Assigned</Form.Label>
                  <Form.Control type="number" placeholder="Number of buses" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="teal" onClick={() => {
            handleAddRoute({
              id: `RT${1000 + routes.length + 1}`,
              from: 'New City',
              to: 'Destination',
              distance: '100 miles',
              duration: '2h 00m',
              price: '$20-$40',
              status: 'active',
              buses: 3
            });
          }}>
            Add Route
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-purple">Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete route <strong>{selectedRoute?.id}</strong> from {selectedRoute?.from} to {selectedRoute?.to}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDelete(selectedRoute?.id)}
          >
            Delete Route
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminRoutes;