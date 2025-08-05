import React from 'react';
import './education.component.css';

const educationData = [
  {
    year: '2022',
    degree: 'B.E (Electronics and Communication Engineering)',
    school: 'S.K.R Engineering College - Anna University',
  },
  {
    year: '2018',
    degree: 'HSC',
    school: 'LBEAAR Matriculation Higher Secondary School',
  },
  {
    year: '2016',
    degree: 'SSLC',
    school: 'LBEAAR Matriculation Higher Secondary School',
  },
];

export default function Education() {
  return (
    <div className="education-container" id="education">
      <p className="education-title">Education</p>
      {educationData.map(({ year, degree, school }, index) => (
        <p className="education-item" key={index}>
          {year && <strong>{year} - </strong>}
          {degree} - {school}
        </p>
      ))}
    </div>
  );
}
