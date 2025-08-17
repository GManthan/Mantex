import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Video Analytics Dashboard",
      description: "Real-time video analysis system with computer vision capabilities for intelligent monitoring and analytics.",
      technologies: ["Python", "OpenCV", "React", "Computer Vision"],
      features: [
        "Real-time video processing",
        "Object detection and tracking",
        "Analytics dashboard",
        "Performance monitoring"
      ]
    },
    {
      id: 2,
      title: "Pinchit AI",
      description: "Gesture control system achieving 90% accuracy for hands-free device interaction using computer vision.",
      technologies: ["Arduino", "Python", "OpenCV", "Machine Learning"],
      features: [
        "90% gesture recognition accuracy",
        "Real-time hand tracking",
        "Multiple gesture commands",
        "Arduino integration"
      ]
    },
    {
      id: 3,
      title: "Footstep Power Generator",
      description: "Energy harvesting prototype using piezoelectric technology to generate power from human footsteps.",
      technologies: ["Arduino", "Piezoelectric Sensors", "Energy Systems"],
      features: [
        "Piezoelectric energy conversion",
        "Power storage system",
        "Efficiency optimization",
        "Sustainable energy solution"
      ]
    },
    {
      id: 4,
      title: "AI Integrated Sign Language",
      description: "Real-time gesture translation system for sign language communication using flex sensors and AI.",
      technologies: ["Arduino", "Flex Sensors", "AI/ML", "Communication Systems"],
      features: [
        "Real-time gesture translation",
        "Flex sensor integration",
        "AI-powered recognition",
        "Communication interface"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Innovative solutions combining embedded systems, AI/ML, and robotics
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;