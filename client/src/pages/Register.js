import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'client',
    department: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { firstName, lastName, email, password, role, department } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={onSubmit}>
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={onChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={onChange}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
        />
        <input
          type="text"
          placeholder="Department"
          name="department"
          value={department}
          onChange={onChange}
          required
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
