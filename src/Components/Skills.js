import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiFigma } from 'react-icons/si';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'; // Import arrow icons
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

// Define ChangingProgressProvider
const ChangingProgressProvider = ({ values, children }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % values.length);
    }, 1000); // Change interval as needed

    return () => clearInterval(interval);
  }, [index, values.length]);

  return <>{children(values[index])}</>;
};

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} />, percentage: 85 },
  { name: 'CSS', icon: <FaCss3Alt size={40} />, percentage: 85 },
  { name: 'JavaScript', icon: <FaJsSquare size={40} />, percentage: 60 },
  { name: 'React', icon: <FaReact size={40} />, percentage: 60 },
  { name: 'Node.js', icon: <FaNodeJs size={40} />, percentage: 60 },
  { name: 'MongoDB', icon: <DiMongodb size={40} />, percentage: 60 },
  { name: 'SQL', icon: <FaDatabase size={40} />, percentage: 60 },
  { name: 'Express', icon: <FaDatabase size={40} />, percentage: 60 },
  { name: 'C', icon: <FaDatabase size={40} />, percentage: 80 },
  { name: 'C++', icon: <FaDatabase size={40} />, percentage: 85 },
  { name: 'Figma', icon: <SiFigma size={40} />, percentage: 80 }
];

const Skills = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);

  // Number of skills to display initially
  const initialDisplayCount = 4;
  const skillsToDisplay = showAll ? skills : skills.slice(0, initialDisplayCount);

  return (
    <div className={`skills-section ${isDarkMode ? 'dark-mode' : ''}`} id="skills" data-aos="flip-left" data-aos-duration="500">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-container">
        {skillsToDisplay.map((skill, index) => (
          <div key={index} className="skill-item">
            <ChangingProgressProvider values={[0, skill.percentage]}>
              {percentage => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathColor: isDarkMode ? '#FFA500' : `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: isDarkMode ? '#FFF' : '#333',
                    trailColor: isDarkMode ? '#333' : '#e6e6e6',
                    pathTransitionDuration: 0.2, // Duration of the fill animation
                  })}
                />
              )}
            </ChangingProgressProvider>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-text">
              <strong>{skill.name}</strong>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="toggle-button" 
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Show Less ' : 'Show All '}
        {showAll ? <FaArrowUp /> : <FaArrowDown />} {/* Display arrows based on state */}
      </button>
    </div>
  );
};

export default Skills;