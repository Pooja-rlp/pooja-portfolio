import React from 'react';
import './contact.component.css';

export default function Contact() {
  const contactData = [
    { label: 'Name:', value: 'Pooja R' },
    { label: 'Email:', value: 'poojarlp689@gmail.com' },
    { label: 'Mobile:', value: '+91 9840147454' },
    { 
      label: 'LinkedIn:', 
      value: (
        <a 
          href="https://www.linkedin.com/in/pooja-r-46a268229" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link"
        >
          linkedin.com/in/pooja
        </a>
      ) 
    },
  ];

  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">Contact Me</div>
      <div className="contact-info">
        {contactData.map(({ label, value }, i) => (
          <div className="contact-item" key={i}>
            <span className="contact-label">{label} </span>
            <span className="contact-value">{value}</span>
          </div>
        ))}
      </div>
      <div className="resume-links">
        <a href="/pooja_resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
          View Resume
        </a>
        <a href="/pooja_resume.pdf" download className="resume-link">
          Download Resume
        </a>
      </div>
    </div>
  );
}
