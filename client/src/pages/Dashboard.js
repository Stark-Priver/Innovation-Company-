import React from 'react';
import jwt_decode from 'jwt-decode';
import BursarDashboard from './BursarDashboard';
import CeoDashboard from './CeoDashboard';
import QualityAssuranceDashboard from './QualityAssuranceDashboard';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  const userRole = decoded.user.role;

  const renderDashboard = () => {
    switch (userRole) {
      case 'bursar':
        return <BursarDashboard />;
      case 'ceo':
        return <CeoDashboard />;
      case 'quality-assurance':
        return <QualityAssuranceDashboard />;
      default:
        return <h1>Dashboard</h1>;
    }
  };

  return <div>{renderDashboard()}</div>;
};

export default Dashboard;
