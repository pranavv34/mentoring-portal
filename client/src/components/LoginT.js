import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import Spinner from './Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CSS/login.css';
import { loginimg } from '../assets/home';
import { useNavigate } from "react-router-dom"


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [teacherId, setteacherId] = useState('');
  const [password, setPassword] = useState('');
  
  

  let navigate = useNavigate()

  const handleteacherIdChange = (e) => {
    setteacherId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const SubmitHandler = async () => {
    
    // console.log(hallTicketNumber)
    // console.log(password)
      axios.post('http://localhost:5000/mentor/logint', {
        teacherId,
        password
      }).then((res)=>{
        if(res.data.message ==="Logged in successfully!!"){
          console.log(res.data.message)
          setLoading(false);
          console.log(res.data.data)
            localStorage.setItem('user', JSON.stringify({ ...teacherId}));
            message.success('Login Successful');
          navigate("/cardt")
        }else{
          setLoading(false);
          message.error('Invalid Username or Password');
          navigate('/login');
        }
        console.log(res.data)
        
    }).catch((err)=>{
        console.log(err)
    })
    
  }

    
  

  

  return (
    <div className='centered-box class1'>
      {loading && <Spinner />}
      <div className='login-container class2'>
        <div className='image-container'>
          <img src={loginimg} alt="Placeholder" />
        </div>
        <div className='form-container form1'>
          <Form layout='vertical' >
            <h1>TEACHER'S LOGIN</h1>
            <Form.Item  className="fi1" label='TEACHER ID' name='teacherId' rules={[{ message: 'Please enter your hallTicketNumber' }]}>
              <Input
                type='text'
                placeholder='Enter your teacher id'
                value={teacherId}
                onChange={handleteacherIdChange}
              />
            </Form.Item>
            <Form.Item className="fi1" label='Password' name='password' rules={[{ message: 'Please enter your password' }]}>
              <Input
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Item>
            <div className='button-container'>
              <Link to='/register' style={{ color: 'darkgreen' }}>Not have an account? Click here to register</Link>
              <Link to='/login' style={{ color: 'darkgreen' }}>Not a Teacher?</Link>
              <button className='btn btn-primary' onClick={SubmitHandler}>Login</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
