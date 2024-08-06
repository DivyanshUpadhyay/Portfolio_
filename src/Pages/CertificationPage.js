import React, { useEffect } from 'react';
import './CertificationPage.css'; // Ensure you create this CSS file
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import dsa from '../assets/certificate1.jpeg';
import w from '../assets/certificate2.jpeg';
import cpp from '../assets/certificate3.jpeg';
import c from '../assets/certificate4.jpeg';
import { FaStar } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    title: 'DSA Using C++ Certification',
    issuer: 'Incapp',
    date: 'Jan 2023',
    imageUrl: dsa,
  },
  {
    id: 2,
    title: 'Web Designing Technology',
    issuer: 'Incapp',
    date: 'Sep 2023',
    imageUrl: w,
  },
  {
    id: 3,
    title: 'C++',
    issuer: 'Incapp',
    date: 'Oct 2022',
    imageUrl: cpp,
  },
  {
    id: 4,
    title: 'C',
    issuer: 'Incapp',
    date: 'Aug 2022',
    imageUrl: c,
  },
];

const achievements = [
  {
    id: 1,
    title: 'C Language',
    stars: 4,
    date: '2023',
  },
  {
    id: 2,
    title: 'C++ Language',
    stars: 4,
    date: '2023',
  },
  {
    id: 3,
    title: 'Python',
    stars: 3,
    date: '2023',
  },
  {
    id: 4,
    title: 'SQL',
    stars: 2,
    date: '2023',
  },
];

const CertificationPage = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {
    document.title = 'Certifications | Portfolio';
  }, []);

  return (
    <div className={`certification-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <section className="certifications">
        <h1>Certifications</h1>
        <div className="certification-list">
          {certifications.map(cert => (
            <div key={cert.id} className="certification-card">
              <img src={cert.imageUrl} alt={cert.title} className="certification-image" />
              <h2 className="certification-title">{cert.title}</h2>
              <p className="certification-issuer">Issued by: {cert.issuer}</p>
              <p className="certification-date">Date: {cert.date}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-link">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="achievements">
        <h2>Hackerrank Achievements</h2>
        <table className="achievements-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Stars</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {achievements.map(achievement => (
              <tr key={achievement.id}>
                <td>{achievement.title}</td>
                <td>
                  {[...Array(achievement.stars)].map((_, index) => (
                    <FaStar key={index} className="star-icon" />
                  ))}
                </td>
                <td>{achievement.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
};

export default CertificationPage;
