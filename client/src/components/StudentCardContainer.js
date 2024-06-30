// StudentCardContainer.js

import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import MyImage from "../images/logo.jpg";

const StudentCard = ({ student }) => {
  return (
    <Card style={{ width: '47%', margin: 'auto', marginLeft: '20px', marginTop: '50px', borderRadius: '20px' }}>
      <Row style={{ marginTop: '20px', marginLeft: '50px' }}>
        <Col md={4} style={{ marginTop: '10px', marginLeft: '0px' }}>
          <Card.Img variant="top" src={MyImage} style={{ height: '220px', width: '200px', objectFit: 'cover', marginTop: '10px' }} />
        </Col>

        <Col md={7} style={{ marginLeft: '0px'}}>
          <Row className="mt-2">
            {/* Roll No. Card */}
            <Col md={6}>
              <Card className="shadow p-2 mb-3 bg-white rounded">
                <Card.Body>
                  <Card.Title className="text-lg font-bold">Name</Card.Title>
                  <Card.Text>{student.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Name Card */}
            <Col md={6}>
              <Card className="shadow p-2 mb-3 bg-white rounded">
                <Card.Body>
                  <Card.Title className="text-lg font-bold">Roll No.</Card.Title>
                  <Card.Text>{student.rollNo}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Additional Cards (CGPA, Points, CLASS) */}
          <Row>
            <Col md={4}>
              <Card className="shadow p-3 mb-3 bg-white rounded">
                <Card.Body>
                  <Card.Title className="text-lg font-bold">CGPA</Card.Title>
                  <Card.Text>{student.cgpa}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow p-3 mb-3 bg-white rounded">
                <Card.Body>
                  <Card.Title className="text-lg font-bold">Points</Card.Title>
                  <Card.Text>{student.points}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow p-3 mb-3 bg-white rounded">
                <Card.Body>
                  <Card.Title className="text-lg font-bold">CLASS</Card.Title>
                  <Card.Text>{student.class}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Card.Footer className="d-flex justify-content-end" style={{ background: 'none', border: 'none',marginBottom:'5px' }}>
        <Button variant="primary">View Details</Button>
      </Card.Footer>
    </Card>
  );
};

const StudentCardContainer = () => {
  // Dummy data for the first student
  const student1 = {
    name: 'John Doe',
    rollNo: '12345',
    cgpa: '3.8',
    points: '300',
    class: 'A',
  };

  // Dummy data for the second student
  const student2 = {
    name: 'Jane Smith',
    rollNo: '67890',
    cgpa: '3.5',
    points: '280',
    class: 'B',
  };

  const student3 = {
    name: 'Jane Smith',
    rollNo: '67890',
    cgpa: '3.5',
    points: '280',
    class: 'B',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StudentCard student={student1} />
        <StudentCard student={student2} />
      </div>
      <StudentCard student={student3} />
    </div>
  );
};

export default StudentCardContainer;
