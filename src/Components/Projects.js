import React from 'react';
import './Projects.css';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
import Project5 from '../assets/Project5.png';

// Sample projects data with GitHub links
const projects = [
    {
        id: 1,
        title: 'Tax Management System Using C++',
        description: 'A console based application in which users can create, login, check CTC and tax. Admin can access all the information, change passwords, and print details. All data is stored in the system using the native file system but created in a secured location.',
        imageUrl: Project1,
        techStack: ['CPP'],
        link: 'https://github.com/DivyanshUpadhyay/Tax-Management' // GitHub link
    },
    {
        id: 2,
        title: 'Edit Ease',
        description: 'Developed a React web application for text editing, featuring functionalities like text capitalization, lowercase conversion, and extra space removal, with added clipboard copying capability.',
        imageUrl: Project2,
        techStack: ['React', 'Bootstrap', 'jQuery'],
        link: 'https://ease-edit.netlify.app/' // Project link
    },
    {
        id: 3,
        title: 'Personal Diary',
        description: 'Built a secure console application for user account management and diary entries. Features include account creation, login, diary insertion and reading, password reset via OTP, and admin access for data management.',
        imageUrl: Project3,
        techStack: ['CPP'],
        link: 'https://github.com/DivyanshUpadhyay/Personal-Diary' // GitHub link
    },
    {
        id: 4,
        title: 'Majestic Journey',
        description: 'Designed and developed a hotel and tour booking platform with user and admin interfaces, utilizing the MERN stack (MongoDB, Express.js, React, Node.js), featuring user authentication, real-time booking, payment integration, and an admin dashboard for managing bookings.',
        imageUrl: Project4,
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        link: 'https://github.com/DivyanshUpadhyay' // GitHub link
    },
    {
        id: 5,
        title: 'UI For Culture Story',
        description: 'Designed the UI for CulturStory.com using Figma, creating an intuitive and engaging interface to showcase cultural stories. Focused on high-fidelity mockups and interactive prototypes, ensuring a user-friendly experience with accessible navigation and appealing visuals.',
        imageUrl: Project5,
        techStack: ['Figma'],
        link: 'https://www.figma.com/design/72ff14agJEG8Q9GQMvRNnP/CULTURE-STORY?node-id=0-1&t=EhPjgaDgaFczDDim-1' // Figma link
    }
];

// Projects component
const Projects = ({ isDarkMode }) => {
    const handleCardClick = (link) => {
        window.open(link, '_blank'); // Open the project link in a new tab
    };

    return (
        <section id="projects" className={`projects-section ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card" onClick={() => handleCardClick(project.link)}>
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                        <div className="tech-overlay">
                            <div className="tech-stack">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className={`tech-item ${tech.toLowerCase()}`}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
