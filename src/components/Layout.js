import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdFolderOpen, MdSettings, MdMenu, MdClose } from 'react-icons/md';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <MdClose /> : <MdMenu />}
      </button>

      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="logo">
          <h1>Tasklytic</h1>
        </div>
        <ul className="nav-links">
          <li className={location.pathname === '/dashboard' ? 'active' : ''}>
            <Link to="/dashboard" onClick={() => setSidebarOpen(false)}>
              <MdDashboard className="icon" />
              Dashboard
            </Link>
          </li>
          <li className={location.pathname.startsWith('/project/') ? 'active' : ''}>
            <Link to="/dashboard" onClick={() => setSidebarOpen(false)}>
              <MdFolderOpen className="icon" />
              Projects
            </Link>
          </li>
          <li className={location.pathname === '/settings' ? 'active' : ''}>
            <Link to="/settings" onClick={() => setSidebarOpen(false)}>
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
