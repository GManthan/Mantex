import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      color: "#667eea",
      skills: [
        { name: "C", proficiency: "Expert" },
        { name: "Python", proficiency: "Intermediate" },
        { name: "Java", proficiency: "Intermediate" },
        { name: "MATLAB", proficiency: "Intermediate" },
        { name: "JavaScript", proficiency: "Advanced" }
      ]
    },
    {
      title: "Embedded",
      color: "#4facfe",
      skills: [
        { name: "Arduino", proficiency: "Expert" },
        { name: "Raspberry Pi", proficiency: "Intermediate" },
        { name: "LPC2148", proficiency: "Intermediate" },
        { name: "IoT", proficiency: "Expert" },
        { name: "RTOS", proficiency: "Intermediate" }
      ]
    },
    {
      title: "AI/ML",
      color: "#43e97b",
      skills: [
        { name: "OpenCV", proficiency: "Intermediate" },
        { name: "Scikit-learn", proficiency: "Intermediate" },
        { name: "TensorFlow", proficiency: "Intermediate" },
        { name: "Data Analysis", proficiency: "Intermediate" }
      ]
    },
    {
      title: "Web Dev",
      color: "#38bdf8",
      skills: [
        { name: "HTML/CSS", proficiency: "Expert" },
        { name: "JavaScript", proficiency: "Advanced" },
        { name: "React", proficiency: "Advanced" },
        { name: "Responsive", proficiency: "Expert" }
      ]
    }
  ];

  const certifications = [
    {
      title: "IoT Systems Integration",
      organization: "Acmegrade",
      duration: "4 months"
    },
    {
      title: "Embedded Systems Development",
      organization: "Indo German Tool Room",
      duration: "2 months"
    },
    {
      title: "Industrial Automation",
      organization: "Schneider Electric",
      duration: "Certified"
    }
  ];

  const getProficiencyColor = (proficiency) => {
    const colors = {
      'Expert': '#10b981',
      'Advanced': '#3b82f6', 
      'Intermediate': '#f59e0b'
    };
    return colors[proficiency] || colors['Intermediate'];
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          Cutting-edge technologies and frameworks powering innovation
        </p>
        
        {/* Compact All-Skills Grid */}
        <div className="skills-compact">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category-section">
              <div className="category-header-compact">
                <h3 className="category-title-compact" style={{color: category.color}}>
                  {category.title}
                </h3>
              </div>
              <div className="skills-row">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-compact">
                    <span className="skill-name-compact">{skill.name}</span>
                    <span 
                      className="skill-level-compact"
                      style={{ backgroundColor: getProficiencyColor(skill.proficiency) }}
                    >
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compact Certifications */}
        <div className="certifications-minimal">
          <h3 className="cert-title-minimal">Certifications</h3>
          <div className="cert-grid-minimal">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-minimal">
                <span className="cert-name-minimal">{cert.title}</span>
                <span className="cert-org-minimal">{cert.organization}</span>
                <span className="cert-duration-minimal">{cert.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
