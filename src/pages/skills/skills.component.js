import React from 'react';
import './skills.component.css';

import { FaJava, FaReact, FaAngular, FaNetworkWired } from 'react-icons/fa';
import {
  SiSpringboot,
  SiHibernate,
  SiApachekafka,
  SiMysql,
  SiJunit5
} from 'react-icons/si';

import { MdHttp } from 'react-icons/md';

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'Microservices', icon: <FaNetworkWired /> },
  { name: 'Hibernate', icon: <SiHibernate /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'React JS', icon: <FaReact /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: 'Kafka', icon: <SiApachekafka /> },
  { name: 'Feign Client', icon: <MdHttp /> },
  { name: 'JUnit', icon: <SiJunit5 /> },
];

export default function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
