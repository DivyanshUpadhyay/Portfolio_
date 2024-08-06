// src/Components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'primeicons/primeicons.css';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="navbar-brand">
        <Link to="/">Divyansh Upadhyay</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/about-me">About</Link></li>
        <li className="nav-item"><Link to="#projects">Projects</Link></li>
        <li className="nav-item"><Link to="/skills">Skills</Link></li>
        <li className="nav-item"><Link to="/education">Education</Link></li>
        <li className="nav-item"><Link to="/certificate">Certifications</Link></li>
        <li className="nav-item"><Link to="/resume">Resume</Link></li>
        <li className="nav-item">
          <ToggleSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </li>
      </ul>
    </nav>
  );
};

const ToggleSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <label className={`toggle-switch ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <input type="checkbox" checked={!isDarkMode} onChange={toggleDarkMode} />
      <span className={`pi ${isDarkMode ? 'pi-moon' : 'pi-sun'}`} style={{ fontSize: '1.5rem' }} />
      <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </label>
  );
};

export default Navbar;
