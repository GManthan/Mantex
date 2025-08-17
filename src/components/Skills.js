import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "⚡",
      color: "var(--gradient-primary)",
      skills: [
        { name: "C", icon: "🔵", proficiency: "Expert" },
        { name: "Python", icon: "🐍", proficiency: "Intermediate" },
        { name: "Java", icon: "⚪", proficiency: "Intermediate" },
        { name: "MATLAB", icon: "📈", proficiency: "Intermediate" },
        { name: "JavaScript", icon: "🟨", proficiency: "Advanced" }
      ]
    },
    {
      title: "Embedded Systems",
      icon: "🔧",
      color: "var(--gradient-accent)",
      skills: [
        { name: "Arduino", icon: "🟦", proficiency: "Expert" },
        { name: "Raspberry Pi", icon: "🍓", proficiency: "Intermediate" },
        { name: "LPC2148", icon: "🔲", proficiency: "Intermediate" },
        { name: "IoT (NodeMCU, ESP8266)", icon: "🌐", proficiency: "Expert" },
        { name: "RTOS", icon: "⏱️", proficiency: "Intermediate" }
      ]
    },
    {
      title: "AI/ML & Computer Vision",
      icon: "🧠",
      color: "var(--gradient-secondary)",
      skills: [
        { name: "Computer Vision (OpenCV)", icon: "👁️", proficiency: "Intermediate" },
        { name: "Scikit-learn", icon: "🔬", proficiency: "Intermediate" },
        { name: "Python AI Libraries", icon: "🐍", proficiency: "Intermediate" },
        { name: "Machine Learning", icon: "🤖", proficiency: "Intermediate" },
        { name: "Data Analysis", icon: "📊", proficiency: "Intermediate" }
      ]
    },
    {
      title: "Software Engineering",
      icon: "🛠️",
      color: "var(--gradient-success)",
      skills: [
        { name: "Data Structures & Algorithms", icon: "🔗", proficiency: "Intermediate" },
        { name: "Git", icon: "🔀", proficiency: "Expert" },
        { name: "OS Concepts", icon: "💻", proficiency: "Advanced" },
        { name: "System Design", icon: "🏛️", proficiency: "Intermediate" },
        { name: "Problem Solving", icon: "🧩", proficiency: "Expert" }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      color: "var(--gradient-primary)",
      skills: [
        { name: "HTML", icon: "🔷", proficiency: "Expert" },
        { name: "CSS", icon: "🎨", proficiency: "Expert" },
        { name: "JavaScript", icon: "🟨", proficiency: "Advanced" },
        { name: "React", icon: "⚛️", proficiency: "Advanced" },
        { name: "Responsive Design", icon: "📱", proficiency: "Expert" }
      ]
    }
  ];

  const certifications = [
    {
      title: "IoT Systems Integration",
      organization: "Acmegrade",
      duration: "4 months",
      icon: "🔗",
      link: "#"
    },
    {
      title: "Embedded Systems Development",
      organization: "Indo German Tool Room",
      duration: "2 months", 
      icon: "🔧",
      link: "#"
    },
    {
      title: "Industrial Automation Training",
      organization: "Schneider Electric India Foundation",
      duration: "Completed",
      icon: "🔧",
      link: "#"
    }
  ];

  const getProficiencyBadge = (proficiency) => {
    const badges = {
      'Expert': { color: '#10b981', label: 'Expert' },
      'Advanced': { color: '#3b82f6', label: 'Advanced' },
      'Intermediate': { color: '#f59e0b', label: 'Intermediate' }
    };
    return badges[proficiency] || badges['Intermediate'];
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          Cutting-edge technologies and frameworks powering innovation
        </p>
        
        <div className="tech-stack">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="tech-category">
              <div className="category-header">
                <div className="category-icon" style={{ background: category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="tech-grid">
                {category.skills.map((skill, skillIndex) => {
                  const badge = getProficiencyBadge(skill.proficiency);
                  return (
                    <div key={skillIndex} className="tech-card">
                      <div className="tech-icon">{skill.icon}</div>
                      <div className="tech-info">
                        <h4 className="tech-name">{skill.name}</h4>
                        <span 
                          className="proficiency-badge"
                          style={{ backgroundColor: badge.color }}
                        >
                          {badge.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-showcase">
          <h3 className="certifications-title">Professional Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon-bg">
                    <span className="cert-icon">{cert.icon}</span>
                  </div>
                  <div className="cert-duration">{cert.duration}</div>
                </div>
                <div className="cert-content">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-organization">{cert.organization}</p>
                </div>
                <div className="cert-footer">
                  <a href={cert.link} className="cert-link">
                    View Certificate →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;