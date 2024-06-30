import React, { useEffect, useRef,useState } from 'react';
import { ProgressBar, Container, Row, Col,Card,Form,Navbar, Nav  } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'chart.js/auto'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGraduationCap, faChartBar, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'


import axios from 'axios'

const DashboardT = ({ data, options }) => {
  const chartRef = useRef(null);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [subwiseatt,setsubwiseatt] = useState('')
  const [cie,setcie] = useState('')
  const [totalAtt,settotalAtt] = useState('')
  const [subjectwiseData, setSubjectwiseData] = useState({});
  const [cieData, setcieData] = useState({});
  // const [totalAttData, settotalAttData] = useState({});

  const {hallTicketNumber}=useParams();


  
  const fetchAttendanceData = async (hallTicketNumber) => {
    try {
      const response = await axios.get(`http://localhost:5000/attendance/${hallTicketNumber}`);
      
      // Check for a successful response
      if (response.status === 200) {
        // Process the data received from the backend as needed
        console.log('Data:', response.data);
        setsubwiseatt(response.data.data)
        console.log(subwiseatt)
        

      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors or set state accordingly
      throw error; // You can rethrow the error to handle it outside this function
    }
  };

  const fetchAttendanceDataCIE = async (hallTicketNumber) => {
    try {
      const response = await axios.get(`http://localhost:5000/student/marks/${hallTicketNumber}`);
      
      if (response.status === 200) {
        setcie(response.data.data);
      } else {
        throw new Error('Failed to fetch CIE data');
      }
    } catch (error) {
      console.error('Error fetching CIE data:', error);
      throw error;
    }
  };
  const fetchAttendanceDatatotalAtt = async (hallTicketNumber) => {
    try {
      const response = await axios.get(`http://localhost:5000/attendance/overallattendance/${hallTicketNumber}`);
      
      if (response.status === 200) {

        settotalAtt(response.data.data);
        console.log(response.data)
      } else {
        throw new Error('Failed to fetch total Att data');
      }
    } catch (error) {
      console.error('Error fetching CIE data:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (subwiseatt && subwiseatt.length > 0) {
      const updatedSubjectwiseData = {};
      subwiseatt.forEach((subject, index) => {
        const { totalAttendance, totalClasses, subname, subcode } = subject;
        const attendancePercentage = (totalAttendance / totalClasses) * 100;
        // You can modify the key structure here based on your requirements
        updatedSubjectwiseData[`Subject ${index + 1}`] = {
          totalAttendance,
          totalClasses,
          subname,
          subcode,
          attendancePercentage
        };
      });
      setSubjectwiseData(updatedSubjectwiseData);
      console.log(subjectwiseData)
    }
  }, [subwiseatt]);


  useEffect(() => {
    if (cie && Object.keys(cie).length > 0) {
      const updatedCieData = {};
      cie.semesters.forEach((semester) => {
        semester.subjects.forEach((subject) => {
          const { marks, subjectName } = subject;
          if (!updatedCieData[subjectName]) {
            updatedCieData[subjectName] = {
              midMarks: [],
              assignmentMarks: [],
              slipTestMarks: [],
            };
          }
          updatedCieData[subjectName].midMarks.push(marks.midMarks);
          updatedCieData[subjectName].assignmentMarks.push(marks.assignmentMarks);
          updatedCieData[subjectName].slipTestMarks.push(marks.slipTestMarks);
        });
      });
      setcieData(updatedCieData);
    }
  }, [cie]);
  
  
  
  // Generate chartData based on the updated subjectwiseData
  
    const labels = Object.values(subjectwiseData).map((subject) => subject.subname); // Use subjects as labels
    const data12 = Object.values(subjectwiseData).map((subject) => subject.attendancePercentage); // Extract attendance as data
  
    const chartData1 = {
      labels,
      datasets: [
        {
          label: 'Subject-wise Attendance',
          backgroundColor: '#A50014',
          borderColor: '#A50014',
          borderWidth: 1,
          hoverBackgroundColor: 'red',
          hoverBorderColor: 'red',
          data:data12,
          barPercentage: 1.0,
          categoryPercentage: 0.7,
          barThickness: 'flex',
        },
      ],
    };
  
  // Generate chartData based on the updated subjectwiseData
  
 const labelsCie = Object.keys(cieData); // Use subject names as labels
const dataMidMarks = Object.values(cieData).map((subject) => subject.midMarks);
const dataAssignmentMarks = Object.values(cieData).map((subject) => subject.assignmentMarks);
const dataSlipTestMarks = Object.values(cieData).map((subject) => subject.slipTestMarks);

const chartDatacie = {
  labels: labelsCie,
  datasets: [
    {
      label: 'Mid Marks',
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderWidth: 1,
      data: dataMidMarks,
    },
    {
      label: 'Assignment Marks',
      backgroundColor: 'green',
      borderColor: 'green',
      borderWidth: 1,
      data: dataAssignmentMarks,
    },
    {
      label: 'Slip Test Marks',
      backgroundColor: 'orange',
      borderColor: 'orange',
      borderWidth: 1,
      data: dataSlipTestMarks,
    },
  ],
};

  
    // Use chartData in your chart component (Bar chart, etc.)
 


  useEffect(() => {
    try {
    //   const user = JSON.parse(localStorage.getItem('user'));
    //   console.log('User data from localStorage:', user);
  
    //   if (user) {
    //     const hallTicketNumberObj = user;
    //     console.log(hallTicketNumberObj)
    //     const keys = Object.keys(hallTicketNumberObj).sort((a, b) => parseInt(a) - parseInt(b));
    //     let hallTicketNumber = '';
    //     console.log(hallTicketNumberObj)
    //     keys.forEach(key => {
    //       hallTicketNumber += hallTicketNumberObj[key];
    //     });
  
        // console.log('Parsed Hall Ticket Number:',hallTicketNumber);
        fetchAttendanceData(hallTicketNumber);
        fetchAttendanceDataCIE(hallTicketNumber);
        fetchAttendanceDatatotalAtt(hallTicketNumber);
        
    //    else {
    //     console.error('User data or hallTicketNumber not found in localStorage.');
    //   }
    } catch (error) {
      console.error('Error parsing user data:');
    }
  }, [selectedSemester]);

  
  
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user')); 
  //   // console.log(user.data.hallTicketNumber)
  //   const hallTicketNumber = user
  //   console.log(hallTicketNumber)
  //   fetchAttendanceData(hallTicketNumber);
  // }, [selectedSemester]);


  useEffect(() => {
    chartRef.current = new Chart('myChartCanvas', {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {

      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, options]);

  const semestersData = {
    1: { sgpa: 8.3, cgpa: 8.5, overallActivity: 60, semActivity: 20, attendance: 75,subjectwiseattendence: [65, 75, 80, 90, 85],Semwiseattendance:[80],Monthwiseattendence:[80,75,70,90],Internal:[10,85,18,37]},
    2: { sgpa: 8.6, cgpa: 8.8, overallActivity: 65, semActivity: 25, attendance: 80 ,subjectwiseattendence: [70, 80, 85, 88, 92],Semwiseattendance:[80,90],Monthwiseattendence:[80,75,70,90],Internal:[10,84,16,36]},
    3: { sgpa: 9.0, cgpa: 8.5, overallActivity: 65, semActivity: 0, attendance: 85,subjectwiseattendence: [65, 75, 80, 90, 85],Semwiseattendance:[80,85,90,],Monthwiseattendence:[80,75,70],Internal:[10,85,18,37]},
    4: { sgpa: 8.2, cgpa: 8.8, overallActivity: 70, semActivity: 5, attendance: 80 ,subjectwiseattendence: [70, 80, 85, 90, 92],Semwiseattendance:[80,85,90,82],Monthwiseattendence:[80,75,70,90,86],Internal:[10,84,16,36]},

  };


  const chartData = {
    labels: ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
    datasets: [
      {
        label: 'Subject-wise Attendance',
        backgroundColor: '#A50014',
        borderColor: '#A50014',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
        data: semestersData[selectedSemester].subjectwiseattendence,
        barPercentage: 1.0,
        categoryPercentage: 0.7,
        barThickness: 'flex',
      },
    ],
  };

  const Semwise = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
    datasets: [
      {
        label: 'Sem-wise Attendance',
        backgroundColor: '#A50014',
        borderColor: '#A50014',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
        data: semestersData[selectedSemester].Semwiseattendance,
        barPercentage: 1.0,
        categoryPercentage: 0.7,
        barThickness: 'flex',
      },
    ],
  };

  const Monthwise = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
    datasets: [
      {
        label: 'Monthwise Attendance',
        backgroundColor: '#A50014',
        borderColor: '#A50014',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
        data:semestersData[selectedSemester].Monthwiseattendence,
        barPercentage: 1.0,
        categoryPercentage: 0.7,
        barThickness: 'flex',
      },
    ],
  };

  const Internal = {
    labels: ['Assignment', 'Attendence', 'Mid Marks', 'CIE'],
    datasets: [
      {
        label: 'Internal Evaluation',
        backgroundColor: '#A50014',
        borderColor: '#A50014',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
        data:semestersData[selectedSemester].Internal,
        barPercentage: 1.0,
        categoryPercentage: 0.7,
        barThickness: 'flex',
      },
    ],
  };

  const chartStyles = {
    width: '120%',
    height: '10%',
  };

  const circularProgressBarStyles = buildStyles({
    trailColor: 'rgba(0, 0, 0, 0.1)',
    pathColor: '#A50014',
  });

  

  const attendanceValue = semestersData[selectedSemester].attendance;

  return (
    <>
    
       <Container fluid className="p-0">
        <Row className="m-0">
          {/* <Col md={2} className="p-0 position-fixed h-100" style={{ top: 0, bottom: 0, width: "100px" }}>
            <Navbar bg="light" expand="md" className="flex-column h-100">
              
              <button className='border p-5 rounded-xl mt-16 ml-4  text-black hover:bg-red-600 hover:text-white'>Activity</button>
              <button className='border p-5 rounded-xl mt-16 ml-4  text-black hover:bg-red-600 hover:text-white'>Backlog</button>
              <button className='border p-5 rounded-xl mt-16 ml-4  text-black hover:bg-red-600 hover:text-white'>Detention</button>
              <button className='border p-5 rounded-xl mt-16 ml-4  text-black hover:bg-red-600 hover:text-white'></button>
            </Navbar>
          </Col> */}
          <Col md={2} className="p-0 position-fixed h-100" style={{ top:0, bottom: 0,width:"100px"}}>
      <Navbar bg="light" expand="md" className="flex-column h-100">
        <Navbar.Collapse>
          <Nav className="flex-column">
            <Nav.Link href="/activity" >
              <FontAwesomeIcon icon={faBook}  /> {/* Replace with your desired icon */}
              <span class="absolute top-full left-1/2 transform -translate-x-1/2 hidden text-sm bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 transition-opacity duration-300">
                  Activity Points
              </span>
            </Nav.Link>
            <Nav.Link href="/backlog">
              <FontAwesomeIcon icon={faGraduationCap} /> {/* Replace with your desired icon */}
            </Nav.Link>
            <Nav.Link href="/detained">
              <FontAwesomeIcon icon={faChartBar} /> {/* Replace with your desired icon */}
            </Nav.Link>
            <Nav.Link href="/cie">
              <FontAwesomeIcon icon={faClipboardList} /> {/* Replace with your desired icon */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </Col>

          <Col md={{ span: 10, offset: 2 }} className="ml-md-5">
            <Container className="mx-auto mt-8 p-8 rounded-lg">
              <Row className="mt-5">
                <Col md={12}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Semester</Form.Label>
                    <Form.Control
                      as="select"
                      value={selectedSemester}
                      onChange={(e) => setSelectedSemester(Number(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <option key={sem} value={sem}>
                          Semester {sem}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-5">
              <Col md={5}>
                <Card className="shadow-xl p-14 mr-14 mb-5 bg-white rounded" style={{ width: "100%"}}>
                <Card.Body>
                  <Card.Title className="text-lg font-bold">SGPA</Card.Title>
                  <Card.Text>{semestersData[selectedSemester].sgpa}</Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col md={3}>
          <Card className="shadow-xl p-14 mr-14 mb-5 bg-white rounded" style={{ width: "100%"}}>
              <Card.Body>
                <Card.Title className="text-lg font-bold">CGPA</Card.Title>
                <Card.Text>{semestersData[selectedSemester].cgpa}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
          <Card className="shadow-xl p-14 mr-14 mb-5 bg-white rounded" style={{ width: "100%"}}>
              <Card.Body>
                <Card.Title className="text-lg font-bold">OverAll Activity Points</Card.Title>
                <Card.Text>{semestersData[selectedSemester].overallActivity}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
          <Card className="shadow-xl p-14 mr-14 mb-5 bg-white rounded" style={{ width: "100%"}}>
              <Card.Body>
                <Card.Title className="text-lg font-bold">Sem Activity Points</Card.Title>
                <Card.Text>{semestersData[selectedSemester].semActivity}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
              </Row>
              <Row className="mt-5">
                <Col md={3}>
                  <Card className=" p-3 mb-5 mr-6 shadow-xl bg-white rounded-xl" style={{ height: "270px" }}>
                  <Card.Body>
                    <Card.Title className="text-lg font-bold">Attendance</Card.Title>
                      <Card.Text>
                        <div style={{ width: '200px', height: '200px' }}>
                          <CircularProgressbar value={totalAtt} text={`${totalAtt}%`} className="mt-2"  strokeWidth={10} styles={circularProgressBarStyles} />
                        </div>
                      </Card.Text>
                   </Card.Body>
                 </Card>
                </Col>
                <Col md={4}>
                  <Card className=" p-3 mb-5 shadow-xl bg-white rounded-xl" style={{ height: "270px", width: "430px" }}>
                      <Card.Body>
                          <Card.Title className="text-lg font-bold">Subject-wise Attendance</Card.Title>
                            <Card.Text>
                              <Bar data={chartData1} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                  <Card className=" p-3 mb-5 shadow-xl bg-white rounded-xl" style={{ height: "270px", width: "430px", marginLeft: "40px"  }}>
                    <Card.Body>
                      <Card.Title className="text-lg font-bold">Subject-wise Attendance</Card.Title>
                      <Card.Text>
                        <Bar data={chartData1} />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col md={3}>
                  <Card className="shadow-xl  mr-6  p-3 mb-5 bg-white rounded-xl" style={{ height: "270px" }}>
                    <Link to='/discovery'>
                    <Card.Body>
                      <Card.Title className="text-lg font-bold">Discovery Wheel</Card.Title>
                      <Card.Text>
                        <div style={{ width: '200px', height: '200px' }}>
                          <CircularProgressbar value={attendanceValue} text={`${attendanceValue}%`} className="mt-2"  strokeWidth={10} styles={circularProgressBarStyles} />
                        </div>
                      </Card.Text>
                   </Card.Body>
                    </Link>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="shadow-xl p-3 mb-5 bg-white rounded-xl" style={{ height: "270px", width: "430px" }}>
                  <Card.Body>
                        <Card.Title className="text-lg font-bold">Monthwise Attendance</Card.Title>
                        <Card.Text>
                          <Bar data={Monthwise} />
                        </Card.Text>
                  </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="shadow-xl p-3 mb-5 bg-white rounded-xl" style={{ height: "270px", width: "430px", marginLeft: "40px" }}>
                    <Card.Body>
                      <Card.Title className="text-lg font-bold">Continous Internal Evaluation</Card.Title>
                      <Card.Text>
                        <Bar data={chartDatacie} />
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container> 
      
    </>
  );
};

export default DashboardT;


