import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
    { id: 'education', label: 'Education', icon: 'fa-graduation-cap' },
    { id: 'skills', label: 'Skills', icon: 'fa-code' },
    { id: 'projects', label: 'Projects', icon: 'fa-laptop-code' },
    { id: 'resume', label: 'Resume', icon: 'fa-file-alt' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
  ];

  return (
    <motion.nav
      className="navbar navbar-horizontal"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-brand">
        <h2>Purushotham CV</h2>
      </div>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
      </button>
      <ul id="primary-navigation" className={`nav-menu ${menuOpen ? 'is-open' : ''}`}>{navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link cursor-target ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  scrollToSection(item.id);
                  setActiveSection(item.id);
                }}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
    </motion.nav>
  );
};

export default Navbar;
