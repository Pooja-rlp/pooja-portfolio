import React from 'react';
import './about.component.css';

export default function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I am a passionate Full Stack Developer with over 2.6 years of professional experience specializing in Java, Spring Boot, and React.
      </p>
      <p className="about-description">
        Throughout my career, I have developed scalable and maintainable web applications, working closely with cross-functional teams to deliver high-quality software solutions.
      </p>
      <ul className="about-points">
        <li>Expertise in developing RESTful APIs using Spring Boot and Java.</li>
        <li>Experience building responsive and user-friendly interfaces with React.</li>
        <li>Strong understanding of software design patterns and best practices.</li>
        <li>Worked on end-to-end project delivery, from requirement analysis to deployment.</li>
        <li>Collaborated in Agile/Scrum environments, participating in daily stand-ups and sprint planning.</li>
        <li>Passionate about writing clean, efficient, and well-documented code.</li>
      </ul>
    </div>
  );
}
