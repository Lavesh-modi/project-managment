import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdFolderOpen, MdSettings } from 'react-icons/md';

import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="logo">
          <h1>Project Dashboard</h1>
        </div>
        <ul className="nav-links">
          <li className={location.pathname === '/dashboard' ? 'active' : ''}>
          <Link to="/dashboard">
      <MdDashboard className="icon" />
      Dashboard
    </Link>
          </li>
          <li className={location.pathname.startsWith('/project/') ? 'active' : ''}>
          <Link to="/dashboard">
      <MdFolderOpen className="icon" />
      Projects
    </Link>
          </li>
          <li className={location.pathname === '/settings' ? 'active' : ''}>
          <Link to="/settings">
      <MdSettings className="icon" />
      Settings
    </Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout; 