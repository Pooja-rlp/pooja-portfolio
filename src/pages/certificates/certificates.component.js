import React from 'react';
import './certificates.component.css';

const certificationsData = [
  'GCP – Cloud Digital Leader (Certified)',
  'GenAI courses by Google',
  'Typescript Essentials (Udemy)',
];

export default function Certifications() {
  return (
    <div className="certifications-container" id="certifications">
      <h1 className="certifications-title">certificates</h1>
      {certificationsData.map((cert, i) => (
        <p className="certifications-description" key={i}>{cert}</p>
      ))}
    </div>
  );
}
