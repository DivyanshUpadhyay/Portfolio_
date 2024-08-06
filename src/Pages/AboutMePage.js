import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './AboutMePage.css'; // Import the CSS file
import photo from '../assets/profile-photo.png';

const AboutMePage = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {
    document.title = 'About | Portfolio';
  }, []);

  return (
    <div className={`about-me-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="about-me-content">
        <section className="about-me-introduction">
          <div className="about-me-photo">
            <img src={photo} alt="Divyansh Upadhyay" className="profile-photo" />
          </div>
          <div className="about-me-text">
            <h1>About Me</h1>
            <p>
              Hi there! I'm Divyansh Upadhyay, a passionate web developer who specializes in building dynamic and responsive web applications using the MERN stack. With a keen eye for design and a love for coding, I strive to create engaging and user-friendly experiences.
            </p>
            <p>
              My journey in tech began with curiosity and a drive to solve problems. Over time, I've developed a strong skill set that includes HTML, CSS, JavaScript, React, MongoDB, Express, Node.js, SQL, and Figma. I enjoy working on challenging projects and continuously learning new technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or working on personal projects that fuel my creativity.
            </p>
          </div>
        </section>
        <section className="about-me-contact">
          <h2>Get in Touch</h2>
          <p>If you have any questions or want to connect, feel free to reach out!</p>
          <a href="mailto:divyanshupadhyay2003@gmail.com" className="contact-link">Email Me</a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMePage;
