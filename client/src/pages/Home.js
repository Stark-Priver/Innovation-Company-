import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Innovation Platform</h1>
        <p>A collaborative platform for sharing and developing ideas.</p>
      </header>
      <main className="home-main">
        <div className="cta-buttons">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
