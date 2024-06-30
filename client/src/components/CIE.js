import React, { useState,useEffect } from 'react';
import axios from 'axios'

const CIE = () => {
    const [selectedSemester, setSelectedSemester] = useState(1);
    const [subjects, setSubjects] = useState(getSubjectsForSemester(1));
    const [cgpa, setCGPA] = useState('');
    const [sgpa, setSGPA] = useState('');
    let rollNo = ''
    useEffect(() => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            console.log('User data from localStorage:', user);
            
            if (user) {
                const teacherObj = user;
                console.log(teacherObj)
                const keys = Object.keys(teacherObj).sort((a, b) => parseInt(a) - parseInt(b));
                console.log(teacherObj)
            keys.forEach(key => {
              rollNo += teacherObj[key];
            });
      
            console.log('Parsed Hall Ticket Number:',rollNo);
            // fetchAttendanceData(teacherid);
            
          } else {
            console.error('User data or hallTicketNumber not found in localStorage.');
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }, [20]);

      useEffect(() => {
        // This effect will trigger whenever 'subjects' state changes
        console.log('Subjects updated:', subjects);
      }, [subjects]); 


    function getSubjectsForSemester(semester) {



      const semesterSubjects = {
        1: [
            { id: 1, name: 'Community engagement', sliptest: '', credits: 3, midMarks: '',cie:''},
            { id: 2, name: 'CAD & Drafting', sliptest: '', credits: 4, midMarks: '',cie:'' },
            { id: 3, name: 'PPS Lab', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 4, name: 'OSP Lab', sliptest: '', credits: 2, midMarks: '',cie:''},
            { id: 5, name: 'English Lab', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 6, name: 'LA & C Lab', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 7, name: 'PPS', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 8, name: 'OSP', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 9, name: 'English', sliptest: '', credits: 3, midMarks: '',cie:'' },      
        ],
        2: [
            { id: 1, name: 'DETT', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 2, name: 'Chemistry', sliptest: '', credits: 4, midMarks: '',cie:'' },
            { id: 3, name: 'DSA', sliptest: '', credits: 3, midMarks: '',cie:''},
            { id: 4, name: 'OOP using Python', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 5, name: 'DETT Lab', sliptest: '', credits: 2, midMarks: '',cie:''},
            { id: 6, name: 'Chemistry Lab', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 7, name: 'DSA Lab', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 8, name: 'OOP Lab', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 9, name: 'Workshop/Manufacturing Practice', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 10, name: 'Engineering Exploration', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 11, name: 'SC', sliptest: '', credits: 2, midMarks: '',cie:'' },
          ],
          3: [
            { id: 1, name: 'DCCST', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 2, name: 'DLCA', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 3, name: 'DMA', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 4, name: 'JPEF', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 5, name: 'DBMS', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 6, name: 'ICFP', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 7, name: 'ITK', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 8, name: 'JPEF LAB', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 9, name: 'DBMS LAB', sliptest: '', credits: 2, midMarks: '',cie:''},
            { id: 10, name: 'ITWS', sliptest: '', credits: 3, midMarks: '',cie:'' },
          ],
          4:[
            { id: 1, name: 'PQT', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 2, name: 'Software Engineering', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 3, name: 'ATCD', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 4, name: 'DAA', sliptest: '', credits: 3, midMarks: '' },
            { id: 5, name: 'Professional Elective-1', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 6, name: 'EEA', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 7, name: 'Environmental Science', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 8, name: 'SE LAB', sliptest: '', credits: 2, midMarks: '',cie:''},
            { id: 9, name: 'DAA LAB', sliptest: '', credits: 2, midMarks: '',cie:'' },
            { id: 10, name: 'AI&ML', sliptest: '', credits: 3, midMarks: '',cie:'' },
            { id: 11, name: 'TTA', sliptest: '', credits: 2, midMarks: '',cie:''},
            { id: 12, name: 'MP-2', sliptest: '', credits: 2, midMarks: '',cie:'' },
          ],

      };
  
      return semesterSubjects[semester] || [];
    }
  
    const handleSemesterChange = (event) => {
      const semester = parseInt(event.target.value, 10);
      setSelectedSemester(semester);
      setSubjects(getSubjectsForSemester(semester));
    };
  
    
    const handleCGPAChange = (event) => {
      setCGPA(event.target.value);
    };
    const handleSGPAChange = (event) => {
        setSGPA(event.target.value);
      };
    
    const handleSlipTestChange = (event, subjectId) => {
      const updatedSubjects = subjects.map((subject) =>
        subject.id === subjectId ? { ...subject, sliptest: event.target.value } : subject
      );
      setSubjects(updatedSubjects);
    };
    const handleCieChange = (event, subjectId) => {
      const updatedSubjects = subjects.map((subject) =>
        subject.id === subjectId ? { ...subject, sliptest: event.target.value } : subject
      );
      setSubjects(updatedSubjects);
    };
    
    const handleCgpaChange = (event, subjectId) => {
      const updatedSubjects = subjects.map((subject) =>
        subject.id === subjectId ? { ...subject, sliptest: event.target.value } : subject
      );
      setSubjects(updatedSubjects);
    };
    const handleMidMarksChange = (event, subjectId) => {
      const updatedSubjects = subjects.map((subject) =>
        subject.id === subjectId ? { ...subject, midMarks: event.target.value } : subject
      );
      setSubjects(updatedSubjects);
    };
  
//     const handleSubmit = () => {
//         console.log(rollNo)

//       const payload = {
//         rollNo,
//         subjects,
//         cgpa,
//         sgpa
//       };
  
//       axios.post('http://localhost:5000/student/marks/add-cie', payload, {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then((response) => {
//     console.log('Response from the backend:', response.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
//     };
const handleSubmit = () => {
  console.log(subjects)
  const payload = {
    rollNo,
    semesterNo: selectedSemester,
    subjects,
    cgpa,
    sgpa
  };

  axios.post('http://localhost:5000/student/marks/add-cie', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    console.log('Response from the backend:', response.data);
    // Perform actions based on the response if needed
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle errors if necessary
  });
};

    const headerStyle = {
        backgroundColor: '#475239',
        color: 'white',
      };
  
    return (
        <div className="container mt-4">
      <h1 className="mb-4 text-3xl font-bold">Details Of Marks Obtained In Mids and SEE</h1>
      <div className="mb-4">
        <label className="block">Select Semester:</label>
        <select
          className="form-select w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          value={selectedSemester}
          onChange={handleSemesterChange}
        >
          {[1, 2, 3, 4].map((semester) => (
            <option key={semester} value={semester}>
              Semester {semester}
            </option>
          ))}
        </select>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead style={headerStyle}>
          <tr>
            <th className="py-2 px-3">Subject</th>
            <th className="py-2 px-3">Mids Average</th>
            <th className="py-2 px-3">CIE</th>
            <th className="py-2 px-3">SlipTest</th>
            <th className="py-2 px-3">Credits</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id} className="border border-gray-300">
              <td className="py-2 px-3">{subject.name}</td>
              <td className="py-2 px-3">
                <input
                  className="form-input w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                  type="text"
                  value={subject.midMarks}
                  onChange={(event) => handleMidMarksChange(event, subject.id)}
                />
              </td>
              <td className="py-2 px-3">
                <input
                  className="form-input w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                  type="text"
                  value={subject.cie}
                  onChange={(event) => handleCieChange(event, subject.id)}
                />
              </td>
              <td className="py-2 px-3">
                <input
                  className="form-input w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                  type="text"
                  value={subject.sliptest}
                  onChange={(event) => handleSlipTestChange(event, subject.id)}
                />
              </td>
              <td className="py-2 px-3">{subject.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="form-group">
        <label className="block">SGPA:</label>
        <input
          className="form-input w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          type="text"
          value={sgpa}
          onChange={handleSGPAChange}
        />
      </div>
      <div className="form-group">
        <label className="block">CGPA:</label>
        <input
          className="form-input w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          type="text"
          value={cgpa}
          onChange={handleCGPAChange}
        />
      </div>
      <button className="btn btn-success mt-3 hover:bg-green-600" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  
  );
};

export default CIE;