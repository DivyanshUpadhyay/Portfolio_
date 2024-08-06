import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SkillsPage.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Chart } from 'primereact/chart';
import Skills from '../Components/Skills';

const SkillsPage = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
    });
  }, []);

  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'SQL', 'C', 'C++', 'Figma'],
    datasets: [
      {
        label: 'Skill Level',
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        borderColor: 'rgba(25, 118, 210, 1)',
        pointBackgroundColor: 'rgba(25, 118, 210, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(25, 118, 210, 1)',
        data: [9, 8, 7, 6, 6, 5, 4, 7, 7, 8]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: isDarkMode ? '#fff' : '#000',
        },
        grid: {
          color: isDarkMode ? '#555' : '#ddd',
        },
        ticks: {
          color: isDarkMode ? '#fff' : '#000',
        }
      }
    }
  };

  return (
    <div className={`skills-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="skills-content">
        <h1 className="skills-title" data-aos="fade-up">My Key Skills</h1>
        <div className="chart-container" data-aos="fade-right">
          <Chart type="radar" data={data} options={options} />
        </div>
        <section className="skills-description" data-aos="fade-right">
          <p>Here are some of my key skills and my level of expertise in each. The radar chart provides a visual representation of my abilities.</p>
        </section>
      </main>
      <Skills isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Footer />
    </div>
  );
};

export default SkillsPage;
