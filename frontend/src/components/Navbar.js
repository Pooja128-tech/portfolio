import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2>Pooja G</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={handleLogout} style={{
          background: 'none',
          border: 'none',
          color: '#007bff',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Logout
        </button>
      </div>
    </nav>
  );
}
