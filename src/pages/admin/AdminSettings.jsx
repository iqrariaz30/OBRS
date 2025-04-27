import React, { useState } from 'react';
import {
  Container, Card, Form, Button,
  Tab, Tabs, Row, Col, Alert,
  InputGroup, Badge, ListGroup, Table
} from 'react-bootstrap';
import {
  Gear, ShieldLock, Bell, CreditCard,
  Ticket, BusFront, People, Save,
  Envelope, Globe, Key, Cash
} from 'react-bootstrap-icons';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    companyName: 'BusTicket Inc.',
    adminEmail: 'admin@busticket.com',
    timezone: 'UTC-05:00 (Eastern Time)',
    maintenanceMode: false,
    bookingWindow: 90,
    cancellationPolicy: '24 hours',
    currency: 'USD'
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertMessage('Settings saved successfully!');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setAlertMessage('New passwords do not match!');
      setShowAlert(true);
      return;
    }
    setAlertMessage('Password changed successfully!');
    setShowAlert(true);
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setTimeout(() => setShowAlert(false), 3000);
  };

  const notificationSettings = [
    { id: 'newBooking', name: 'New Bookings', enabled: true },
    { id: 'cancellation', name: 'Cancellations', enabled: true },
    { id: 'payment', name: 'Payment Issues', enabled: true },
    { id: 'maintenance', name: 'Maintenance Alerts', enabled: false },
  ];

  const toggleNotification = (id) => {
    const updatedSettings = notificationSettings.map(item =>
      item.id === id ? { ...item, enabled: !item.enabled } : item
    );
    // In a real app, you would update state or make an API call
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-purple">
        <Gear className="me-2" />
        System Settings
      </h2>

      {showAlert && (
        <Alert variant="teal" onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Tab eventKey="general" title={
          <span className="d-flex align-items-center">
            <Gear className="me-2" /> General
          </span>
        } />
        <Tab eventKey="security" title={
          <span className="d-flex align-items-center">
            <ShieldLock className="me-2" /> Security
          </span>
        } />
        <Tab eventKey="notifications" title={
          <span className="d-flex align-items-center">
            <Bell className="me-2" /> Notifications
          </span>
        } />
        <Tab eventKey="payment" title={
          <span className="d-flex align-items-center">
            <CreditCard className="me-2" /> Payment
          </span>
        } />
      </Tabs>

      {/* General Settings */}
      {activeTab === 'general' && (
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-white">
            <h5 className="mb-0 text-purple">
              <Gear className="me-2" />
              General Settings
            </h5>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="companyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="adminEmail">
                    <Form.Label>Admin Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="adminEmail"
                      value={formData.adminEmail}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="timezone">
                    <Form.Label>Timezone</Form.Label>
                    <Form.Select
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleInputChange}
                    >
                      <option>UTC-05:00 (Eastern Time)</option>
                      <option>UTC-06:00 (Central Time)</option>
                      <option>UTC-07:00 (Mountain Time)</option>
                      <option>UTC-08:00 (Pacific Time)</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="currency">
                    <Form.Label>Currency</Form.Label>
                    <Form.Select
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                    >
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="bookingWindow">
                    <Form.Label>Booking Window (days)</Form.Label>
                    <Form.Control
                      type="number"
                      name="bookingWindow"
                      value={formData.bookingWindow}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="cancellationPolicy">
                    <Form.Label>Cancellation Policy</Form.Label>
                    <Form.Select
                      name="cancellationPolicy"
                      value={formData.cancellationPolicy}
                      onChange={handleInputChange}
                    >
                      <option>24 hours</option>
                      <option>48 hours</option>
                      <option>72 hours</option>
                      <option>No refunds</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4" controlId="maintenanceMode">
                <Form.Check
                  type="switch"
                  label="Maintenance Mode"
                  name="maintenanceMode"
                  checked={formData.maintenanceMode}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  When enabled, the booking system will be temporarily unavailable to users.
                </Form.Text>
              </Form.Group>
              <Button variant="teal" type="submit">
                <Save className="me-2" />
                Save General Settings
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}

      {/* Security Settings */}
      {activeTab === 'security' && (
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-white">
            <h5 className="mb-0 text-purple">
              <ShieldLock className="me-2" />
              Security Settings
            </h5>
          </Card.Header>
          <Card.Body>
            <h5 className="text-teal mb-4">
              <Key className="me-2" />
              Change Password
            </h5>
            <Form onSubmit={handlePasswordSubmit} className="mb-5">
              <Form.Group className="mb-3" controlId="currentPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="confirmPassword">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>
              <Button variant="teal" type="submit">
                Change Password
              </Button>
            </Form>

            <h5 className="text-teal mb-4">
              <People className="me-2" />
              Admin Access
            </h5>
            <Table hover>
              <thead>
                <tr>
                  <th>Admin</th>
                  <th>Email</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Super Admin</td>
                  <td>admin@busticket.com</td>
                  <td>Today, 10:45 AM</td>
                  <td>
                    <Button variant="outline-teal" size="sm" className="me-2">
                      Edit
                    </Button>
                    <Button variant="outline-danger" size="sm" disabled>
                      Remove
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Support Admin</td>
                  <td>support@busticket.com</td>
                  <td>Yesterday, 4:30 PM</td>
                  <td>
                    <Button variant="outline-teal" size="sm" className="me-2">
                      Edit
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {/* Notification Settings */}
      {activeTab === 'notifications' && (
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-white">
            <h5 className="mb-0 text-purple">
              <Bell className="me-2" />
              Notification Settings
            </h5>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h5 className="text-teal mb-3">
                <Envelope className="me-2" />
                Email Notifications
              </h5>
              <ListGroup variant="flush" className="mb-4">
                {notificationSettings.map((item) => (
                  <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                    <span>{item.name}</span>
                    <Form.Check
                      type="switch"
                      id={`notification-${item.id}`}
                      checked={item.enabled}
                      onChange={() => toggleNotification(item.id)}
                    />
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <h5 className="text-teal mb-3">
                <Bell className="me-2" />
                Alert Preferences
              </h5>
              <Form.Group className="mb-3" controlId="notificationEmail">
                <Form.Label>Notification Email Address</Form.Label>
                <Form.Control
                  type="email"
                  value="alerts@busticket.com"
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="notificationFrequency">
                <Form.Label>Notification Frequency</Form.Label>
                <Form.Select>
                  <option>Immediately</option>
                  <option>Hourly Digest</option>
                  <option>Daily Digest</option>
                </Form.Select>
              </Form.Group>
              <Button variant="teal" type="submit">
                <Save className="me-2" />
                Save Notification Settings
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}

      {/* Payment Settings */}
      {activeTab === 'payment' && (
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-white">
            <h5 className="mb-0 text-purple">
              <CreditCard className="me-2" />
              Payment Settings
            </h5>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h5 className="text-teal mb-3">
                <Globe className="me-2" />
                Payment Gateways
              </h5>
              <Form.Group className="mb-3" controlId="stripeEnabled">
                <Form.Check
                  type="switch"
                  label={
                    <>
                      <Badge bg="purple" className="me-2">Stripe</Badge>
                      Credit Card Payments
                    </>
                  }
                  defaultChecked
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="paypalEnabled">
                <Form.Check
                  type="switch"
                  label={
                    <>
                      <Badge bg="teal" className="me-2">PayPal</Badge>
                      PayPal Payments
                    </>
                  }
                  defaultChecked
                />
              </Form.Group>

              <h5 className="text-teal mb-3 mt-4">
                <Cash className="me-2" />
                Payment Options
              </h5>
              <Form.Group className="mb-3" controlId="depositEnabled">
                <Form.Check
                  type="switch"
                  label="Allow Deposit Payments"
                  defaultChecked
                />
                <Form.Text className="text-muted">
                  Customers can pay a deposit (50%) to secure their booking
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-4" controlId="refundPolicy">
                <Form.Label>Refund Policy</Form.Label>
                <Form.Select>
                  <option>Full refund up to 48 hours before departure</option>
                  <option>Full refund up to 24 hours before departure</option>
                  <option>Credit only (no cash refunds)</option>
                </Form.Select>
              </Form.Group>
              <Button variant="teal" type="submit">
                <Save className="me-2" />
                Save Payment Settings
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default AdminSettings;