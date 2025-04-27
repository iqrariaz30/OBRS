import React, { useState } from 'react';
import {Container, Table, Button, Form,InputGroup, Dropdown, Badge, Modal,Pagination, Card, Row, Col, Alert} from 'react-bootstrap';
import {Search, BusFront, Plus, Wrench,Pencil, Trash, Speedometer2, Person,CheckCircle, XCircle, Filter} from 'react-bootstrap-icons';

const AdminFleet = () => {
  // Sample fleet data
  const [fleet, setFleet] = useState([
    {
      id: 'BUS101',
      model: 'Volvo 9700',
      capacity: 56,
      year: 2022,
      lastService: '2023-05-15',
      status: 'active',
      assignedRoute: 'NYC to Boston'
    },
    {
      id: 'BUS205',
      model: 'Mercedes Tourismo',
      capacity: 48,
      year: 2021,
      lastService: '2023-06-01',
      status: 'maintenance',
      assignedRoute: 'LA to SF'
    },
    {
      id: 'BUS312',
      model: 'Scania Irizar',
      capacity: 52,
      year: 2023,
      lastService: '2023-06-10',
      status: 'active',
      assignedRoute: 'Chicago to Detroit'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const busesPerPage = 5;

  // Filter fleet based on search term
  const filteredFleet = fleet.filter(bus =>
    bus.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bus.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bus.assignedRoute.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBus = currentPage * busesPerPage;
  const indexOfFirstBus = indexOfLastBus - busesPerPage;
  const currentBuses = filteredFleet.slice(indexOfFirstBus, indexOfLastBus);
  const totalPages = Math.ceil(filteredFleet.length / busesPerPage);

  const handleDelete = (id) => {
    setFleet(fleet.filter(bus => bus.id !== id));
    setShowDeleteModal(false);
  };

  const handleAddBus = (newBus) => {
    setFleet([...fleet, newBus]);
    setShowAddModal(false);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <Badge bg="teal" className="d-flex align-items-center">
          <CheckCircle className="me-1" size={12} />
          Active
        </Badge>;
      case 'maintenance':
        return <Badge bg="warning" text="dark" className="d-flex align-items-center">
          <Wrench className="me-1" size={12} />
          Maintenance
        </Badge>;
      case 'inactive':
        return <Badge bg="secondary" className="d-flex align-items-center">
          <XCircle className="me-1" size={12} />
          Inactive
        </Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-purple">
        <BusFront className="me-2" />
        Fleet Management
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
                  placeholder="Search fleet..."
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
                Add Bus
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Fleet Table */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0">
            <thead className="bg-light">
              <tr>
                <th>Bus ID</th>
                <th>Model</th>
                <th>Capacity</th>
                <th>Year</th>
                <th>Last Service</th>
                <th>Assigned Route</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBuses.length > 0 ? (
                currentBuses.map((bus) => (
                  <tr key={bus.id}>
                    <td>{bus.id}</td>
                    <td>{bus.model}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Person className="me-2 text-purple" size={14} />
                        {bus.capacity}
                      </div>
                    </td>
                    <td>{bus.year}</td>
                    <td>{bus.lastService}</td>
                    <td>{bus.assignedRoute}</td>
                    <td>{getStatusBadge(bus.status)}</td>
                    <td>
                      <Button variant="outline-teal" size="sm" className="me-2">
                        <Pencil size={14} />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => {
                          setSelectedBus(bus);
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
                      No buses found matching your search criteria
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
            Showing {indexOfFirstBus + 1} to {Math.min(indexOfLastBus, filteredFleet.length)} of {filteredFleet.length} buses
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

      {/* Add Bus Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-purple">
            <Plus className="me-2" />
            Add New Bus
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="busId">
                  <Form.Label>Bus ID</Form.Label>
                  <Form.Control type="text" placeholder="e.g. BUS101" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="model">
                  <Form.Label>Model</Form.Label>
                  <Form.Control type="text" placeholder="e.g. Volvo 9700" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="capacity">
                  <Form.Label>Passenger Capacity</Form.Label>
                  <Form.Control type="number" placeholder="e.g. 56" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="year">
                  <Form.Label>Manufacture Year</Form.Label>
                  <Form.Control type="number" placeholder="e.g. 2022" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="lastService">
                  <Form.Label>Last Service Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="route">
                  <Form.Label>Assigned Route</Form.Label>
                  <Form.Select>
                    <option>Select route</option>
                    <option>NYC to Boston</option>
                    <option>LA to SF</option>
                    <option>Chicago to Detroit</option>
                  </Form.Select>
                </Form.Group>
              </Col>
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
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="teal" onClick={() => {
            handleAddBus({
              id: `BUS${Math.floor(100 + Math.random() * 900)}`,
              model: 'New Bus Model',
              capacity: 50,
              year: 2023,
              lastService: '2023-06-20',
              status: 'active',
              assignedRoute: 'New Route'
            });
          }}>
            Add Bus
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-purple">Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete bus <strong>{selectedBus?.id}</strong> ({selectedBus?.model})?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDelete(selectedBus?.id)}
          >
            Delete Bus
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminFleet;