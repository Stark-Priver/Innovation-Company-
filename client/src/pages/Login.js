import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      history.push('/dashboard');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
