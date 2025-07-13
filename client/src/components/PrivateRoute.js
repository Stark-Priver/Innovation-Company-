import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        jwtDecode(token);
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  };

  return isAuthenticated() ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
