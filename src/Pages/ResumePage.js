import React, { useEffect } from 'react';
import './ResumePage.css'; // Create this CSS file for styling
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import resumePDF from '../assets/resume.pdf'; // Replace with the path to your PDF

const ResumePage = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {
    document.title = 'Resume | Portfolio';
  }, []);

  return (
    <div className={`resume-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <section className="resume">
        <h1>Resume</h1>
        <div className="resume-container">
          <iframe
            src={resumePDF}
            title="Resume"
            className="resume-pdf"
            frameBorder="0"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ResumePage;
