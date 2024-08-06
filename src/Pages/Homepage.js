import React, { useState, useEffect } from 'react';
import './Homepage.css';
import 'primereact/resources/themes/saga-blue/theme.css';  // PrimeReact Theme
import 'primereact/resources/primereact.min.css';           // PrimeReact Core CSS
import 'primeicons/primeicons.css';                         // PrimeIcons
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton } from 'primereact/skeleton';

function Homepage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apply dark or light mode classes to the body element
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';

    // Change the document title
    document.title = 'Home | Portfolio';

    // Initialize AOS
    AOS.init({
      duration: 1200, // animation duration in ms
      once: true // whether animation should happen only once - while scrolling down
    });

    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {loading ? (
        <div className="skeleton-container">
          <h5>Loading...</h5>
          <Skeleton className="mb-2" width="100%" height="50px" />
          <Skeleton className="mb-2" width="10rem" height="30px" />
          <Skeleton className="mb-2" width="5rem" height="20px" />
          <Skeleton className="mb-2" width="100%" height="200px" />
          <Skeleton width="100%" height="400px" />
        </div>
      ) : (
        <>
          <Home isDarkMode={isDarkMode} data-aos="fade-in" />
          <div className="main-content">
            <section data-aos="fade-up">
              <Skills isDarkMode={isDarkMode} />
            </section>
            <section data-aos="fade-up">
              <Projects isDarkMode={isDarkMode} />
            </section>
            <section data-aos="fade-up">
              <Footer />
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
