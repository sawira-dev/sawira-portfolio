import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left – Initials Card */}
        <div className="about-visual">
          <div className="initials-card">
            <div className="rotating-ring"></div>
            <span className="initials-text">SM</span>
          </div>
          <p className="name-under">Sawira Manzoor</p>
        </div>

        {/* Right – Bio */}
        <div className="about-content">
          <h2 className="section-title">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="about-description">
            I am a passionate Software Engineer and BS Computer Science student with over
            1.5 years of hands‑on development experience. I specialize in building modern
            web applications using React, .NET, JavaScript, and Bootstrap. My experience
            ranges from enterprise management systems and company websites to real‑time
            Voice over IP communication systems.
          </p>

          <div className="trait-grid">
            {["Problem Solver", "Fast Learner", "Team Player", "Clean Code", 
              "UI/UX Focused", "Responsive Design", "API Integration", 
              "Performance Optimization"].map((trait) => (
              <span key={trait} className="trait-badge">{trait}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;