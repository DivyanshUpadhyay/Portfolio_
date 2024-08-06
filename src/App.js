// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import SkillsPage from './Pages/SkillsPage';
import AboutMePage from './Pages/AboutMePage';
import EducationPage from './Pages/EducationPage';
import CertificationPage from './Pages/CertificationPage';
import ResumePage from './Pages/ResumePage';
// Import other page components

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/skills" element={<SkillsPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/about-me" element={<AboutMePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/education" element={<EducationPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/certificate" element={<CertificationPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/resume" element={<ResumePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
