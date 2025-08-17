import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      cursor.style.left = `${x - 10}px`;
      cursor.style.top = `${y - 10}px`;
    };

    const handleMouseEnter = () => {
      cursor.classList.add('hover');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .tech-card, .contact-card, .certification-card, .achievement-card, .stat-item, .social-link, .nav-link, .theme-toggle');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;