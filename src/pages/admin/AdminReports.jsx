import React, { useState } from 'react';
import {
  Container, Card, Row, Col, Table,
  Dropdown, Button, Form, InputGroup,
  ProgressBar, Badge, Tab, Tabs, ListGroup
} from 'react-bootstrap';
import {
  BarChart, PieChart, Clock, Cash,
  Ticket, BusFront, Calendar, Download,
  Filter, Printer, FileEarmarkExcel, XCircle
} from 'react-bootstrap-icons';

const AdminReports = () => {
  const [activeTab, setActiveTab] = useState('sales');
  const [dateRange, setDateRange] = useState('month');

  // Sample report data
  const salesData = [
    { month: 'Jan', revenue: 12500, bookings: 342 },
    { month: 'Feb', revenue: 11800, bookings: 315 },
    { month: 'Mar', revenue: 14200, bookings: 387 },
    { month: 'Apr', revenue: 15600, bookings: 425 },
    { month: 'May', revenue: 16800, bookings: 458 },
    { month: 'Jun', revenue: 18200, bookings: 496 },
  ];

  const routePerformance = [
    { route: 'NYC to Boston', revenue: 28600, occupancy: 82 },
    { route: 'LA to SF', revenue: 24500, occupancy: 78 },
    { route: 'Chicago to Detroit', revenue: 19800, occupancy: 72 },
    { route: 'Miami to Orlando', revenue: 15400, occupancy: 65 },
  ];

  const paymentMethods = [
    { method: 'Credit Card', value: 65, color: 'purple' },
    { method: 'PayPal', value: 20, color: 'teal' },
    { method: 'Bank Transfer', value: 10, color: 'warning' },
    { method: 'Other', value: 5, color: 'secondary' },
  ];

  const recentCancellations = [
    { id: 'BK1001', customer: 'John Doe', route: 'NYC to Boston', date: '2023-06-15', amount: '$90' },
    { id: 'BK1003', customer: 'Mike Johnson', route: 'Chicago to Detroit', date: '2023-06-14', amount: '$140' },
    { id: 'BK1007', customer: 'Sarah Williams', route: 'Miami to Orlando', date: '2023-06-16', amount: '$75' },
  ];

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-purple">
        <BarChart className="me-2" />
        Reports Dashboard
      </h2>

      {/* Date Range Selector */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={6}>
              <h5 className="mb-0 text-teal">Report Period</h5>
            </Col>
            <Col md={6}>
              <div className="d-flex">
                <Button
                  variant={dateRange === 'week' ? 'teal' : 'outline-secondary'}
                  className="me-2"
                  onClick={() => setDateRange('week')}
                >
                  Weekly
                </Button>
                <Button
                  variant={dateRange === 'month' ? 'teal' : 'outline-secondary'}
                  className="me-2"
                  onClick={() => setDateRange('month')}
                >
                  Monthly
                </Button>
                <Button
                  variant={dateRange === 'year' ? 'teal' : 'outline-secondary'}
                  onClick={() => setDateRange('year')}
                >
                  Yearly
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Report Tabs */}
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Tab eventKey="sales" title={
          <span className="d-flex align-items-center">
            <Cash className="me-2" /> Sales
          </span>
        } />
        <Tab eventKey="routes" title={
          <span className="d-flex align-items-center">
            <BusFront className="me-2" /> Routes
          </span>
        } />
        <Tab eventKey="bookings" title={
          <span className="d-flex align-items-center">
            <Ticket className="me-2" /> Bookings
          </span>
        } />
      </Tabs>

      {/* Sales Report */}
      {activeTab === 'sales' && (
        <Row className="g-4 mb-4">
          <Col md={8}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Header className="bg-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0 text-purple">
                  <Cash className="me-2" />
                  Revenue Overview
                </h5>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-secondary" size="sm">
                    <Download className="me-2" />
                    Export
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Printer className="me-2" />
                      Print
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FileEarmarkExcel className="me-2" />
                      Excel
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Header>
              <Card.Body>
                {/* In a real app, this would be a chart component */}
                <div className="bg-light rounded p-4 text-center">
                  <h4 className="text-teal">Monthly Revenue Chart</h4>
                  <p className="text-muted">Bar chart showing revenue from {salesData[0].month} to {salesData[salesData.length-1].month}</p>
                  <Table hover className="mt-4">
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Revenue</th>
                        <th>Bookings</th>
                        <th>Avg. Ticket</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesData.map((data, index) => (
                        <tr key={index}>
                          <td>{data.month}</td>
                          <td>${data.revenue.toLocaleString()}</td>
                          <td>{data.bookings}</td>
                          <td>${Math.round(data.revenue/data.bookings)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Header className="bg-white">
                <h5 className="mb-0 text-purple">
                  <Cash className="me-2" />
                  Payment Methods
                </h5>
              </Card.Header>
              <Card.Body>
                {/* In a real app, this would be a pie chart */}
                <div className="bg-light rounded p-4 text-center">
                  <h4 className="text-teal">Payment Distribution</h4>
                  <p className="text-muted">Pie chart showing payment methods</p>
                  <div className="mt-4">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span>{method.method}</span>
                          <span>{method.value}%</span>
                        </div>
                        <ProgressBar
                          variant={method.color}
                          now={method.value}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Routes Report */}
      {activeTab === 'routes' && (
        <Card className="mb-4 shadow-sm border-0">
          <Card.Header className="bg-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0 text-purple">
              <BusFront className="me-2" />
              Route Performance
            </h5>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" size="sm">
                <Filter className="me-2" />
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>By Revenue</Dropdown.Item>
                <Dropdown.Item>By Occupancy</Dropdown.Item>
                <Dropdown.Item>By Profitability</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body>
            <Table hover responsive>
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Revenue</th>
                  <th>Occupancy Rate</th>
                  <th>Performance</th>
                </tr>
              </thead>
              <tbody>
                {routePerformance.map((route, index) => (
                  <tr key={index}>
                    <td>{route.route}</td>
                    <td>${route.revenue.toLocaleString()}</td>
                    <td>
                      <ProgressBar now={route.occupancy} label={`${route.occupancy}%`} variant="teal" />
                    </td>
                    <td>
                      {route.occupancy > 80 ? (
                        <Badge bg="teal">Excellent</Badge>
                      ) : route.occupancy > 65 ? (
                        <Badge bg="purple">Good</Badge>
                      ) : (
                        <Badge bg="warning" text="dark">Needs Attention</Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {/* Bookings Report */}
      {activeTab === 'bookings' && (
        <Row className="g-4">
          <Col md={8}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Header className="bg-white">
                <h5 className="mb-0 text-purple">
                  <Ticket className="me-2" />
                  Booking Trends
                </h5>
              </Card.Header>
              <Card.Body>
                {/* In a real app, this would be a line chart */}
                <div className="bg-light rounded p-4 text-center">
                  <h4 className="text-teal">Bookings Over Time</h4>
                  <p className="text-muted">Line chart showing booking trends</p>
                  <Table hover className="mt-4">
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Bookings</th>
                        <th>% Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesData.map((data, index) => (
                        <tr key={index}>
                          <td>{data.month}</td>
                          <td>{data.bookings}</td>
                          <td className={index > 0 && data.bookings > salesData[index-1].bookings ? 'text-success' : 'text-danger'}>
                            {index > 0 ? 
                              `${Math.round((data.bookings - salesData[index-1].bookings)/salesData[index-1].bookings * 100)}%` 
                              : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Header className="bg-white">
                <h5 className="mb-0 text-purple">
                  <XCircle className="me-2" />
                  Recent Cancellations
                </h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {recentCancellations.map((cancel, index) => (
                    <ListGroup.Item key={index}>
                      <div className="d-flex justify-content-between">
                        <strong>{cancel.id}</strong>
                        <span className="text-danger">{cancel.amount}</span>
                      </div>
                      <div className="text-muted">{cancel.customer}</div>
                      <small>{cancel.route} • {cancel.date}</small>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Quick Stats */}
      <Row className="g-4 mt-2">
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">Total Revenue</h6>
                  <h3 className="text-purple">${salesData.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}</h3>
                </div>
                <Cash size={32} className="text-teal" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">Total Bookings</h6>
                  <h3 className="text-purple">{salesData.reduce((sum, item) => sum + item.bookings, 0)}</h3>
                </div>
                <Ticket size={32} className="text-teal" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">Avg. Occupancy</h6>
                  <h3 className="text-purple">
                    {Math.round(routePerformance.reduce((sum, item) => sum + item.occupancy, 0)/routePerformance.length)}%
                  </h3>
                </div>
                <BusFront size={32} className="text-teal" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">Cancellation Rate</h6>
                  <h3 className="text-purple">5.2%</h3>
                </div>
                <XCircle size={32} className="text-teal" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminReports;