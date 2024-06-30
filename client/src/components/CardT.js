import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap';
import MyImage from "../assets/images/CBIT-LOGO.png";

import axios from 'axios'
function CardT() {

  const [data,setdata] = useState('')
  let teacherid = '';


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
          teacherid += teacherObj[key];
        });
  
        console.log('Parsed Hall Ticket Number:',teacherid);
        // fetchAttendanceData(teacherid);
        
      } else {
        console.error('User data or hallTicketNumber not found in localStorage.');
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }, []);
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/mentor/${teacherid}`).then((res)=>{
      console.log(res.data)
      setdata(res.data.data)
      console.log(data.length)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className='flex flex-wrap ml-24'>
  {data.length > 0 ? (
    data.map((item, index) => (
      <div key={index} className='flex items-center bg-white rounded p-8 m-4 w-5/12 shadow-xl'>
        <img src={MyImage} alt='student image' className='w-40 h-32 mr-8' />
        <div>
          <h2 className='text-xl font-bold'>{item?.name}</h2>
          <p className='text-gray-600'>{item?.halltktno}</p>
          <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to={`/student/${item.halltktno}`} className='text-white'>
              View More Details
            </Link>
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className='text-red-500'>No data found</p>
  )}
</div>

  )
}

export default CardT