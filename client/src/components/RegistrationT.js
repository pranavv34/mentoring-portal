import React, { useState } from 'react';
import axios from 'axios';

function RegistrationT() {
const [name, setName] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [section, setSection] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTeacherIdChange = (e) => {
    setTeacherId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/mentor/register-mentor', {
        name,
        teacherId,
        password,
        mobile,
        section,
        email,
      });

      console.log('Registration successful!', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
    <h2 className="text-2xl font-bold mb-4">Teacher Registration</h2>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            Name of the Teacher
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="teacherId" className="block mb-2">
            Teacher ID
          </label>
          <input
            type="text"
            name="teacherId"
            value={teacherId}
            onChange={handleTeacherIdChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block mb-2">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            value={mobile}
            onChange={handleMobileChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="section" className="block mb-2">
            Section
          </label>
          <input
            type="text"
            name="section"
            value={section}
            onChange={handleSectionChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="rounded-xl p-6 hover:bg-red-600 hover:text-white" onClick={handleSubmit}>Register</button>
      </div>
    </form>
  </div>
  );
}

export default RegistrationT;
