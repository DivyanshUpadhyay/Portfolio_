// Home.js
import React from 'react';
import TypingEffect from 'react-typing-effect';
import './Home.css';
import profilePhoto from '../assets/profile-photo.png'; // Adjust the path as needed
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Home = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about-me'); // Navigate to the AboutMePage
  };

  return (
    <section id="home" className={`home-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="text-container">
          <TypingEffect
            text={["Hello, I'm Divyansh Upadhyay.", "I am a Web Developer."]}
            speed={100}
            eraseDelay={2000}
            typingDelay={500}
            cursorRenderer={cursor => <span>{cursor}</span>}
            displayTextRenderer={text => (
              <p>{text}</p>
            )}
          />
          <p>Passionate web developer with a keen interest in creating dynamic and user-friendly web applications.
            <br />
            <Button label="Learn More" severity="success" onClick={handleLearnMoreClick} />
          </p>
        </div>
        <div className="photo-container">
          <img src={profilePhoto} alt="Divyansh Upadhyay" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
