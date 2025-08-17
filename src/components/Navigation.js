import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navigation.css';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <svg className="logo-icon" viewBox="0 0 32 32" width="32" height="32">
            <defs>
              <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:"#ff6b6b", stopOpacity:1}} />
                <stop offset="50%" style={{stopColor:"#4ecdc4", stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#45b7d1", stopOpacity:1}} />
              </linearGradient>
            </defs>
            
            <polygon points="16,3 26,9 26,23 16,29 6,23 6,9" fill="url(#navGrad)"/>
            
            <g fill="white" opacity="0.95">
              <rect x="12" y="12" width="8" height="8" rx="1" ry="1"/>
              
              <rect x="8" y="14" width="4" height="1"/>
              <rect x="20" y="14" width="4" height="1"/>
              <rect x="8" y="16" width="4" height="1"/>
              <rect x="20" y="16" width="4" height="1"/>
              <rect x="8" y="18" width="4" height="1"/>
              <rect x="20" y="18" width="4" height="1"/>
              
              <rect x="14" y="8" width="1" height="4"/>
              <rect x="16" y="8" width="1" height="4"/>
              <rect x="18" y="8" width="1" height="4"/>
              <rect x="14" y="20" width="1" height="4"/>
              <rect x="16" y="20" width="1" height="4"/>
              <rect x="18" y="20" width="1" height="4"/>
              
              <circle cx="14" cy="14" r="0.8"/>
              <circle cx="18" cy="14" r="0.8"/>
              <circle cx="14" cy="18" r="0.8"/>
              <circle cx="18" cy="18" r="0.8"/>
              <circle cx="16" cy="16" r="1"/>
            </g>
          </svg>
          <span className="logo-text">Mantex</span>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
          
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;