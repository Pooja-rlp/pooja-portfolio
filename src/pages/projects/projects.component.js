import React from 'react';
import './projects.component.css';

export default function Projects() {
  const projectData = [
    {
      title: 'FLP360 Ongoing Features and Improvements',
      duration: 'Jan 2024 – June 2025',
      description: 'FLP360 is a report-based web and mobile application for Forever Business Owners (FBO).',
      responsibilities: [
        'Designed and implemented new web API endpoints for data aggregation.',
        'Created custom queries to avoid gateway timeout errors.',
        'Optimized DB queries to improve performance.',
        'Resolved production issues to maintain uptime.'
      ],
      tech: 'Angular, Spring Boot, RedShift, MySQL',
      github: '',
      demo: ''
    },
    {
      title: 'NS Dinner Application (Internal Project)',
      duration: 'May 2023 – Aug 2023',
      description: 'An internal web app to manage dinner orders for employees with admin and employee features.',
      responsibilities: [
        'Designed View Order component using React.',
        'Built tables with pagination, sorted by date/floor.',
        'Used MSSQL stored procedures to manage orders.'
      ],
      tech: 'React JS, HTML, CSS, MSSQL',
      github: '',
      demo: ''
    },
    {
      title: 'Online Food Ordering System (Mock Project)',
      duration: 'Mar 2023 – Apr 2023',
      description: 'Web-based food ordering system with admin/user functionality and cart management.',
      responsibilities: [
        'Implemented admin & user portals using React.',
        'Used JSON server for data handling.',
        'Added private routing for security.'
      ],
      tech: 'React JS, HTML, CSS, JSON Server',
      github: '',
      demo: ''
    },
    {
      title: 'Online Food Ordering System (Training Project)',
      duration: 'Feb 2023 – Mar 2023',
      description: 'A food ordering app built during training using Angular and Spring Boot.',
      responsibilities: [
        'Created admin and user portals using Angular.',
        'Built backend using Spring Boot.',
        'Used MySQL to store food order details.'
      ],
      tech: 'Angular, Spring Boot, MySQL, HTML, CSS, Bootstrap',
      github: '',
      demo: ''
    }
  ];

  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            {project.duration && <p className="project-duration">{project.duration}</p>}
            <p className="project-description">{project.description}</p>
            {project.responsibilities && (
              <ul className="project-responsibilities">
                {project.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            <p className="project-tech"><strong>Technologies:</strong> {project.tech}</p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
