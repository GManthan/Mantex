import React from 'react';
import './Skills.css';

const Skills = () => {

  const skillCategories = [
    {
      title: "Programming",
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
      title: "Embedded",
      icon: "🔧",
      color: "var(--gradient-accent)",
      skills: [
        { name: "Arduino", icon: "🟦", proficiency: "Expert" },
        { name: "Raspberry Pi", icon: "🍓", proficiency: "Intermediate" },
        { name: "LPC2148", icon: "🔲", proficiency: "Intermediate" },
        { name: "IoT", icon: "🌐", proficiency: "Expert" },
        { name: "RTOS", icon: "⏱️", proficiency: "Intermediate" }
      ]
    },
    {
      title: "AI/ML",
      icon: "🧠",
      color: "var(--gradient-secondary)",
      skills: [
        { name: "OpenCV", icon: "👁️", proficiency: "Intermediate" },
        { name: "Scikit-learn", icon: "🔬", proficiency: "Intermediate" },
        { name: "TensorFlow", icon: "🔥", proficiency: "Intermediate" },
        { name: "Data Analysis", icon: "📊", proficiency: "Intermediate" }
      ]
    },
    {
      title: "Web Dev",
      icon: "🌐",
      color: "var(--gradient-success)",
      skills: [
        { name: "HTML/CSS", icon: "🎨", proficiency: "Expert" },
        { name: "JavaScript", icon: "�", proficiency: "Advanced" },
        { name: "React", icon: "⚛️", proficiency: "Advanced" },
        { name: "Responsive", icon: "📱", proficiency: "Expert" }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({
      ...skill,
      category: category.title,
      categoryColor: category.color
    }))
  );

  const certifications = [
    {
      title: "IoT Systems Integration",
      organization: "Acmegrade",
      duration: "4 months",
      icon: "🔗"
    },
    {
      title: "Embedded Systems Development",
      organization: "Indo German Tool Room",
      duration: "2 months",
      icon: "🔧"
    },
    {
      title: "Industrial Automation",
      organization: "Schneider Electric",
      duration: "Certified",
      icon: "⚙️"
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
        
        {/* Skills Grid Layout */}
        <div className="skills-layout">
          {/* Tab Navigation */}
          <div className="skills-tabs">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={`skill-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                style={{ 
                  '--tab-color': category.color,
                  background: activeTab === index ? category.color : 'transparent'
                }}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-title">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Content */}
          <div className="skills-content">
            <div className="skills-grid">
              {skillCategories[activeTab].skills.map((skill, index) => {
                const badge = getProficiencyBadge(skill.proficiency);
                return (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span 
                        className="skill-badge"
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
        </div>

        {/* Compact Certifications */}
        <div className="certifications-compact">
          <h3 className="cert-title">Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item">
                <span className="cert-icon">{cert.icon}</span>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.organization} • {cert.duration}</p>
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