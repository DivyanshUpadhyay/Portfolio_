import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import './EducationPage.css'; // Import the CSS file

const EducationPage = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {
    document.title = 'Education | Portfolio';
  }, []);

  return (
    <div className={`education-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="education-content">
        <h1 className="education-title">Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech CSE</h3>
            <h4 className="vertical-timeline-element-subtitle">I.T.S Engineering College</h4>
            <p className='o'>
              Completed B.Tech from ITS Engineering College in Computer Science and Engineering with a 7.2 CGPA in 2024.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">Class 12th</h3>
            <h4 className="vertical-timeline-element-subtitle">CBSE BOARD</h4>
            <p className='o'>
              Completed Class 12th with 72% from Maharishi Vidya Mandir, Agra Road, Aligarh in 2020.
            </p>
          </VerticalTimelineElement>
         
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">Class 10th</h3>
            <h4 className="vertical-timeline-element-subtitle">CBSE BOARD</h4>
            <p className='o'>
              Completed Class 10th with 82% from Maharishi Vidya Mandir, Agra Road, Aligarh in 2018.
            </p>
          </VerticalTimelineElement>
          
          {/* Add more timeline elements as needed */}
        </VerticalTimeline>
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;
