import React, { useState } from 'react'
import './navbar.component.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    const handleClick = (section) => {
        setActive(section);
        setIsMenuOpen(false);
    };
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    return (
        <div>
            <div className = "navbar">
                <p className = "name">Pooja R</p>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={`nav-content ${isMenuOpen ? 'show' : ''}`}>
                    <li className={`nav-heading ${active === 'home' ? 'active' : ''}`}>
                      <a href="#home" onClick={() => handleClick('home')}>Home</a>
                    </li>
                    <li className={`nav-heading ${active === 'about' ? 'active' : ''}`}>
                      <a href="#about" onClick={() => handleClick('about')}>About</a>
                    </li>
                    <li className={`nav-heading ${active === 'skills' ? 'active' : ''}`}>
                      <a href="#skills" onClick={() => handleClick('skills')}>Skills</a>
                    </li>
                    <li className={`nav-heading ${active === 'projects' ? 'active' : ''}`}>
                      <a href="#projects" onClick={() => handleClick('projects')}>Projects</a>
                    </li>
                    <li className={`nav-heading ${active === 'education' ? 'active' : ''}`}>
                      <a href="#education" onClick={() => handleClick('education')}>Education</a>
                    </li>
                    <li className={`nav-heading ${active === 'certifications' ? 'active' : ''}`}>
                      <a href="#certifications" onClick={() => handleClick('certifications')}>Certifications</a>
                    </li>
                    <li className={`nav-heading ${active === 'contact' ? 'active' : ''}`}>
                      <a href="#contact" onClick={() => handleClick('contact')}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;
