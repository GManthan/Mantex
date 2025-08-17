import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-hero">
          <div className="about-intro">
            <div className="intro-text">
              <h3 className="intro-heading">Passionate Engineer & Innovator</h3>
              <p className="intro-description">
                Electronics and Telecommunication Engineering student specializing in embedded systems, AI/ML, 
                and robotics. I create innovative solutions that bridge the gap between cutting-edge technology 
                and real-world applications.
              </p>
              <div className="intro-stats">
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Months Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies Mastered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-timeline">
          <h3 className="timeline-title">My Journey</h3>
          
          <div className="timeline-section">
            <h4 className="timeline-category">🎓 Education</h4>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">2022-2026</div>
                  <h4>Bachelor of Technology</h4>
                  <p>Electronics and Telecommunication Engineering</p>
                  <span className="institution">Deogiri Institute of Engineering and Management Studies</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">2020-2022</div>
                  <h4>Higher Secondary Certificate</h4>
                  <p>88.2% - Science Stream</p>
                  <span className="institution">Vivekanand College</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">2019-2020</div>
                  <h4>Secondary School Certificate</h4>
                  <p>89.3% - CBSE Board</p>
                  <span className="institution">Delhi Public School</span>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-section">
            <h4 className="timeline-category">💼 Professional Experience</h4>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">4 Months</div>
                  <h4>IoT Intern</h4>
                  <p>IoT systems integration, sensor/actuator work, microcontroller solutions</p>
                  <span className="institution">Acmegrade</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">2 Months</div>
                  <h4>Embedded Systems Intern</h4>
                  <p>LPC2148 programming, ARM7TDMI-S, industry tools</p>
                  <span className="institution">MSME Technology Center, Indo German Tool Room</span>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-section">
            <h4 className="timeline-category">🏆 Leadership & Achievements</h4>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">👨‍💼</div>
                <h4>IETE DIEMS Chairperson</h4>
                <p>Leading technical society activities and organizing tech events</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🎯</div>
                <h4>Training & Placement Cell</h4>
                <p>Supporting student career development and placement activities</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🤖</div>
                <h4>Robotics Club Co-ordinator</h4>
                <p>Organizing robotics workshops and technical competitions</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🥉</div>
                <h4>Avishkar Zonal Level</h4>
                <p>Bronze Medal in technical innovation competition</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">⛹️</div>
                <h4>National Basketball Player</h4>
                <p>Representing state in national level basketball championships</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">💡</div>
                <h4>Innohack 2.0</h4>
                <p>Top 10 finalist in national innovation hackathon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;