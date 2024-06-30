// RegistrationForm.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CSS/registration.css';
import axios from 'axios'

function RegistrationForm() {
  const [studentName, setStudentName] = useState('');
  const [branchSection, setBranchSection] = useState('');
  const [hallTicketNumber, setHallTicketNumber] = useState('');
  const [contactPhone, setcontactPhone] = useState('');
  const [section, setsection] = useState('');
  const [email, setemail] = useState('');
  const [category, setcategory] = useState('');
  const [password, setpassword] = useState('');
  const [marks10th, setmarks10th] = useState('')
  const [marks12th, setmarks12th] = useState('')
  const [fatherName, setfatherName] = useState('')
  const [motherName, setmotherName] = useState('')
  const [parentAltContact, setparentAltContact] = useState('')
  const [fatherOccupation, setfatherOccupation] = useState('')
  const [parentContact, setparentContact] = useState('')
  const [parentEmail, setparentEmail] = useState('')
    

 

  const handleStudentDetailsChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'studentName':
        setStudentName(value);
        break;
      case 'branchSection':
        setBranchSection(value);
        break;
      case 'hallTicketNumber':
        setHallTicketNumber(value);
        break;
      case 'contactPhone':
        setcontactPhone(value);
        break;
      case 'section':
        setsection(value);
        break;
      case 'email':
        setemail(value);
        break;
      case 'category':
        setcategory(value);
        break;
      case 'password':
        setpassword(value);
        break;
      case 'marks10th':
        setmarks10th(value);
        break;
      case 'marks12th':
        setmarks12th(value);
        break;
      default:
        break;
    }
  };

  const handleParentsDetailsChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'fatherName':
        setfatherName(value);
        break;
      case 'fatherOccupation':
        setfatherOccupation(value);
        break;
      case 'motherName':
        setmotherName(value);
        break;
      case 'parentAltContact':
        setparentAltContact(value);
        break;
      case 'parentContact':
        setparentContact(value);
        break;
      case 'parentEmail':
        setparentEmail(value);
        break;

        default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    console.log(studentName)
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/student/register', {
        studentName,
        branchSection,
        hallTicketNumber,
        contactPhone,
        section,
        email,
        category,
        password,
        marks10th,
        marks12th,
        fatherName,
        fatherOccupation,
        motherName,
        parentContact,
        parentAltContact,
        parentEmail,
      });

      console.log('Registration successful!', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container className='c1'>
      <h2>REGISTRATION FORM</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Student Details Column */}
          <Col md={6}>
            <h3>STUDENT DETAILS</h3>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Name of the Student</Form.Label>
              <Form.Control
              className='fc'
                type="text"
                name="studentName"
                value={studentName}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Name'
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Branch & Section</Form.Label>
              <Form.Control
              className='fc'
                type="text"
                name="branchSection"
                value={branchSection}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Branch & Section'
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Roll Number</Form.Label>
              <Form.Control
              className='fc'
                type="text"
                name="hallTicketNumber"
                value={hallTicketNumber}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Roll Number'
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Contact Number</Form.Label>
              <Form.Control
              className='fc'
                type="tel"
                name="contactPhone"
                value={contactPhone}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Phone Number'
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'> Section</Form.Label>
              <Form.Control
              className='fc'
                type="tel"
                name="section"
                value={section}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Section'
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Email ID</Form.Label>
              <Form.Control
              className='fc'
                type="email"
                name="email"
                value={email}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your E-mail'
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Category</Form.Label>
              <Form.Control
              className='fc'
                type="text"
                name="category"
                value={category}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your category'
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Password</Form.Label>
              <Form.Control
              className='fc'
                type='password'
                name="password"
                value={password}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your password'
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>10th marks</Form.Label>
              <Form.Control
              className='fc'
                type="text"
                name="marks10th"
                value={marks10th}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your 10th marks'
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>12th marks</Form.Label>
              <Form.Control
              className='fc'
                type="text"
                name="marks12th"
                value={marks12th}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your 12th marks'
                required
              />
            </Form.Group>
            
          </Col>

          {/* Parents Details Column */}
          <Col md={6}>
            <h3>PARENTS DETAILS</h3>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Father’s Name</Form.Label>
              <Form.Control
              className='fc'
                type="text"
                name="fatherName"
                value={fatherName}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Father's Name"
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Occupation</Form.Label>
              <Form.Control
              className='fc'
                type="text"
                name="fatherOccupation"
                value={fatherOccupation}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Father's Occupation"
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Mother’s Name</Form.Label>
              <Form.Control
              className='fc'
                type="text"
                name="motherName"
                value={motherName}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Mother's Name"
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Contact Number</Form.Label>
              <Form.Control
              className='fc'
                type="tel"
                name="parentContact"
                value={parentContact}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Parent's Contact"
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Alternate Contact Number</Form.Label>
              <Form.Control
              className='fc'
                type="tel"
                name="parentAltContact"
                value={parentAltContact}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Parent's Alternate Contact"
                required
              />
            </Form.Group>
            <Form.Group className='fg'>
              <Form.Label className='fl'>Parent's Email ID</Form.Label>
              <Form.Control
              className='fc'
                type="email"
                name="parentEmail"
                value={parentEmail}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Parent's E-mail"
                required
              />
            </Form.Group>
            
          </Col>
        </Row>
        <div>
          <Link to="/tregister">Not a Student? Click Here for Teacher Registration</Link>
          <button className='btn-primary1'>Register</button>
        </div>
      </Form>
    </Container>
  );
}


export default RegistrationForm;
